import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import {useAuth} from "../store/auth"
import "./Register.css"
import {toast } from "react-toastify";

function Register() {

    const [user, setUser]=useState({
        username:"",
        email:"",
        password:"",
    });
    const navigate=useNavigate();
    const {storeTokenInLS}= useAuth();

    const handleInput=(e)=>{
        console.log(e);
        let name=e.target.name;
        let value=e.target.value;

        setUser({
            ...user, [name]:value,
        });
    };
    const handleSubmit=async(e)=>{
        e.preventDefault();

        try {
            
            const response = await fetch(`http://localhost:5000/api/auth/register`,{
            method:"POST",
            headers:{
                'Content-Type':"application/json" ,  
            },
            body: JSON.stringify(user),
        });
        const res_data = await response.json();
        if(response.ok){   
            storeTokenInLS(res_data.token);
            setUser({username:"",
        email:"",
        password:"",});
        toast.success("Registration Successful");
        navigate("/login");
        }else{
            toast.error(res_data.extraDetails ? res_data.extraDetails:res_data.message);
        }

        console.log(response);
        } catch (error) {
            console.log(error);
        }
        
        
    }


  return (
    <div>
       <section class="thiscontainer forms">

<div class="form login">
    <div class="form-content">
        <header>Sign Up</header>
        <form onSubmit={handleSubmit}>
            <div class="field input-field">
                <input type="text" 
                name="username"
                id="username"
                value={user.username}
                required
                placeholder='username'
                autoComplete='off'
                onChange={handleInput}
                class="input"/>
                
            </div>

            <div class="field input-field">
                <input type="email" 
                name="email"
                id="email"
                required
                value={user.email}
                placeholder='email'
                autoComplete='off'
                onChange={handleInput} class="input"/>
            </div>

            <div class="field input-field">
                <input type="password" 
                name="password"
                id="password"
                required
                value={user.password}
                placeholder='password'
                autoComplete='off'
                onChange={handleInput} 
                class="password"  />
                <i class='bx bx-hide eye-icon'></i>
               
            </div>


            <div class="field button-field">
                <button>Sign Up</button>
            </div>
        </form>

        <div class="form-link">
                        <span>Already have an account? </span> 
                        <Link to="/login">Sign In</Link>
                    </div>

    </div>

    <div class="line"></div>

    <div class="media-options">
        <a href="#" class="field google">
   
            <span>Sign Up with Google</span>
        </a>
    </div>

</div>
</section>

        </div>
  )
}

export default Register