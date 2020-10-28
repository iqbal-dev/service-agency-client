import React, { useEffect, useState } from 'react';
import ServicesInfo from '../ServicesInfo/ServicesInfo';
import './ProvideService.css';
import { useLoading, Audio } from '@agney/react-loading';


const ProvideServices = () => {
    const { containerProps, indicatorEl } = useLoading({
        loading: true,
        indicator: <Audio width="50" />,
      });
    const [service, setService] = useState([]);
    const[loader,setLoader] = useState(true);
    useEffect(() => {
        fetch('https://infinite-fjord-10812.herokuapp.com/service')
            .then(res => res.json())
            .then(data => {
                if (data) {
                 setLoader(false);   
                setService(data)
                }
        })
    }, [])
    
    
    return (
        <div className="container provider-container">
            <h1 className="my-4 text-center font-family" style={{fontWeight:'600'}}>Provide awesome <span style={{color:'#7AB259'}}>services</span></h1>
            
            {
                loader &&  <section className="text-center" {...containerProps}>
                {indicatorEl} 
            </section>
                   }
            <div className="row">
                {
                    service.map((service) => <ServicesInfo service={service}></ServicesInfo>)
                }
            </div>
        </div>
    );
};

export default ProvideServices;