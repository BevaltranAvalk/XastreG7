const { app, BrowserWindow } = require('electron');

function createLOGINWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });
  mainWindow.loadFile('login.html');
}

function createADMSWindow() {
    const mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true
      }
    });

    mainWindow.loadFile('ADMS.html');
  }

  function createMENTORESWindow() {
    const mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true
      }
    });

    mainWindow.loadFile('MENTORES.html');
  }

  function createALUNOSWindow() {
    const mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true
      }
    });

    mainWindow.loadFile('ALUNOS.html');
  }

  function createEMPRESAWindow() {
    const mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true
      }
    });

    mainWindow.loadFile('EMPRESA.html');
  }



  app.whenReady().then(() => {
    createLOGINWindow();
    createADMSWindow();
    createMENTORESWindow();
    createALUNOSWindow();
    createEMPRESAWindow();
  });