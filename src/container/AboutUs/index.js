import React from "react";
import "./style.css";
import Card from "../../components/UI/Card";
import Layout from "../../components/Layout";

const About = () => {
    return(
        <>
        
        
        <Layout>
            <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box',width:"70%"}}> 
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
        </Layout>
        </>
    )
}

export default About;
