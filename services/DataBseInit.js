import * as SQLite from "expo-sqlite";
class dbCoffeeDataBase {
  static dbName = "coffeeDataBase";
  static db = null;

  static async initDb() {
    try {
      this.db = await SQLite.openDatabaseAsync(this.dbName);
    } catch (err) {
      console.log(err);
    }
  }

  static async checkDB() {
    if (!this.db) {
      await this.initDb();
      return this.db;
    } else {
      return this.db;
    }
  }

  //首次启动App 创建初始表格
  static async firstMakeTables() {
    const db = await this.checkDB();
    await db.execAsync(`
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
  }
  static async insertTest() {
    const db = await this.checkDB();
    db.runAsync(
      `
      insert into coffee_beans
      (bean_name,process_method,roast_level,drink_style)
      values(?,?,?,?);
      `,
      ["辛鹿橘香茉莉", "水洗", 1, 1],
    );
  }

  /**
   *查表内所有
   * @param {String} tableName
   * 目前可查询的表:
   * coffee_beans
   * @returns
   */
  static async selectTableAll(tableName) {
    const db = await this.checkDB();
    try {
      return await db.getAllAsync(`
      select * from ${tableName}
      `);
    } catch (err) {
      console.log(err);
    }
  }
}

export default dbCoffeeDataBase;
