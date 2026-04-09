import { Tabs } from "expo-router";
// import "../global.css";
import InformationIcon from "@/assets/icons/about.svg";
import BeanIcon from "@/assets/icons/coffee-bean.svg";
import TakeCoffeeIcon from "@/assets/icons/Coffee.svg";
import { useCoffeeSQLite } from "@/services/coffeeSQLite";

export default function RootLayout() {
    const { checkFirstApp } = useCoffeeSQLite();
    async function intiDb() {
        // 首次启动应用
        await checkFirstApp();
    }
    intiDb();
    return (
        <Tabs>
            <Tabs.Screen
                name="coffeeBeans"
                options={{
                    title: "豆仓",
                    headerTitleAlign: "center",
                    headerStyle: {
                        height: 80,
                        borderTopWidth: 0,
                        borderColor: "black",
                    },
                    tabBarIcon: ({ color, focused }) => (
                        <BeanIcon
                            width={24}
                            height={24}
                            fill={focused ? color : "#999"}
                        ></BeanIcon>
                    ),
                }}
            ></Tabs.Screen>
            <Tabs.Screen
                name="takeCoffee"
                options={{
                    title: "冲煮",
                    tabBarIcon: ({ color, focused }) => (
                        <TakeCoffeeIcon
                            width={24}
                            height={24}
                            fill={focused ? color : "#999"}
                        ></TakeCoffeeIcon>
                    ),
                }}
            ></Tabs.Screen>
            <Tabs.Screen
                name="about"
                options={{
                    title: "调试页",
                    tabBarIcon: ({ color, focused }) => (
                        <InformationIcon
                            width={24}
                            height={24}
                            fill={focused ? color : "#999"}
                        ></InformationIcon>
                    ),
                }}
            ></Tabs.Screen>
        </Tabs>
    );
}
