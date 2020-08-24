import React, { useEffect } from "react";
import "./style.css";
import Card from "../UI/Card";
import blogPost from "../../data/blog.json";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = (props) => {

    const [posts, setPosts] = useState([]);


    useEffect(() => {
        const posts = blogPost.data;
        setPosts(posts);
    },[posts]);

    return (
        <>
        <div className="sidebarContainer" style={{width:props.width}}>
        <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}> 
            <div className="cardHeader">
                <span>About Us</span>
            </div>
            <div className="profileImageContainer">
                <img src={require('../../blogPostImages/4.jpg')} alt="About Image" />
                </div>
                <div className="cardBody">
                    <p className="PersonalBio">I am babita, Website Developer, front end designer.</p>
                </div>
            </Card>

            <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}> 
            <div className="cardHeader">
                <span>Social Network</span>
            </div>
            <div className="profileImageContainer">
                <img src={require('../../blogPostImages/5.jpg')} alt="social Image" />
                </div>
                <div className="cardBody">
                    <p className="PersonalBio">Follow us on Facebook,instagram, twitter and also visit our youtube page.</p>
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/facebook-circled.png"/>
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/twitter-circled.png"/>
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/google-plus.png"/>
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/whatsapp.png"/>
                </div>
            </Card>

            <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}> 
            <div className="cardHeader">
                <span>Recent Posts</span>
            </div>
            <div className="recentPosts">


             {
                 posts.map(post =>{
                     return(
                         <NavLink key={post.id} to={`/post/${post.slug}`}>
                        <div className="recentPost">
                        <h3>{post.blogTitle}</h3>
                        <span>{post.postedOn}</span>
                    </div>
                    </NavLink>
                     );
                 })
             }
            </div>
            </Card>
            </div>
        </>
    )
}
export default Sidebar;