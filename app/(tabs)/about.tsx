import dbCoffeeDataBase from "@/services/DataBseInit";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
export default function about() {
  const [message, setmessage] = useState("aa");
  let [dataMsg, setDataMsg] = useState("");

  const test = async () => {
    console.log("test");
    await dbCoffeeDataBase.initDb();
    const rows = await dbCoffeeDataBase.selectTableAll("coffee_beans");
    console.log("查询", rows);
    setDataMsg(rows);
  };
  return (
    <View className="items-center justify-center flex-1 bg-white">
      <Text className="text-xl font-bold text-blue-500">!???!</Text>
      <Pressable onPress={test}>
        <View className="m-3 text-white rounded-md bg-slate-500">
          <Text>测试数据库</Text>
        </View>
      </Pressable>
      {/* <FlatList data={dataMsg}>

      </FlatList> */}
      {/* <Text className="text-orange-600 "> {}</Text> */}
    </View>
  );
}
