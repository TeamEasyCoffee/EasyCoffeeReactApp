import { Tabs } from "expo-router";
// import "../global.css";
import InformationIcon from "@/assets/icons/about.svg";
import BeanIcon from "@/assets/icons/coffee-bean.svg";
import TakeCoffeeIcon from "@/assets/icons/Coffee.svg";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="about"
        options={{
          title: "关于",
          tabBarIcon: ({ color, focused }) => (
            <InformationIcon
              width={24}
              height={24}
              fill={focused ? color : "#999"}
            ></InformationIcon>
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="beanSort"
        options={{
          title: "豆子管理",
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
    </Tabs>
  );
}
