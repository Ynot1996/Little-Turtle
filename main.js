const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        transparent: true,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    mainWindow.loadFile('index.html');
    mainWindow.setAlwaysOnTop(true, 'screen-saver');
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
