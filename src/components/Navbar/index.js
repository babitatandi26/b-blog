import React, { useState } from "react";
import "./style.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {

    const [search,setSearch] = useState(false);

    const submitSearch = (e) => {
        e.preventDefault();
         alert("searched");
    }

        const openSearch =() => {
            setSearch(true);
        }

        const searchClass =search? 'searchinput.active':'searchinput';
       
        return(
        <>
        <div className="navbar">
            <ul className="navbarMenu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
            </ul>
            <div className="search">
                <form onSubmit={submitSearch}>
                    <input type="text" className={searchClass} placeholder="Search" />
                    <img onClick={openSearch} className="searchIcon" src={require('../../assets/icons/search.png')} alt="search"/>
                </form>
            </div>
        </div>
        </>
    )
}
export default Navbar;