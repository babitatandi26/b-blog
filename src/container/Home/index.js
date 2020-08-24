import React from "react";
import "./style.css";
import Sidebar from "../../components/Sidebar";
import Card from "../../components/UI/Card";
import img1 from "../../blogPostImages/04.jpg";
import img2 from "../../blogPostImages/08.jpg";
import img3 from "../../blogPostImages/07.jpg";
import img4 from "../../blogPostImages/01.jpg";
import img6 from "../../blogPostImages/05.jpg";
import RecentPosts from "./RecentPosts";
import Layout from "../../components/Layout";

const SideImage = props => {
    return(
        <div style={{height:`${props.height}px`}}>
             <img src={props.src} />
        </div>
    )
}
const ImageGallery = props => (
    <div className="galleryPost" style={props.galleryStyle}>
        <section style={{width:props.largeWidth}} className="mainImageWrapper">
            <div>
                <img src={img1}/>
            </div>
        </section>
        <section className="sideImageWrapper" style={{width:props.smallWidth}}>
            <SideImage height={props.sideImageHieght} src={img2}/>
            <SideImage height={props.sideImageHieght} src={img3}/>
            <SideImage height={props.sideImageHieght} src={img4}/>
        </section>
    </div>
);

const Home = props =>{

    const galleryHeight = 450; 
    const galleryStyle = {
        height:galleryHeight+'px',
        overflow:'hidden'
    }
    const sideImageHieght = galleryHeight/3;

    return(
        <>
            <div className="">
                <Card style={{margin:"20px 0"}}>

                    <ImageGallery 
                        largeWidth="70%"
                        smallWidth="30%"
                        sideImageHieght={sideImageHieght}
                        galleryStyle={galleryStyle}
                        />
                </Card>
                    <Layout>
                    <RecentPosts style={{width:"70%"}}/>
                    </Layout> 
                    

            </div>
        </>
    )
}
export default Home;