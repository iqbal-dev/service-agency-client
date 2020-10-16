import React, { useEffect, useState } from 'react';
import webMobile from '../../../../images/icons/web&mobile.png';
import webDevelopment from '../../../../images/icons/webdevelopment.png';
import graphics from '../../../../images/icons/graphics.png';
import photoshop from '../../../../images/icons/photoshop.png';
import ServicesInfo from '../ServicesInfo/ServicesInfo';
import './ProvideService.css'


const ProvideServices = () => {

    const [service, setService] = useState([])
    useEffect(() => {
        fetch('https://infinite-fjord-10812.herokuapp.com/service')
            .then(res => res.json())
            .then(data => {
            setService(data)
        })
    }, [])
    
    
    return (
        <div className="container provider-container">
            <h1 className="my-4 text-center font-family" style={{fontWeight:'600'}}>Provide awesome <span style={{color:'#7AB259'}}>services</span></h1>
            
            
            <div className="row">
                {
                    service.map((service) => <ServicesInfo service={service}></ServicesInfo>)
                }
            </div>
        </div>
    );
};

export default ProvideServices;