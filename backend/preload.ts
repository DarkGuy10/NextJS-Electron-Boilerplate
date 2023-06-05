import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('BloopAPI', {
	foo: 'bar',
	ping: () => ipcRenderer.invoke('sample:ping'),
})
