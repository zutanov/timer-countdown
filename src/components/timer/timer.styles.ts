import styled from 'styled-components';
import { STimerBtnProps } from './Timer';

export const STimer = styled.div`
    margin-right: 100px;
    padding: 18px 24px 60px;
    width: 431px;
    height: 313px;
    background: #f9f9f9;
    border-radius: 5px;
    border: 1px solid black;
    font-family: 'Roboto' sans-serif;
`;

export const STimerTitle = styled.h1`
    text-align: center;
    font-size: 22px;
    line-height: 29px;
    font-weight: 700;
    margin-bottom: 35px;
`;

export const STimerWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const STimerCard = styled.div`
    text-align: center;
    height: 100px;
    width: 108px;
`;

export const STimerValue = styled.div`
    height: 60px;
    font-size: 44px;
    border-radius: 5px;
    border: 1px solid #dbdbdb;
    margin-bottom: 12px;
`;

export const StimerName = styled.h2`
    font-size: 14px;
`;

export const STimerBtns = styled.div`
    margin-top: 44px;
    display: flex;
    justify-content: space-around;
`;

export const STimerBtn = styled.button<STimerBtnProps>`
    width: 118px;
    height: 40px;
    font-size: 18px;
    background: none;
    border-radius: 5px;
    border: 1px solid #d1d1d1;
`;

export const STimerBtnGreen = styled(STimerBtn)`
    color: #ffffff;
    background-color: ${({ isPaused, isContinue }) => (isPaused ? '#f48d33' : isContinue ? '#4f84e7' : '#03ae85')};
    border-color: ${({ isPaused, isContinue }) => (isPaused ? '#f48d33' : isContinue ? '#4f84e7' : '#03ae85')};
`;

export const STimerBtnRed = styled(STimerBtn)`
    color: #ffffff;
    background-color: #fd6259;
    border-color: #fd6259;
    display: ${({ isPaused, isContinue }) => (!isPaused && !isContinue ? 'none' : 'block')};
`;
