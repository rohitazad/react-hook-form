import React, {useState} from 'react';

const UserInfoComponentForm = ()=>{
    const [name, setName] = useState('Rohit Azad Malik');
    const [email, setEmail] = useState('rohitazad5050@gmail.com');
    const [phone, setPhone] = useState('9910006711');
    const ChangeHandler = (e)=>{
        let inputName = e.target.name;
        let inputValue = e.target.value;
        if(inputName === 'name'){
            setName(inputValue)
        }else if(inputName === 'email'){
            setEmail(inputValue)
        }else if(inputName === 'phone'){
            setPhone(inputValue)
        }
    }
    const formSubmitHandler = (e)=>{
        e.preventDefault();
        console.log('Form Submit');
        let data = {name,email,phone}
        console.log('data',data);
    }
    return (
        <>
            <div className='userFrom'>
                <h2>User Info Details</h2>
                <form action="#" onSubmit={formSubmitHandler} className='userDetailForm'>
                    <div className='fromGroup'>
                        <label>Name</label>
                        <input type="text" name="name" value={name} onChange={ChangeHandler} placeholder='Enter your name' />
                    </div>
                    <div className='fromGroup'>
                        <label>Email</label>
                        <input type="email" name="email" value={email} onChange={ChangeHandler} placeholder='Enter your email' />
                    </div>
                    <div className='fromGroup'>
                        <label>Mobile No.</label>
                        <input type="number" name="phone" value={phone} onChange={ChangeHandler} placeholder='Enter your number' />
                    </div>
                    <div className='fromGroup'>
                        <input type="submit" value="Save" />
                    </div>

                </form>
            </div>
        </>
    )
}


export default UserInfoComponentForm;