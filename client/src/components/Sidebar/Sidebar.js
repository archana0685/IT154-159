import React from 'react';
import { useSidebarContext } from '../../context/sidebarContext';
import { ImCancelCircle} from "react-icons/im";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import { useMealContext } from '../../context/mealContext';
import { TiUser } from "react-icons/ti";
import { VscBook } from "react-icons/vsc";
import { TiStarFullOutline } from "react-icons/ti";
import { TfiAlarmClock } from "react-icons/tfi";
import { FiLogOut } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar} = useSidebarContext();
    const { categories } = useMealContext();

    return (
        
        <nav className={`sidebar ${isSidebarOpen ? 'sidebar-visible' : ""}`}>
            <div>
            <button className='navbar-hide-btn' onClick={() => closeSidebar()}>
                <IoIosArrowForward size = {40} />
            </button>
            </div>
            <div className='side-content'>
                <ul className='side-nav'>
                    
                            
                            <li className='side-item'>
                                <Link to = "/login/home/account" className='side-link ls-1 fs-13' onClick={() => closeSidebar()}>
                                <TiUser/>   Your Account
                                </Link>
                            </li>
                            <br/>
                            <li className='side-item'>
                                <Link to = "/login/home" className='side-link ls-1 fs-13' onClick={() => closeSidebar()}>
                                   <TfiAlarmClock/> Quick Picks
                                </Link>
                            </li>
                            <br/>
                            <li className='side-item'>
                                <Link to = "/login/home/publish" className='side-link ls-1 fs-13' onClick={() => closeSidebar()}>
                                   <VscBook/> Publish Your Recipe
                                </Link>
                            </li>
                            <br/>
                            <li className='side-item'>
                                <Link to = "/" className='side-link ls-1 fs-13' onClick={() => closeSidebar()}>
                                  <TiStarFullOutline/> Your Ratings
                                </Link>
                            </li>
                            <br/>
                            <li className='side-item'>
                                <Link to = "/" className='side-link ls-1 fs-13' onClick={() => closeSidebar()}>
                                    <FiLogOut/> Logout
                                </Link>
                            </li>
                       
                    
                </ul>
            </div>
        </nav>
    )
}

export default Sidebar