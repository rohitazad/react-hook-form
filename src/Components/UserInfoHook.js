import React from 'react';
import {useForm} from 'react-hook-form';
import {DevTool} from '@hookform/devtools';

let componentRerender = 0;
const UserInfoComponentForm2 = ()=>{
    const form = useForm();
    const {register, control, handleSubmit} = form;
    
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
                <form action="#" onSubmit={handleSubmit(formSubmit)} className='userDetailForm'>
                    <div className='fromGroup'>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" {...register('name')} placeholder='Enter your name' />
                        
                    </div>
                    <div className='fromGroup'>
                        <label htmlFor="name">Email</label>
                        <input id="email" type="email" {...register('email')} placeholder='Enter your email' />
                    </div>
                    <div className='fromGroup'>
                        <label htmlFor='phone'>Mobile No.</label>
                        <input id="phone" type="number" {...register('phone')} placeholder='Enter your number' />
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


export default UserInfoComponentForm2;