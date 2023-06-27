import React from 'react';

import { SApp } from './assets/styles/app.styles';
import Timer from './components/timer/Timer';
import Countdown from './components/countdown/Countdown';

function App() {
    return (
        <SApp>
            <Timer />
            <Countdown />
        </SApp>
    );
}

export default App;
