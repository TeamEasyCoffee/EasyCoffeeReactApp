import { useEffect, useState } from "react";
import { Text, View } from "react-native";
{/* prettier-ignore */}
export default function coffeeBeans() {
    const [coffeeBeanList, setCoffeeBeanList] = useState([]);

    function selectBeanList() {
        try {
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {}, []);
    return (
        <View className="justify-center flex-1 align-middle ">
            <View className="flex-row justify-between topContainer ">
                <View className="">
                    <Text>筛选</Text>
                </View>
                <View className="flex-row ">
                    <Text>意式</Text>
                    <Text>手冲</Text>
                </View>
                <View>
                    <Text>排序</Text>
                </View>
            </View>
            <View className="MainContainer">
                <View className="ListItem"></View>
            </View>
        </View>
    );
}
