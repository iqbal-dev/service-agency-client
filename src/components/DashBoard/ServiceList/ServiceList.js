import React, { useEffect, useState } from 'react';
import webMobile from '../../../images/icons/web&mobile.png';
import webDevelopment from '../../../images/icons/webdevelopment.png';
import graphics from '../../../images/icons/graphics.png';
import './ServiceList.css'

// const serviceList = [
//     {
//         title: 'WEB & MOBILE DESIGN',
//         description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
//         img:webMobile
//     },
//     {
//         title: 'Graphic design',
//         description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
//         img:graphics
//     },
//     {
//         title: 'Web development',
//         description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
//         img:webDevelopment
//     },
// ]

const ServiceList = () => {
    const [orderlist,setOrderlist] = useState([])
    useEffect(() => {
        fetch('https://infinite-fjord-10812.herokuapp.com/orderlist?email=' + sessionStorage.getItem('email'))
            .then(res => res.json())
            .then(data => {
          setOrderlist(data);
      })  
    },[])
    return (
        <div className="row " >
            {
                orderlist.map(service =>
                <div className="col-md-5" >
                    <div className="serviceList-container p-5">
                        <img className="img-fluid" style={{height:'60px'}} src={service.courseImg} alt=""/>
                            <h4>{service.title}</h4>
                            <small>{service.description}</small>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ServiceList;