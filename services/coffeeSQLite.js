import * as SQLite from "expo-sqlite";
class coffeeSqlite {
    static db = null;
    static dbName = "easy_coffee";

    static logOut(logMsg, logType) {
        const nowTime = new Date();
        let logTypeMsg = "";
        switch (logType) {
            case 1:
                logType = "DataBase";
                break;
            case 0:
                logType = "ERROR!";
                break;
            default:
                logType = "Default";
        }
        const times =
            nowTime.getHours() +
            ":" +
            nowTime.getMinutes() +
            ":" +
            nowTime.getSeconds();
        console.log(times + "  " + logType + "  " + logMsg);
    }

    static async connectDataBase() {
        this.logOut("链接数据库", 1);
        this.db = await SQLite.openDatabaseAsync(this.dbName);
    }

    static async checkConnect() {
        if (this.db == null) {
            await this.connectDataBase();
        } else {
            this.logOut("已连接数据库", 1);
        }
    }

    static async firstStart() {
        await this.checkConnect();
        this.db.execAsync(`
            create table if not exists coffee_beans(
            id integer primary key autoincrement,
            bean_name text not null,
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
    );`);
        this.logOut("首次启动建表成功", 1);
    }

    static async checkFirstApp() {
        await this.checkConnect();
        const selectDatas = await this.db.getAllAsync(`
            select * from sqlite_master
        `);
        if (selectDatas.length == 0) {
            this.logOut("首次启动App", 1);
            this.firstStart();
        }
    }

    static async useCommand(command = "") {
        await this.checkConnect();
        const commandHead = command.split(" ")[0];
        this.logOut(commandHead, 1);
        try {
            if (commandHead == "select") {
                return await this.db.getAllAsync(command);
            } else {
                return await this.db.runAsync(command);
            }
        } catch (err) {
            this.logOut(err, 0);
            return err;
        }
    }
}
export default coffeeSqlite;
