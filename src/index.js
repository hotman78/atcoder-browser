"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path_1 = __importDefault(require("path"));
var url_1 = __importDefault(require("url"));
var mainWindow;
function createWindow() {
    mainWindow = new electron_1.BrowserWindow({
        // width: 800,
        // height: 600,
        // fullscreen : true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            preload: "./preload.js",
            webviewTag: true
        }
    });
    mainWindow.maximize();
    mainWindow.loadURL(url_1.default.format({
        pathname: path_1.default.join(__dirname, './index.html'),
        protocol: 'file:',
        slashes: true
    }));
    // 開発ツールを有効化
    mainWindow.webContents.openDevTools();
    var template = electron_1.Menu.buildFromTemplate([
        {
            label: "ファイル",
            submenu: [
                { role: 'close', label: 'ウィンドウを閉じる' }
            ]
        },
        {
            label: "編集",
            submenu: [
                { role: 'undo', label: '元に戻す' },
                { role: 'redo', label: 'やり直す' },
                { type: 'separator' },
                { role: 'cut', label: '切り取り' },
                { role: 'copy', label: 'コピー' },
                { role: 'paste', label: '貼り付け' },
            ]
        }
    ]);
    electron_1.Menu.setApplicationMenu(template);
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}
electron_1.app.on('ready', createWindow);
electron_1.app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});
