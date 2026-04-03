// import DataBaseInit from "@/services/DataBseInit.js";
import coffeeSqlite from "@/services/coffeeSQLite.js";
import { Stack } from "expo-router";
import { useEffect } from "react";
import "../global.css";
export default function RootLayout() {
  useEffect(() => {
    const run = async () => {
      coffeeSqlite.checkFirstApp();
    };
    run();
  }, []);

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
