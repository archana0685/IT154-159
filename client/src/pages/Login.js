import React from 'react'
import { useState} from 'react'
import { useNavigate , Link} from 'react-router-dom';
import {useAuth} from '../store/auth'
import "./Register.css"
import {toast } from "react-toastify";


const URL="http://localhost:5000/api/auth/login";


function Login() {

    const [user, setUser]=useState({
        email:"",
        password:"",
    });

    const navigate =useNavigate();
    const {storeTokenInLS}=useAuth();

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
            const response= await fetch(URL,{
                method:"POST",
                headers:{
                   'Content-Type' :'application/json',
                },
                body: JSON.stringify(user),
            });
            const res_data=await response.json();
            if(response.ok){
                
                storeTokenInLS(res_data);

                setUser({email:"",password:""});
                toast.success("Welcome to Rustic Recipes!");
                navigate("/login/home")
            }else{
                toast.error(res_data.extraDetails ? res_data.extraDetails:res_data.message);
            }
        } catch (error) {
            console.log(error);
        }
        
        
    }


  return (
    <div>
        
        <section class="thiscontainer forms">

            <div class="form login">
                <div class="form-content">
                    <header>Login</header>
                    <form onSubmit={handleSubmit}>
                        <div class="field input-field">
                            <input type="email" 
                            name="email"
                            id="email"
                            required
                            value={user.email}
                            placeholder='email'
                            autoComplete='off'
                            onChange={handleInput}
                            class="input"/>
                        </div>

                        <div class="field input-field">
                            <input type="password" name="password"
                            id="password"
                            required
                            value={user.password}
                            placeholder='password'
                            autoComplete='off'
                            onChange={handleInput} class="password"/>
                            <i class='bx bx-hide eye-icon'></i>
                        </div>

                        <div class="form-link">
                            <a href="#" class="forgot-pass">Forgot password?</a>
                        </div>

                        <div class="field button-field">
                            <button>Login</button>
                        </div>
                    </form>

                    <div class="form-link">
                        <span>Don't have an account? </span> 
                        <Link to="/register">Signup</Link>
                    </div>
                </div>

                <div class="line"></div>


                <div class="media-options">
                    <a href="#" class="field google">
                        
                        <span>Login with Google</span>
                    </a>
                </div>

            </div>
            </section>
        
    </div>
  )
}

export default Login