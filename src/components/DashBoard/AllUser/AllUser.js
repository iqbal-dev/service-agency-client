import React, { useEffect } from 'react';
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

    const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

    return (
        <tbody>
            <tr>
                <td>{service.name}</td>
                <td>{service.email}</td>
                <td>{service.title}</td>
                <td>{service.description}</td>
                <td>
                    <form onChange={handleSubmit(onSubmit)}>
                    <Select ref={register({ required: true })} />
                    {errors.exampleRequired && <span>This field is required</span>}
                    </form>
                </td>
            </tr>
        </tbody>
    );
};

export default AllUser;