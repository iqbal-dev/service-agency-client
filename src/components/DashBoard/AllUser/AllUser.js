import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
  
// you can use React.forwardRef to pass the ref too
const Select = React.forwardRef(({ label }, ref) => (
  <>
    <label>{label}</label>
    <select name="status" ref={ref}>
      <option value="pending" className="text-primary">pending</option>
      <option value="on going" className="text-warning">on going</option>
      <option value="Done">Done</option>
    </select>
  </>
));

const AllUser = ({ service }) => {

  const [status,setStatus] = useState('pending')

    const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

// this handler is used for select the status value
  const handleChange = (e) => {
    const stat = e.target.value;
    console.log(stat);
    setStatus(stat);

  }
  // This handler is used for get the id and for this id get the value from database 
  const onClick = (id) => {
    fetch(`https://infinite-fjord-10812.herokuapp.com/status/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({status: status})
    })
  }
  return (
      //  all user table
        <tbody>
            <tr>
                <td>{service.name}</td>
                <td>{service.email}</td>
                <td>{service.title}</td>
                <td>{service.description}</td>
                <td>
                    <form onSubmit={handleSubmit(onSubmit)} onClick={()=> onClick(service._id)} onChange={handleChange} >
                    <Select  ref={register({ required: true })} />
                    {errors.exampleRequired && <span>This field is required</span>}
                    </form>
                </td>
            </tr>
        </tbody>
    );
};

export default AllUser;