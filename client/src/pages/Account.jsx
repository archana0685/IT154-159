import React from 'react'
import "./Account.css"
import Navbar from '../components/Header/Navbar'
import profile from "../assets/images/userprofile.png"
import { useNavigate , Link } from 'react-router-dom'
import { useAuth } from '../store/auth'
import { GiHotMeal } from "react-icons/gi";
import Recipe from '../components/Publish/publishComponents/Recipe'



function Account() {

   const {user}=useAuth();
  return (
    <div className='account-container'>
        <Navbar/>
        <div className='account-user-heading'>
            Welcome {user}
        </div>
        <div className='user-details'>
            <div><img src={profile} alt=''/></div>   
        </div>
        <div className='user-recipes'>
        <div className='user-recipes-heading'><h2> <GiHotMeal/> Your Recipes  </h2></div>
        <br/>
        <div className='recipe-details'>
            <button> <div className='recipe'><p><Recipe/></p></div> </button>
            <p> </p>
  
            <Link to="/login/home/publish"><button> <div className='recipe'><p>+</p></div></button></Link>
        </div>
        </div>
    </div>
  )
}

export default Account