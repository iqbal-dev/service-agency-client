import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
  
const Order = () => {
    const history = useHistory();
    const [user, setUser] = useContext(UserContext);


    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        const customerDetails = { ...user, message: data.message, status:'pending' }
        fetch('https://infinite-fjord-10812.herokuapp.com/customerDetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(customerDetails)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                alert('order success');
            }
        })
    };


    const handleButton = () => {
        history.push('/dashboard')
    }
    return (
        <div>
                <form onSubmit={handleSubmit(onSubmit)} style={{ width: '50%', marginLeft: '50px', paddingTop: '50px' }}>
                      <input name="name" value={user.name} ref={register} />
                      
                      <input name="email" value={user.email} ref = {register({ required: true })} />
                          {errors.exampleRequired && <span style={{color:'red'}}>This field is required</span>}

                         <input name="course" value={user.title} ref={register({ required: true })} />
                          {errors.exampleRequired && <span style={{color:'red'}}>This field is required</span>}
                      
                      <textarea name="message" placeholder="Message" ref={register} id="" cols="30" rows="10"></textarea>
                      <button onClick={handleButton} className="btn btn-primary" type="submit">Submit</button>
                  </form> 
        </div>
    );
};

export default Order;