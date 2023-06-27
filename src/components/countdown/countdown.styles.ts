import styled from 'styled-components';
import { SCountdownBtnProps } from './Countdown';

export const SCountdown = styled.div`
    padding: 18px 24px 60px;
    width: 431px;
    height: 360px;
    background: #f9f9f9;
    border-radius: 5px;
    border: 1px solid black;
    font-family: 'Roboto' sans-serif;
`;

export const SCountdownTitle = styled.h1`
    text-align: center;
    font-size: 22px;
    line-height: 29px;
    font-weight: 700;
    margin-bottom: 20px;
`;

export const SCountdownWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 20px;
`;

export const SCountdownWrap = styled.div`
    width: 200px;
`;

export const SCountdownCard = styled.div`
    text-align: center;
    height: 60px;
    width: 108px;
`;

export const SCountdownValue = styled.div`
    height: 60px;
    font-size: 44px;
    border-radius: 5px;
    border: 1px solid #dbdbdb;
    margin-bottom: 12px;
`;

export const SCountdownName = styled.h2`
    font-size: 14px;
    text-align: center;
`;

export const SCountdownInput = styled.input`
    height: 30px;
    width: 50px;
    border-radius: 5px;
    text-align: center;
    align-self: center;
    -moz-appearance: textfield;
    -webkit-appearance: textfield;
    appearance: textfield;

    &::-webkit-outer-spin-button {
        display: none;
    }
    &::-webkit-inner-spin-button {
        display: none;
    }
`;

export const SCountdownRange = styled(SCountdownInput)`
    width: 100%;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    overflow: hidden;
    height: 7px;

    &::-webkit-slider-runnable-track {
        height: 7px;
        background-color: blue;
    }

    &::-webkit-slider-thumb {
        background: red;
        cursor: pointer;
        width: 15px;
        height: 15px;
        -webkit-appearance: none;
        margin-top: -4px;
        box-shadow: -200px 0 0 200px blue;
    }

    &::-moz-range-track {
        height: 7px;
        background-color: blue;
    }

    &::-moz-range-thumb {
        background: red;
        cursor: pointer;
        height: 7px;
        border-radius: 0px;
        box-shadow: -200px 0px 0px 200px blue;
        padding: 0px;
        margin: 0px;
    }
`;

export const SCountdownBtns = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const SCountdownBtn = styled.button<SCountdownBtnProps>`
    width: 118px;
    height: 40px;
    font-size: 18px;
    background: none;
    border-radius: 5px;
    border: 1px solid #d1d1d1;
`;

export const SCountdownBtnGreen = styled(SCountdownBtn)`
    color: #ffffff;
    background-color: ${({ isPaused, isContinue }) => (isPaused ? '#f48d33' : isContinue ? '#4f84e7' : '#03ae85')};
    border-color: ${({ isPaused, isContinue }) => (isPaused ? '#f48d33' : isContinue ? '#4f84e7' : '#03ae85')};
`;

export const SCountdownBtnRed = styled(SCountdownBtn)`
    color: #ffffff;
    background-color: #fd6259;
    border-color: #fd6259;
    display: ${({ isPaused, isContinue }) => (!isPaused && !isContinue ? 'none' : 'block')};
`;

export const SCountdownProgress = styled.progress`
    width: 100%;
    height: 20px;
`;
