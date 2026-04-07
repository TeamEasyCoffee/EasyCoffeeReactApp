import { useSQLiteContext } from "expo-sqlite";
import { useCallback } from "react";

export function useCoffeeSQLite() {
    const db = useSQLiteContext();

    const logOut = useCallback((logMsg, logType) => {
        const nowTime = new Date();
        let tag = "Default";
        if (logType === 1) tag = "DataBase";
        if (logType === 0) tag = "ERROR!";

        const times =
            nowTime.getHours() +
            ":" +
            nowTime.getMinutes() +
            ":" +
            nowTime.getSeconds();

        console.log(times + "  " + tag + "  " + logMsg);
    }, []);

    const firstStart = useCallback(async () => {
        await db.execAsync(`
            create table if not exists coffee_beans(
                id integer primary key autoincrement,
                bean_name text not null,
                origin text,
                process_method text,
                roast_level integer,
                drink_style integer,
                flavor text,
                rost_date integer,
                stay_days integer,
                stock real,
                price real,
                price_per_gram real,
                rest_stock real,
                status integer,
                create_log_time text default (datetime('now','localtime'))
            );
            insert into coffee_beans
            (bean_name,origin,process_method,roast_level,drink_style,flavor,rost_date,stay_days,stock,price,price_per_gram,rest_stock,status) 
            values('辛鹿','瑰夏','水洗',3,1,'茉莉','test',7,12,12,12,120,1);
        `);

        logOut("首次启动建表成功", 1);
    }, [db, logOut]);

    const checkFirstApp = useCallback(async () => {
        const selectDatas = await db.getAllAsync(`
            select * from sqlite_master
        `);

        if (selectDatas.length === 0) {
            logOut("首次启动App", 1);
            await firstStart();
        }
    }, [db, firstStart, logOut]);

    const useCommand = useCallback(
        async (command = "") => {
            const commandHead =
                command.trim().split(/\s+/)[0]?.toLowerCase() || "";
            logOut(commandHead, 1);

            try {
                if (commandHead === "select") {
                    return await db.getAllAsync(command);
                }
                return await db.runAsync(command);
            } catch (err) {
                logOut(String(err), 0);
                return err;
            }
        },
        [db, logOut],
    );

    return {
        db,
        logOut,
        firstStart,
        checkFirstApp,
        useCommand,
    };
}
