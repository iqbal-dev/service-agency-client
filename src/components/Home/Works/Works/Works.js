import React from 'react';

import Carousal from '../Carousal/Carousal';
import './Works.css'

const Works = () => {
    return (
        <div className="work-container" style={{paddingTop:'7%'}}>
            <h1 className="text-center font-family text-white mb-5" style={{fontWeight:'600'}}>Here are some of <span style={{color:'#7AB259'}}>our works</span></h1>
                <Carousal></Carousal>
            </div>
    );
};

export default Works;