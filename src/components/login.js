import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  
    const navigate = useNavigate();
    
    const [email, setEmail] = useState("");
   
    const [password, setPassword] = useState("");

    const submitForm = (e)=> { e.preventDefault();}

    return (
        <div class='mdiv'>
            <form action="" onSubmit={submitForm}>
            
                <div class='ndiv'>
                        <label htmlFor='Email'>Email</label>
                        <input type="text" 
                            value={email} onChange={(e) => setEmail(e.target.value)} 
                            name='Email' id='Email' autoComplete='on'  required/>
                </div>
            
                <div class='ndiv'>
                        <label htmlFor='Password'>Password </label>
                        <input type="password" 
                            value={password}onChange={(e) => setPassword(e.target.value)} 
                            name="Password" id='pwd' autoComplete='off' required/>
                </div>
            
            
                <button type='submit' onClick={() => navigate("/Home")} >Log In</button>
           

            </form>
            
        </div>
       
    )
   
}

export default Login 