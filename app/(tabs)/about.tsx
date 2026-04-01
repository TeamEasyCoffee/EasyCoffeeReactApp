import dbCoffeeDataBase from "@/services/DataBseInit";
import { useState } from "react";
import { FlatList, Pressable, Text, TextInput, View } from "react-native";

export default function about() {
  const [message, setmessage] = useState("aa");
  let [dataMsg, setDataMsg] = useState("");
  let [commandDataBase, setCommandDataBase] = useState("");

  const test = async () => {
    console.log("test");
    await dbCoffeeDataBase.initDb();
    await dbCoffeeDataBase.firstMakeTables();
    await dbCoffeeDataBase.insertTest();
    const rows = await dbCoffeeDataBase.selectTableAll("coffee_beans");
    console.log("查询", rows);
    setDataMsg(rows);
  };

  //向数据库发送指令
  // select * from coffee_beans
  async function commandToDataBase() {
    await dbCoffeeDataBase.initDb();
    console.log(commandDataBase);
    let backMsg = await dbCoffeeDataBase.sendCommand(commandDataBase);
    console.log(backMsg);
    setDataMsg(JSON.stringify(backMsg));
  }
  return (
    <View className="items-center justify-center flex-1 bg-white">
      <View className="">
        <View>
          <Text>数据库:</Text>
        </View>
        <View>
          <TextInput
            value={commandDataBase}
            onChangeText={setCommandDataBase}
            className=" border-l-blue-500 border-spacing-1"
          />
          <Pressable
            onPress={commandToDataBase}
            className=" w-[60px] p-4 text-white rounded-md  bg-slate-600"
          >
            <Text>{"=>"}</Text>
          </Pressable>
          <Text className=" w-[100vw]">{dataMsg}</Text>
        </View>
      </View>
      <Pressable onPress={test}>
        <View className="m-3 text-white rounded-md bg-slate-500">
          <Text>测试数据库</Text>
        </View>
      </Pressable>
      <FlatList
        data={dataMsg}
        renderItem={({ item }) => (
          <View>
            <Text>{JSON.stringify(item)}</Text>
          </View>
        )}
      ></FlatList>
      {/* <Text className="text-orange-600 "> {}</Text> */}
    </View>
  );
}
