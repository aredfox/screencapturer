const electron = require('electron')
const { ipcRenderer: ipc, desktopCapturer, screen } = electron
const path = require('path')
const fs = require('fs')

onCapture()
function onCapture() {
    setInterval(_ => {
        console.log('Capturing...')
        getMainSource(desktopCapturer, screen, source => {
            const png = source.thumbnail.toPng()
            const filePath = path.join('c:\\temp\\screencap\\', new Date() + '.png')
            writeScreenshot(png, filePath);
        })
    }, 3000)
}

function getMainSource(desktopCapturer, screen, done) {
    const options = {
        types: ['screen'], thumbnailSize: screen.getPrimaryDisplay().workAreaSize
    }
    desktopCapturer.getSources(options, (err, sources) => {
        if(err) return console.log('Cannot capture screen: ', err)

        const isMainSource = source => source.name === 'Entire screen' || source.name === 'Screen 1'
        done(sources.filter(isMainSource)[0])
    })
}

function writeScreenshot(png, filePath) {
    fs.writeFile(filePath, png, err => {
        if(err) return console.log('Cannot write file to: ' + filePath)
        
    })    
}