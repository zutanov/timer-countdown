import React from 'react';

const Slider = (state: React.Dispatch<React.SetStateAction<number>>, e: any) => {
    let target = e.target.value;
    // let minutes = Math.floor(target / 60);
    // setMinute(minutes);
    // setSecond((target / 60 - minutes) * 60);
    state(target);
};

export default Slider;
