import React from 'react';
import './MainHeader.css';
import frame from '../../../../images/logos/Frame.png';


const MainHeader = () => {
    return (
        <div className="container">
            <div className="row align-items-center" style={{height:'500px'}}>
                    <div className="col-md-6">
                        <div className="main-header-left">
                            <h1>Let’s Grow Your Brand To The Next Level</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p> 
                            <button className="btn btn-primary">Hire us</button>
                        </div>
                    </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={frame} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;