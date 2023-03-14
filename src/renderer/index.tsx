import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { StyleProvider } from '@ant-design/cssinjs';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
    <StyleProvider hashPriority="high">
        <App />
    </StyleProvider>,
);

/**
 * example
 */
// import { ipcRenderer } from 'electron';
//
// console.log(ipcRenderer);
window.electron.ipcRenderer.once('ipc-example', (arg: any) => {
    console.log(arg);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
