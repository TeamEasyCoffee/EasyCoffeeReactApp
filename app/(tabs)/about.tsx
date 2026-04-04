import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";

import { Button } from "tamagui";

import coffeeSQLite from "@/services/coffeeSQLite.js";
export default function about() {
    const [userCommand, setUserCommand] = useState("");
    const [returnMsg, setReturnMsg] = useState("");
    //
    async function runCommand() {
        setReturnMsg(
            JSON.stringify(await coffeeSQLite.useCommand(userCommand)),
        );
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
                        onPress={async () => {
                            setReturnMsg(
                                JSON.stringify(
                                    await coffeeSQLite.useCommand(
                                        "select * from coffee_beans",
                                    ),
                                ),
                            );
                        }}
                        className="p-1 text-white rounded-md bg-sky-300"
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
        </View>
    );
}
