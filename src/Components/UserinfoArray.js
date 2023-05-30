import React, {useEffect} from 'react';
import {useForm, useFieldArray} from 'react-hook-form';
import {DevTool} from '@hookform/devtools';

/*
isSubmitting (जमा हो रहा है): यह राइक्ट वक्त पर यह दर्शाता है कि फॉर्म जमा करने की प्रक्रिया चल रही है। यदि फॉर्म जमा करने के लिए उपयोगकर्ता एक बटन पर क्लिक करता है और जमा करने की प्रक्रिया अभी चल रही है, तो इस स्थिति को सक्रिय किया जाता है।

isSubmitted (जमा हो चुका है): यह स्थिति दर्शाती है कि फॉर्म सफलतापूर्वक जमा हो चुका है। जब उपयोगकर्ता फॉर्म को जमा कर देता है, तो इस स्थिति को सक्रिय किया जाता है।

isSubmitSuccessful (जमा सफलतापूर्वक हुआ है): यह स्थिति दर्शाती है कि फॉर्म सफलतापूर्वक सर्वर तक पहुंच गया है और उसे स्वीकार किया गया है। जब फॉर्म सफलतापूर्वक जमा होता है और सर्वर से प्रतिक्रिया मिलती है, तो इस स्थिति को सक्रिय किया जाता है।

submitCount (जमा करने की गिनती): यह वैरिएबल बताता है कि फॉर्म कितनी बार जमा हुआ है। हर बार जब उपयोगकर्ता फॉर्म को जमा करता है, तो इस गिनती को बढ़ाया जाता है।

*/
let componentRerender = 0;
const UserInfoArray = ()=>{
    const form = useForm({
        defaultValues:{
            name:'',
            email:'',
            phone:['9910006711', ''],
            address:{
                city:'',
                pincode:''
            },
            anoterPhoneNo:[{
                number:''
            }],
            age:0,
            dateOfBirth: new Date()
        }
    })
    /*
        Form Submission State Guide 
        1. isSubmitting
        2. isSubmitted
        3. isSubmitSuccessful
        4. submitCount
    */
    const {register, control, handleSubmit, watch, getValues, setValue, reset, formState:{errors, touchedFields, dirtyFields, isDirty, isValid, isSubmitting, isSubmitted, isSubmitSuccessful, submitCount}} = form;

    console.log({isSubmitting, isSubmitted, isSubmitSuccessful, submitCount})
    //console.log({touchedFields, dirtyFields, isDirty,isValid});
    
    const {fields, append, remove } = useFieldArray({
        name:'anoterPhoneNo',
        control
    })
    //console.log('useFildArray')
    const formSubmit = (data)=>{
        console.log('form submit', data);
       
    }
    const hangelGetValues = ()=>{
        const formValue = getValues(["name","email","address.city","address.pincode"]);
        console.log('formValue',formValue)
    }
    const hangelSetValues = ()=>{
        setValue("name","",{
            shouldValidate:true,
            shouldDirty:true,
            shouldTouch:true
        })
        setValue("email","",
        {
            shouldValidate:true,
            shouldDirty:true,
            shouldTouch:true
        })
    }
    // const formWatch = watch();
    // useEffect(()=>{
    //    const subscription =  watch((data)=>{
    //         return console.log('data', data)
    //     })
    //     return ()=> subscription.unsubscribe();
    // }, [watch])
    const onError = (error)=>{
        console.log('error',error)
    }
    const handleReset = ()=>{
        reset();
    }
    useEffect(()=>{
        if(isSubmitSuccessful){
            reset();
        }
    }, [isSubmitSuccessful, reset])
    componentRerender ++;
    return (
        <>
            <div className='userFrom'>
                <h2>User Info Details</h2>
                <h3>My Components Rerender - ({componentRerender/2})</h3>
               {/* <h3>Form Watch {JSON.stringify(formWatch)}</h3> */}
                <form action="#" onSubmit={handleSubmit(formSubmit, onError)} className='userDetailForm' noValidate>
                    <div className='fromGroup'>
                        <label htmlFor="name">Name</label>
                        <input  type="text" id="name" {...register('name', {
                            disabled: watch('email') === '',
                            minLength:{
                                value:4,
                                message:'Please fill more then 3 chr'
                            },
                            maxLength:{
                                value:40,
                                message:'Please fill less then 40 chr'
                            },
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
                        <input  id="email"  type="email" {...register('email', {
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

                        <div>
                            <h5>Add more Phone NO.</h5>
                            {
                                fields.map((field, index)=>{
                                    return (
                                        <div key={field.id} className='fromGroup'>
                                            <input type="text" {...register(`anoterPhoneNo.${index}.number`)} />
                                            {
                                                index> 0 && <button className='rmoveBtn' type="button" onClick={()=>remove(index)}>remove field </button>
                                            }
                                        </div>
                                    )
                                })
                            }
                            <button className='addBtn' type="button" onClick={()=>append({number:''})}>Add one more field </button>
                        </div>
                    <div className='fromGroup'>
                        <label htmlFor="age">Age</label>
                        <input type="number" id="age" {...register('age', {
                            valueAsNumber:true,
                            min:{
                                value:3,
                                message:'Please fill age more then 3'
                            },
                            max:{
                                value:100,
                                message:'you can not fill this form beacuse of your age is exits'
                            },
                            required:{
                                value:true,
                                message:'Please fill age'
                            }
                        })} placeholder='Enter your age' />
                        <p className='error'>{errors.age?.message}</p>
                    </div>
                    <div className='fromGroup'>
                        <label htmlFor="dateOfBirth">Date of Birth</label>
                        <input type="date" id="dateOfBirth" {...register('dateOfBirth', {
                            valueAsDate:true,
                            required:{
                                value:true,
                                message:'Please fill date Of Birth'
                            }
                        })} placeholder='Enter your date Of Birth' />
                        <p className='error'>{errors.dateOfBirth?.message}</p>
                    </div>

                    <div className='fromGroup'>
                        <input disabled={!isDirty || !isValid || isSubmitting} type="submit" value="Save" />
                        <button type="button" onClick={hangelGetValues}>GetValues</button>
                        <button type="button" onClick={hangelSetValues}>SetValues</button>
                        <button type="button" onClick={handleReset}>Reset</button>
                    </div>

                </form>
                <DevTool control={control}/>
            </div>
        </>
    )
}


export default UserInfoArray;