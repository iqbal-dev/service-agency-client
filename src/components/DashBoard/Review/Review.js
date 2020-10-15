import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';

const Review = () => {
    const [user, setUser] = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const commentsDetails = {
            name: user.name,
            userImg:user.img,
            designation: data.designation,
            message: data.description
        }
        fetch('https://infinite-fjord-10812.herokuapp.com/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(commentsDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('successfully done')
                }
            });
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: '50%', marginLeft: '50px', paddingTop: '50px' }}>
                      <input name="name" value={user.name} ref={register} />
                      
                      <input name="designation" placeholder="Company's Designation"ref={register({ required: true })} />
                          {errors.exampleRequired && <span style={{color:'red'}}>This field is required</span>}
                      <textarea name="description" placeholder="Message" ref={register({ required: true })} id="" cols="30" rows="5"></textarea>
                      {errors.exampleRequired && <span style={{color:'red'}}>This field is required</span>}
                      <button className="btn btn-primary" type="submit">Submit</button>
                  </form> 
        </div>
    );
};

export default Review;