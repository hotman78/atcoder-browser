import { app, Menu, BrowserWindow } from 'electron';
import path from 'path';
import url from 'url';

let mainWindow : BrowserWindow|null;

function createWindow() {

    mainWindow = new BrowserWindow({
        // width: 800,
        // height: 600,
        // fullscreen : true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            preload: `./preload.js`,
            webviewTag: true
        }
    });
    mainWindow.maximize();
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, './index.html'),
        protocol: 'file:',
        slashes: true
    }));

    // 開発ツールを有効化
    mainWindow.webContents.openDevTools();

    let template = Menu.buildFromTemplate([
        {
            label: "ファイル",
            submenu: [
              { role:'close', label:'ウィンドウを閉じる' }
            ]
          },
          {
            label: "編集",
            submenu: [
              { role:'undo',  label:'元に戻す' },
              { role:'redo',  label:'やり直す' },
              { type:'separator' },
              { role:'cut',   label:'切り取り' },
              { role:'copy',  label:'コピー' },
              { role:'paste', label:'貼り付け' },
            ]
          }
    ]);
    Menu.setApplicationMenu(template);

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
