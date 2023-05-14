import React from 'react';
import {useForm} from 'react-hook-form';
import {DevTool} from '@hookform/devtools';


const UserInfoArray = ()=>{
    const form = useForm({
        defaultValues:{
            name:'Rohit Azad',
            email:'learncodingwithbhai@gmail.com',
            phone:['', ''],
            address:{
                city:'Delhi',
                pincode:'110001'
            }
        }
    })
    const {register, control, handleSubmit, formState:{errors}} = form;
    
    console.log('form', form)
    const formSubmit = (data)=>{
        console.log('form submit', data);
       
    }
    return (
        <>
            <div className='userFrom'>
                <h2>User Info Details</h2>
                <h3>My Components Rerender - </h3>
                <form action="#" onSubmit={handleSubmit(formSubmit)} className='userDetailForm' noValidate>
                    <div className='fromGroup'>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" {...register('name', {
                            required:{
                                value:true,
                                message:'Please fill your good name'
                            },
                            validate:(fieldValue)=>{
                                return fieldValue !== 'admin' || 'Please enter another name'
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
                            },
                            validate:{
                                notAdminEmail:(value)=>{
                                    return value !== 'admin@admin.com' || 'Please choose another email id'
                                },
                                blockDomain:(value)=>{
                                    return (
                                        !value.endsWith('test.com') || "This domain is not allowd"
                                    )
                                },
                                lengthError: (value)=>{
                                    return value.length > 6 || 'Please write correct email formate'
                                }
                            }
                        })} placeholder='Enter your email' />
                        <p className='error'>{errors.email?.message}</p>
                    </div>
                    <div className='fromGroup'>
                        <label htmlFor='phone'>Mobile No.</label>
                        <input id="phone" type="text" {...register('phone.0', {
                            required:{
                                value:true,
                                message:'Please fill your mobile no'
                            }
                        })} placeholder='Enter your number' />
                        <p className='error'>{errors.phone?.message}</p>
                    </div>
                    <div className='fromGroup'>
                        <label htmlFor='phone2'>Secondary Mobile No.</label>
                        <input id="phone2" type="text" {...register('phone.1')} placeholder='Enter your secondary number' />
                    </div>
                    <div className='fromGroup'>
                        <label htmlFor='city'>City.</label>
                        <input id="city" type="text" {...register('address.city')} placeholder='Enter your city' />
                    </div>
                    <div className='fromGroup'>
                        <label htmlFor='pincode'>PinCode.</label>
                        <input id="pincode" type="text" {...register('address.pincode')} placeholder='Enter your pincode' />
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


export default UserInfoArray;