import TabGroup from "electron-tabs";

// 2. Define the instance of the tab group (container)
let tabGroup = new TabGroup({
    // If you want a new button that appends a new tab, include:
    newTab: {
        title: 'New Tab',
    }
});

// 3. Add a tab from a website
let tab1 = tabGroup.addTab({
    title: "Atcoder Problems",
    src: "https://kenkoooo.com/atcoder#/table/",
    visible: true
});
