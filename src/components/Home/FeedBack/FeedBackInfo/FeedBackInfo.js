import React from 'react';
import './FeedBackInfo.css'

const FeedBackInfo = ({customer}) => {
    return (
        <div className="col-md-4 mb-4">
            <div className=" feedback-container">
                <div className="row justify-content-center">
                    <img className="img-fluid col-md-3" src={customer.userImg} alt=""/>
                    <div className="col-md-9">
                        <h6>{customer.name}</h6>
                        <p>{customer.designation}</p>
                    </div>
                </div>
                <small>{customer.message}</small>
            </div>
        </div>
    );
};

export default FeedBackInfo;