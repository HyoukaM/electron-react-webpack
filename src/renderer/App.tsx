import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import a from './assets/audio/t-rex-roar.mp3';
import s from 'renderer/assets/test.module.less';
// import s from 'src/renderer/assets/test.module.less';

console.log(s);
// import * as e from 'electron';
//
// console.log(e);
//
console.log(window.electron);

function Hello() {
    return (
        <div className={s.module}>
            <audio src={a} controls loop muted>
                <source src={a} type="audio/mp3" />
            </audio>
        </div>
    );
}

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Hello />} />
            </Routes>
        </Router>
    );
}
