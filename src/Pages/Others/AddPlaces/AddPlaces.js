import React from 'react';
import './AddPlaces.css';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        axios.post('http://localhost:5000/places', data)
        .then(res=>{
            if(res.data.insertedId){
                alert('your place added succesfully')
                reset()
            }
        })
        console.log(data)
    };
    return (
        <div className='place-form'>
            <h3 className='text-center'>Add a Places</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true})} placeholder='name'/>
                <textarea {...register("description")} placeholder='description'/>
                <input type="number" {...register("price")} placeholder='Price'/>
                <input {...register("image", { required: true})} placeholder='image Url'/>
                <input type="submit" />
            </form>
           
        </div>
    );
};

export default AddProducts;