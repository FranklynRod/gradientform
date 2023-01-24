import React, {useState} from "react";

export const Register = (props) => {
    const[email, setEmail] = useState('');
    const[pass, setPass] = useState('');
    const[name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className='auth-form-container'>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name</label>
                <input value={name} onChange={(e)=> setName(e.target.value)} name="name" id="name" placeholder="Full Name"></input>
                <label htmlFor="email">email</label>
                <input id="user-email" value={email} onChange={(e)=> {setEmail (e.target.value);console.log({email},document.getElementById("user-email"))}}type="email" placeholder="youremail@gmail.com"></input>
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e)=> setPass(e.target.value)}type="password" placeholder="*****" id="password" name="password"></input>
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={()=>props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}