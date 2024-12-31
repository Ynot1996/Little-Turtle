const path = require('path');

// 動態導入 LowDB
async function loadLowDB() {
    const { Low, JSONFile } = await import('lowdb'); // 使用 ES Modules 動態導入
    const adapter = new JSONFile(path.join(__dirname, 'db.json')); // 指定資料庫文件
    const db = new Low(adapter);

    // 初始化默認數據
    await db.read(); // 讀取資料
    db.data ||= { interactions: 0 }; // 如果數據不存在，初始化默認值
    await db.write(); // 寫入初始化數據

    return db;
}

// 導出一個 Promise，調用時可以獲取 LowDB 實例
module.exports = loadLowDB;
