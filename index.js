const {app, BrowserWindow} = require('electron');
const path = require('path')

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 500,
        height: 500,
        webPreferences: {
            nodeIntegration: true
        },
        autoHideMenuBar: true,
        icon: path.join(__dirname, 'public', 'images', 'icons', 'tomato.ico')
    });

    mainWindow.loadFile(path.join(__dirname, 'public', 'index.html'));

    mainWindow.on('closed', function() {
        mainWindow = null;
    })
}

app.whenReady().then(createWindow);

app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function() {
    if (mainWindow === null) createWindow();
})