import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";
export default function takeCoffee() {
    const [newCoffeeBeanForm, setNewCoffeeBeanForm] = useState({
        beanName: "",
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
            <View>
                <Text className="w-100% h-50% ">
                    {JSON.stringify(newCoffeeBeanForm)}
                </Text>
            </View>
            <View className="beanImageContainer w-100%  *:bg-slate-400">
                <View className="">
                    <Feather name="camera" size={24} color="black" />
                </View>
                <View>
                    <Feather name="image" size={24} color="black" />
                </View>
            </View>
            <View className="coffeeBeanInfoContainer">
                <View className="infoItem">
                    <Text className="lable">豆子名称</Text>
                    <TextInput
                        value={newCoffeeBeanForm.beanName}
                        onChangeText={(Text) => {
                            updateCoffeeBeanForm("beanName", Text);
                        }}
                    ></TextInput>
                </View>
                <View className="infoItem">
                    <Text className="lable">处理法</Text>
                    <TextInput
                        value={newCoffeeBeanForm.processMethod}
                        onChangeText={(Text) => {
                            updateCoffeeBeanForm("processMethod", Text);
                        }}
                    ></TextInput>
                </View>
                <View className="infoItem">
                    <Text className="lable">烘焙程度</Text>
                    <TextInput
                        value={newCoffeeBeanForm.beanName}
                        onChangeText={(Text) => {
                            updateCoffeeBeanForm("beanName", Text);
                        }}
                    ></TextInput>
                </View>
                <View className="infoItem">
                    <Text className="lable">冲煮方式</Text>
                    <TextInput
                        value={newCoffeeBeanForm.beanName}
                        onChangeText={(Text) => {
                            updateCoffeeBeanForm("beanName", Text);
                        }}
                    ></TextInput>
                </View>
                <View className="infoItem">
                    <Text className="lable">烘焙时间</Text>
                    <TextInput
                        value={newCoffeeBeanForm.beanName}
                        onChangeText={(Text) => {
                            updateCoffeeBeanForm("beanName", Text);
                        }}
                    ></TextInput>
                </View>
                <View className="infoItem">
                    <Text className="lable">容量</Text>
                    <TextInput
                        value={newCoffeeBeanForm.beanName}
                        onChangeText={(Text) => {
                            updateCoffeeBeanForm("beanName", Text);
                        }}
                    ></TextInput>
                </View>
                <View className="infoItem">
                    <Text className="lable">价格</Text>
                    <TextInput
                        value={newCoffeeBeanForm.beanName}
                        onChangeText={(Text) => {
                            updateCoffeeBeanForm("beanName", Text);
                        }}
                    ></TextInput>
                </View>
                <View className="infoItem">
                    <Text className="lable">风味</Text>
                    <TextInput
                        value={newCoffeeBeanForm.beanName}
                        onChangeText={(Text) => {
                            updateCoffeeBeanForm("beanName", Text);
                        }}
                    ></TextInput>
                </View>
            </View>
        </View>
    );
}
