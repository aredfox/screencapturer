# screencapturer
Demo (problematic UI hanging) Electron app that captures a screenshot of the entire screen to c:\temp\screencap\*.png every 3 seconds...

## THE PROBLEM
This is an electron app with a "MainWindow" that holds a button "Start capture". Once clicked it fires an event to the main process, the main process then launches a new, seperate, "BrowserWindow" object called 'captureWindow' with it's own capture.html and capture.js associated. In capture.js, every three seconds a screenshot is made and saved to c:\temp\screencap (this is a demo app to illustrate a problem, thus I did not make this configurable and hard coded the path in for now). Every time a capture is made in the 'craptureWindow' it freezes, which I expected it to. **But**, the 'mainWindow' object freezes as well, which I did not expect it to do.
**How should I handle this, so thaty the mainWindow does not freeze when a process is being run in another "BrowserWindow" object**? I assumed electron BrowserWindows (or "tabs") had a seperate thread?

## THE SOLUTION?
Still loking for it. If you have any ideas, please let me know yves.schelpe@gmail.com or via the issues, or a pr.
