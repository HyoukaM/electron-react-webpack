import { createRoot } from 'react-dom/client';
import App from './App';
import a from './assets/test.module.less';

console.log(a);

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<App />);

/**
 * example
 */
// import { ipcRenderer } from 'electron';
//
// console.log(ipcRenderer);
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  console.log(arg);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
