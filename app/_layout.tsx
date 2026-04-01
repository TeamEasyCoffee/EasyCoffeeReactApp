import { Stack } from "expo-router";
import "../global.css";
export default function RootLayout() {
  // const CheckIsFirst = async ()=>{
  //   await EasyCoffeeDB.initDb()
  //   if (await EasyCoffeeDB.selectTableAll("coffee_beans"))
  // }
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      ></Stack.Screen>
    </Stack>
  );
}
