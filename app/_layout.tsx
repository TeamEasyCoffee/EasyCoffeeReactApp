// import DataBaseInit from "@/services/DataBseInit.js";
import coffeeSqlite from "@/services/coffeeSQLite.js";
import { defaultConfig } from "@tamagui/config/v5";
import { TamaguiProvider, createTamagui } from "@tamagui/core";
import { Stack } from "expo-router";
import { useEffect } from "react";
import "../global.css";

// you usually export this from a tamagui.config.ts file
const config = createTamagui(defaultConfig);

type Conf = typeof config;

// make imports typed
declare module "@tamagui/core" {
    interface TamaguiCustomConfig extends Conf {}
}

export default function RootLayout() {
    useEffect(() => {
        const run = async () => {
            coffeeSqlite.checkFirstApp();
        };
        run();
    }, []);

    return (
        <TamaguiProvider config={config} defaultTheme="light">
            {
                <Stack>
                    <Stack.Screen
                        name="(tabs)"
                        options={{
                            headerShown: false,
                        }}
                    ></Stack.Screen>
                </Stack>
            }
        </TamaguiProvider>
    );
}
