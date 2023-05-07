import React from 'react';
import {useForm} from 'react-hook-form';
import {DevTool} from '@hookform/devtools';

let componentRerender = 0;
const UserInfoValidationForm = ()=>{
    const form = useForm();
    const {register, control, handleSubmit, formState:{errors}} = form;
    
    //console.log('form', form)
    const formSubmit = (data)=>{
        console.log('form submit', data);
       
    }
    componentRerender ++;
    return (
        <>
            <div className='userFrom'>
                <h2>User Info Details</h2>
                <h3>My Components Rerender - {componentRerender}</h3>
                <form action="#" onSubmit={handleSubmit(formSubmit)} className='userDetailForm' noValidate>
                    <div className='fromGroup'>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" {...register('name', {
                            required:{
                                value:true,
                                message:'Please fill your good name'
                            }
                        })} placeholder='Enter your name' />
                        <p className='error'>{errors.name?.message}</p>
                    </div>
                    <div className='fromGroup'>
                        <label htmlFor="name">Email</label>
                        <input id="email"  type="email" {...register('email', {
                            pattern:{
                                value:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                message:"invalid email id please fill correct email id"
                            },
                            required:{
                                value:true,
                                message:'Please fill your email id'
                            }
                        })} placeholder='Enter your email' />
                        <p className='error'>{errors.email?.message}</p>
                    </div>
                    <div className='fromGroup'>
                        <label htmlFor='phone'>Mobile No.</label>
                        <input id="phone" type="number" {...register('phone', {
                            required:{
                                value:true,
                                message:'Please fill your mobile no'
                            }
                        })} placeholder='Enter your number' />
                        <p className='error'>{errors.phone?.message}</p>
                    </div>
                    <div className='fromGroup'>
                        <input type="submit" value="Save" />
                    </div>

                </form>
                <DevTool control={control}/>
            </div>
        </>
    )
}


export default UserInfoValidationForm;