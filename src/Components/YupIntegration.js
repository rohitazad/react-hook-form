import React from 'react';
import {useForm} from 'react-hook-form';
import {DevTool} from '@hookform/devtools';
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from 'yup';

const schema = yup.object({
    name:yup.string().required("Please fill your name"),
    email:yup.string().email("please fill correct email id").required("Plese provide your email id"),
    phone:yup.string().required("Please fill your phone no.")
})

const YupIntegrationComponents = ()=>{
    const form = useForm({
        defaultValues:{
            name:'',
            email:'',
            phone:''
        },
        resolver: yupResolver(schema)
    })
    const {register, control, handleSubmit, formState} = form;
    const {errors} = formState;
    const formSubmit = (data)=>{
        console.log(data);
    }
    return(
        <>
            <form action="#" onSubmit={handleSubmit(formSubmit)} className='userDetailForm' noValidate>
                <div className='fromGroup'>
                    <label htmlFor="name">Name</label>
                    <input  type="text" id="name" {...register('name')} placeholder='Enter your name' />
                    <p className='error'>{errors.name?.message}</p>
                </div>
                <div className='fromGroup'>
                    <label htmlFor="name">Email</label>
                    <input  id="email"  type="email" {...register('email')} placeholder='Enter your email' />
                    <p className='error'>{errors.email?.message}</p>
                </div>
                <div className='fromGroup'>
                    <label htmlFor='phone'>Mobile No.</label>
                    <input id="phone" type="text" {...register('phone')} placeholder='Enter your number' />
                    <p className='error'>{errors.phone?.message}</p>
                </div>
                <div className='fromGroup'>
                    <input  type="submit" value="Save" />
                </div>
            </form>
            <DevTool control={control}/>
        </>
    )
}

export default YupIntegrationComponents;