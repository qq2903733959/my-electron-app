// process.env.GITHUB_TOKEN = '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';


const { app, BrowserWindow, ipcMain } = require('electron')
const path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong')
  
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})