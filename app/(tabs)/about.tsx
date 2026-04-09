import Stars from "@/components/Stars";
import { useCoffeeSQLite } from "@/services/coffeeSQLite";
import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { Button } from "tamagui";

// import coffeeSQLite from "@/services/coffeeSQLite.js";
export default function about() {
    const [userCommand, setUserCommand] = useState("");
    const [returnMsg, setReturnMsg] = useState("");
    //
    const { useCommand } = useCoffeeSQLite();
    async function runCommand() {
        setReturnMsg(JSON.stringify(await useCommand(userCommand)));
    }

    return (
        <View>
            <View className="p-2 DataBaseCli bg-slate-600">
                <View className="Title">
                    <Text>数据库控制台</Text>
                </View>
                <View className="flex-row items-center p-2">
                    <Text className="text-white ">{">_"}</Text>
                    <TextInput
                        className="m-1 text-white w-70%"
                        value={userCommand}
                        placeholder="输入指令..."
                        onChangeText={setUserCommand}
                        onSubmitEditing={runCommand}
                    ></TextInput>
                </View>
                <View className="flex-row justify-around">
                    <Text
                        className="p-1 text-white rounded-md bg-sky-300"
                        onPress={async () => {
                            setReturnMsg(
                                JSON.stringify(
                                    await useCommand(
                                        "select * from sqlite_master",
                                    ),
                                ),
                            );
                        }}
                    >
                        豆仓表
                    </Text>

                    <Text></Text>
                    <Button
                        theme="blue"
                        onPress={() => {
                            alert("HelloWorld!!!");
                        }}
                    >
                        Hello world
                    </Button>
                </View>
                <View className="returnMsgs">
                    <Text>{returnMsg ? returnMsg : "回调信息..."}</Text>
                </View>
            </View>
            <View>
                <Text>小组件测试</Text>
                <View>
                    <Stars selectType={0} source={4}></Stars>
                </View>
            </View>
        </View>
    );
}
