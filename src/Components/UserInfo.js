import React, {useState} from 'react';

let componentRerender = 0;
const UserInfoComponentForm = ()=>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
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
        if(name === ''){
            alert('Please fill you name')
        }else if(email === ''){
            alert('Please fill you email')
        }else if(phone === ''){
            alert('Please fill you phone')
        }else{
            console.log('data',data);
        }
    }
    componentRerender ++;
    return (
        <>
            <div className='userFrom'>
                <h2>User Info Details</h2>
                <h3>My Components Rerender - {componentRerender}</h3>
                <form action="#" onSubmit={formSubmitHandler} className='userDetailForm'>
                    <div className='fromGroup'>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" value={name} onChange={ChangeHandler} placeholder='Enter your name' />
                    </div>
                    <div className='fromGroup'>
                        <label htmlFor="name">Email</label>
                        <input id="email" type="email" name="email" value={email} onChange={ChangeHandler} placeholder='Enter your email' />
                    </div>
                    <div className='fromGroup'>
                        <label htmlFor='phone'>Mobile No.</label>
                        <input id="phone" type="number" name="phone" value={phone} onChange={ChangeHandler} placeholder='Enter your number' />
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