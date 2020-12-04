const { app, BrowserWindow } = require('electron')




function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    darkTheme: true,
    hasShadow: true,
    icon: './favicon.png',
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadURL('https://www.deviantart.com/')
  win.setMenu(null)
}

app.whenReady().then(createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
})