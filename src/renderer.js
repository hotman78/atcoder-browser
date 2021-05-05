"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var electron_tabs_1 = __importDefault(require("electron-tabs"));
// 2. Define the instance of the tab group (container)
var tabGroup = new electron_tabs_1.default({
    // If you want a new button that appends a new tab, include:
    newTab: {
        title: 'New Tab',
    }
});
// 3. Add a tab from a website
var tab1 = tabGroup.addTab({
    title: "Atcoder Problems",
    src: "https://kenkoooo.com/atcoder#/table/",
    visible: true
});
