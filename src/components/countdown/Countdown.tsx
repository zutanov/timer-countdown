import { useCallback, useEffect, useRef, useState } from 'react';
import * as style from './countdown.styles';
import React from 'react';
import Slider from '../slider/Slider';
import { timeLog } from 'console';

export type SCountdownBtnProps = {
    onClick: () => void;
    isPaused: boolean;
    isContinue: boolean;
};

const playerStop = new Audio('https://zvukitop.com/wp-content/uploads/2021/04/kogda-vremya-vyshlo-frfrc.mp3');

const Countdown = React.memo(() => {
    const [isPause, setIsPause] = useState(false);
    const [cont, setCont] = useState(false);
    const [btnAvailable, setBtnAvailable] = useState(true);
    const [btnName, setBtnName] = useState('Start');
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);

    const timerIdRef = useRef<any>();

    let inputDisabled: boolean = (isPause && !cont) || (!isPause && cont);
    const progressVal: number = minute + second / 60;

    function decrementTime() {
        setSecond(second => second - 1);
    }

    const onInput = useCallback((state: React.Dispatch<React.SetStateAction<number>>, e: any) => {
        let target = e.target.value;
        let attrMax = e.target.getAttribute('max');
        if (target.matchAll('-')) {
            setBtnAvailable(true);
        }

        if (attrMax === '720' && target.length > 3) {
            state(target.substr(0, 3));
        } else if (attrMax === '720' && target > 720) {
            state(720);
        } else if (attrMax === '60' && target.length > 2) {
            state(target.substr(0, 2));
        } else if (attrMax === '60' && target > 60) {
            state(60);
        } else {
            state(target);
        }
    }, []);

    const start = useCallback(() => {
        timerIdRef.current = setInterval(decrementTime, 1000);
        setBtnName('Pause');
        setIsPause(true);
    }, []);

    const pause = useCallback(() => {
        setIsPause(false);
        setCont(true);
        setBtnName('Continue');
        clearInterval(timerIdRef.current);
        timerIdRef.current = undefined;
    }, []);

    const clear = useCallback(() => {
        setIsPause(false);
        setCont(false);
        setBtnName('Start');
        clearInterval(timerIdRef.current);
        timerIdRef.current = undefined;

        setSecond(0);
        setMinute(0);

        setBtnAvailable(true);

        playerStop.play();
    }, []);

    const addZero = (n: number): string => (n < 10 && n > 0 ? `0${n}` : n.toString());

    useEffect(() => {
        if (second > 0) {
            setBtnAvailable(false);
        }

        if (second < 0) {
            if (minute === 0) {
                clear();
            } else {
                setMinute(minute => minute - 1);
                setSecond(59);
            }
        }
    }, [second]);

    useEffect(() => {
        if (minute > 0) {
            setBtnAvailable(false);
        }
    }, [minute]);
    return (
        <style.SCountdown>
            <style.SCountdownProgress value={progressVal} max={100 + '%'}></style.SCountdownProgress>
            <style.SCountdownTitle>COUNTDOWN </style.SCountdownTitle>
            <style.SCountdownWrapper>
                <style.SCountdownCard>
                    <style.SCountdownValue>{minute}</style.SCountdownValue>
                </style.SCountdownCard>
                <style.SCountdownCard>
                    <style.SCountdownValue>{second}</style.SCountdownValue>
                </style.SCountdownCard>
            </style.SCountdownWrapper>
            <style.SCountdownWrapper>
                <style.SCountdownInput
                    value={minute}
                    disabled={inputDisabled}
                    onInput={e => onInput(setMinute, e)}
                    type='number'
                    max={720}
                    min={1}
                />
                <style.SCountdownWrap>
                    <style.SCountdownName>Minutes</style.SCountdownName>
                    <style.SCountdownRange
                        value={minute}
                        disabled={inputDisabled}
                        onInput={e => Slider(setMinute, e)}
                        type='range'
                        max={720}
                        step={30}
                    />
                </style.SCountdownWrap>
            </style.SCountdownWrapper>
            <style.SCountdownWrapper>
                <style.SCountdownInput
                    value={second}
                    disabled={inputDisabled}
                    onInput={e => onInput(setSecond, e)}
                    type='number'
                    max={60}
                    min={0}
                />
                <style.SCountdownWrap>
                    <style.SCountdownName>Seconds</style.SCountdownName>
                    <style.SCountdownRange
                        value={second}
                        disabled={inputDisabled}
                        onInput={e => Slider(setSecond, e)}
                        type='range'
                        max={60}
                        step={15}
                    />
                </style.SCountdownWrap>
            </style.SCountdownWrapper>

            <style.SCountdownBtns>
                <style.SCountdownBtnGreen
                    disabled={btnAvailable}
                    onClick={btnName === 'Start' || btnName === 'Continue' ? start : pause}
                    isPaused={isPause}
                    isContinue={cont}
                >
                    {btnName}
                </style.SCountdownBtnGreen>
                <style.SCountdownBtnRed isPaused={isPause} isContinue={cont} onClick={clear}>
                    Reset
                </style.SCountdownBtnRed>
            </style.SCountdownBtns>
        </style.SCountdown>
    );
});

export default Countdown;
