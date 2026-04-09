import Stars from "@/components/Stars";
import { useCoffeeSQLite } from "@/services/coffeeSQLite";
import { PencilLine, Trash2 } from "lucide-react-native";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
{/* prettier-ignore */}
export default function coffeeBeans() {
    const { selectBeanList } = useCoffeeSQLite();

    // const [coffeeBeanList, setCoffeeBeanList] = useState<any>([]);

    //开发环境假数据
    const [coffeeBeanList, setCoffeeBeanList] = useState<any[]>([
        {
            bean_name: "辛鹿",
            create_log_time: "2026-04-09 14:13:31",
            drink_style: 1,
            flavor: "茉莉",
            id: 1,
            origin: "瑰夏",
            price: 12,
            price_per_gram: 0.085,
            process_method: "水洗",
            rest_stock: 120,
            roast_level: 3,
            rost_date: 1771948800000,
            status: 1,
            stay_days: 7,
            stock: 12,
        },
        {
            bean_name: "辛鹿 橘香茉莉",
            create_log_time: "2026-04-09 14:16:19",
            drink_style: 1,
            flavor: "茉莉 橙子",
            id: 2,
            origin: "埃塞 耶加",
            price: 50,
            price_per_gram: 10,
            process_method: "水洗",
            rest_stock: 10,
            roast_level: 1,
            rost_date: 2,
            status: 1,
            stay_days: 7,
            stock: 10,
        },
    ]);

    useEffect(() => {
        const mouted = async () => {
            // const rowDataList = await selectBeanList();
            const rowDataList = coffeeBeanList;
            console.log("查询", rowDataList);

            //计算养豆时间
            const nowTime = Date.now();
            const data = rowDataList.map((item) => {
                item["currentStayDay"] =
                    Math.floor((nowTime - item.rost_date) / 86400000) -
                    item.stay_days;
                return item;
            });
            setCoffeeBeanList(data);
        };
        mouted();
    }, []);

    return (
        <View className="justify-center flex-1 align-middle">
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
                {/* <Text>"AAAA"{JSON.stringify(coffeeBeanList)}</Text> */}
                <FlatList
                    data={coffeeBeanList}
                    renderItem={({ item }) => (
                        <View className="flex flex-row items-center justify-around bg-white ListItem">
                            <View className="beanImg">
                                <Text>img</Text>
                            </View>
                            <View className="beanInfo">
                                <Text className="beanTitle">
                                    {item.bean_name}
                                </Text>
                                <Text className="beanInfoList">
                                    养豆{item.currentStayDay}天{" "}
                                    {item.rest_stock}/{item.stock}g 克价{" "}
                                    {item.price_per_gram}/g
                                </Text>
                                <View className="flex flex-row ">
                                    <Text>烘焙度 </Text>
                                    <Stars
                                        selectType={1}
                                        source={item.roast_level}
                                    />
                                    <Text> 评分 </Text>
                                    <Stars selectType={0} source={4} />
                                </View>
                            </View>
                            <View className="flex flex-row justify-around operaBtn ">
                                <PencilLine />
                                <Trash2 color={"red"}></Trash2>
                            </View>
                        </View>
                    )}
                ></FlatList>
                <View className="ListItem"></View>
            </View>
        </View>
    );
}
