import { useEffect, useRef, useState } from 'react';
import * as style from './timer.styles';
import React from 'react';

export type STimerBtnProps = {
    onClick: () => void;
    isPaused: boolean;
    isContinue: boolean;
};

const Timer = React.memo(function Timer() {
    const [isPause, setIsPause] = useState(false);
    const [cont, setCont] = useState(false);
    const [btnName, setBtnName] = useState('Start');
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [millisec, setMillisec] = useState(0);

    const timerIdRef = useRef<NodeJS.Timer>();

    function incrementTime() {
        setMillisec(millisec => millisec + 10);
    }

    function start() {
        timerIdRef.current = setInterval(incrementTime, 100);
        setBtnName('Pause');
        setIsPause(true);
    }

    function pause() {
        setIsPause(false);
        setCont(true);
        setBtnName('Continue');
        clearInterval(timerIdRef.current);
        timerIdRef.current = undefined;
    }

    function clear() {
        setIsPause(false);
        setCont(false);
        setBtnName('Start');
        clearInterval(timerIdRef.current);
        timerIdRef.current = undefined;
        setMillisec(0);
        setSecond(0);
        setMinute(0);
    }

    const addZero = (n: number): string => (n < 10 ? `0${n}` : n.toString());

    useEffect(() => {
        if (millisec > 90) {
            setSecond(second => second + 1);
            setMillisec(0);
        } else if (second > 59) {
            setMinute(minute => minute + 1);
            setMillisec(0);
            setSecond(0);
        } else if (minute > 59) {
            setMillisec(0);
            setSecond(0);
            setMinute(0);
            clearInterval(timerIdRef.current);
            timerIdRef.current = undefined;
        }
    }, [millisec]);

    return (
        <style.STimer>
            <style.STimerTitle>TIMER</style.STimerTitle>
            <style.STimerWrapper>
                <style.STimerCard>
                    <style.STimerValue>{addZero(minute)}</style.STimerValue>
                    <style.StimerName>Minutes</style.StimerName>
                </style.STimerCard>
                <style.STimerCard>
                    <style.STimerValue>{second < 10 ? `0${second}` : second}</style.STimerValue>
                    <style.StimerName>Seconds</style.StimerName>
                </style.STimerCard>
                <style.STimerCard>
                    <style.STimerValue>{addZero(millisec)}</style.STimerValue>
                    <style.StimerName>Milliseconds</style.StimerName>
                </style.STimerCard>
            </style.STimerWrapper>
            <style.STimerBtns>
                <style.STimerBtnGreen
                    onClick={btnName === 'Start' || btnName === 'Continue' ? start : pause}
                    isPaused={isPause}
                    isContinue={cont}
                >
                    {btnName}
                </style.STimerBtnGreen>

                <style.STimerBtnRed isPaused={isPause} isContinue={cont} onClick={clear}>
                    Reset
                </style.STimerBtnRed>
            </style.STimerBtns>
        </style.STimer>
    );
});

export default Timer;
