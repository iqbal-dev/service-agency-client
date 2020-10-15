import React from 'react';
import { Link } from 'react-router-dom';

const HeaderBottom = () => {
    return (
            <div className="row container justify-content-between" style={{margin:'150px auto 150px auto'}}>
                <div className="col-md-2">
                   <Link><img className="img-fluid" style={{height:'60px'}} src={require('../../../../images/logos/airbnb.png')} alt=""/></Link> 
                </div>
                <div className="col-md-2">
                <Link><img className="img-fluid" style={{ height: '60px' }} src={require('../../../../images/logos/google.png')} alt="" /></Link>
                </div>
                <div className="col-md-2">
                <Link><img className="img-fluid" style={{height:'60px'}} src={require('../../../../images/logos/netflix.png')} alt=""/></Link>     
                </div>
                <div className="col-md-2">
                <Link><img className="img-fluid" style={{height:'60px'}} src={require('../../../../images/logos/slack.png')} alt=""/></Link> 
                </div>
                <div className="col-md-2">
                <Link><img className="img-fluid" style={{height:'60px'}} src={require('../../../../images/logos/uber.png')} alt=""/></Link> 
                </div>
            </div>
    );
};

export default HeaderBottom;