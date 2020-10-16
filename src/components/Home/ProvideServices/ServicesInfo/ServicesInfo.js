import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../../App';
import './ServiceInfo.css'

const ServicesInfo = ({ service }) => {
    const history = useHistory();
    const [user, setUser] = useContext(UserContext);
    

    const handleCourse = (id,title,description,courseImg) => {
        const newUser = {
            id: id,
            title: title,
            description: description,
            courseImg: courseImg,
        }
        setUser(newUser)
    }
    return (
        <div className="col-md-4">
                <div className="service-container" >
                <Link to ='/dashboard' onClick={()=>handleCourse(service._id,service.title,service.description,service.img)}>
                <div className='content' style={{width: '100px',margin:'0 auto'}}>
                        {
                            service.image ? <img className="img-fluid mr-auto" style={{ height: '100px', }} src={`data:image/png;base64,${service.image.img}`} alt="" /> :
                            <img className="img-fluid mr-auto" style={{ height: '100px', }} src={service.img} alt="" />
                        }
                        
                        
                    </div>


                    <div style={{textAlign:'center',fontFamily:'poppins',margin:'20px 0'}}>
                        <h5>{service.title}</h5>
                        <small>{service.description}</small>
                    </div>
                </Link>
                </div>
        </div>
    );
};

export default ServicesInfo;