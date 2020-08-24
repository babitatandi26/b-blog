import React from "react";
import "./style.css";
import { Card } from "@material-ui/core";
import Layout from "../../components/Layout";

const ContactUs =(props) => {
    return (
        <>
        <div>
            <Layout>
            <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box',width:"70%"}}> 
            <div className="cardHeader">
                <span>CONTACT US</span>
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
            </Layout>
        </div>
        </>
    )
}
export default ContactUs;