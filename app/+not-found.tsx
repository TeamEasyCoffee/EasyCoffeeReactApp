import { Stack, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
export default function notFound() {
    const router = useRouter();
    const pageBackIndex = function () {};
    return (
        <View className="flex-1">
            <Stack.Screen
                options={{
                    title: "页面不存在",
                }}
            ></Stack.Screen>
            <View className="flex items-center justify-center flex-1 bg-blue-950">
                <Text className="font-bold text-white text-9xl">?</Text>

                <Text className="m-5 text-3xl font-bold text-white ">
                    404 Not Found
                </Text>
                <View>
                    <Pressable
                        onPress={() => {
                            router.replace("/takeCoffee");
                        }}
                    >
                        <View className="p-4 font-bold text-white rounded-xl bg-slate-400">
                            <Text>返回首页</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}
