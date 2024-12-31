const { app, BrowserWindow } = require('electron');
const loadLowDB = require('./data/storage'); // 加載 storage.js

let mainWindow;

app.on('ready', async () => {
    // 加載資料庫
    const db = await loadLowDB();

    // 獲取互動次數
    console.log('目前的互動次數是：', db.data.interactions);

    // 更新互動次數
    db.data.interactions += 1;
    await db.write();
    console.log('更新後的互動次數是：', db.data.interactions);

    // 建立窗口，調整尺寸和外觀
    mainWindow = new BrowserWindow({
        width: 150, // 與圖片大小一致
        height: 180, // 與圖片大小一致
        transparent: true, // 背景透明
        frame: false, // 隱藏邊框
        alwaysOnTop: true, // 窗口置頂
        resizable: false, // 禁止調整大小
        webPreferences: {
            nodeIntegration: true,
        },
    });

    mainWindow.loadFile('src/index.html');
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
