import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { Form, Input, Label } from "tamagui";
export default function takeCoffee() {
    const [newCoffeeBeanForm, setNewCoffeeBeanForm] = useState({
        beanName: "",
        origin: "",
        processMethod: "",
        roastLever: 0,
        drinkStyle: 0,
        flavor: "",
        rostDate: 1,
        stayDays: 7,
        stock: 100,
        price: 0,
        pricePerGram: 0,
    });
    const updateCoffeeBeanForm = (
        key: keyof typeof newCoffeeBeanForm,
        value: any,
    ) => {
        setNewCoffeeBeanForm((prev) => ({
            ...prev,
            [key]: value,
        }));
    };
    return (
        <View className="items-center justify-center flex-1 bg-white newCoffeeBeanContainer">
            <View className="">
                <Text className="w-100%  h-50% ">
                    {JSON.stringify(newCoffeeBeanForm)}
                </Text>
            </View>
            <View className=" beanImageContainer bg-slate-400">
                <View className="">
                    <Feather name="camera" size={40} color="black" />
                </View>
                <View>
                    <Feather name="image" size={24} color="black" />
                </View>
            </View>
            <View className="mainForm">
                <Form>
                    <View className="formItem name">
                        <TextInput
                            className="border-b-2 border-black "
                            placeholder="输入咖啡豆名称..."
                        />
                    </View>
                    <View className="formItem">
                        <Label htmlFor="origin">产地 | 品种</Label>
                        <Input id="origin" placeholder="输入产地.."></Input>
                    </View>
                </Form>
            </View>
        </View>
    );
}
