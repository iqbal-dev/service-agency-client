import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Addservices = () => {
    const [file,setFile] = useState(null)
    const handleChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const formData = new FormData()
        formData.append('files', file)
        formData.append('title', data.title)
        formData.append('description', data.description)
      
        fetch('https://infinite-fjord-10812.herokuapp.com/newService', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data) {
                alert('successfully done');
          }
        })
    };
    return (
                    <form className="row" onSubmit={handleSubmit(onSubmit)} style={{ width: '80%', marginLeft: '50px', paddingTop: '50px' }}>
                        
                        {/* add service form */}
                        <div className="col-md-6 bg-white p-3">
                            <div className="">
                                <input type="text" name="title"style={{border: '1px solid lightgray',}} placeholder="title" ref={register({ required: true })} />
                                {errors.exampleRequired && <span>This field is required</span>}
                                <textarea style={{border: '1px solid lightgray',}} name="description" placeholder="Description" ref={register({ required: true })} id="" cols="30" rows="3"></textarea>
                                {errors.exampleRequired && <span>This field is required</span>}
                            </div>
                        </div>
                        {/* add service image upload */}
                        <div className="col-md-6 bg-white">
                                    <div>
                                        <label for="img">Select image:</label>
                                        <input onChange={handleChange} style={{border: '1px solid lightgray',}} type="file"ref={register({ required: true })} id="img" name="img" accept="image/*"/>
                                        {errors.exampleRequired && <span>This field is required</span>}
                                    </div>
                </div>
                <button className="btn btn-primary ml-auto my-5" type="submit">Submit</button>
                  </form> 
    );
};

export default Addservices;