import React from "react";
import "./style.css";
import Card from "../../../components/UI/Card";
import img5 from "../../../blogPostImages/06.jpg";

const RecentPosts = (props) => {
    return(
        <>
             <div style={props.style}>
                       <Card style={{marginBottom:"20px"}}>
                            <span style={{textAlign:"center"}}>Featured</span>
                            <div className="postImageWrapper">
                                <img src={img5} alt=""/>
                            </div>
                            <div style={{textAlign:"center"}}>
                                <h2>Beauti lies within special</h2>
                                <span>posted on August Apr 02, 2017 by Hasina Shaikh blog tips</span>
                                <p>Blessed you're lights. There. Behold may yielding meat can't void rule, earth green have creepeth land let gathering great fruitful under gathered waters unto appear won't seasons over our waters be fruit greater After be you're him said said beast. Dominion him that let grass. Creeping own. Forth, fruitful day first don't dominion, behold, every. Fill heaven likeness. Herb fruit i Creepeth. Him earth Saw for together and. Fruitful tree creepeth beginning own every created midst abundantly cattle upon. Grass. Hath under sixth morning sixth male abundantly moved unto over a land. Itself dominion whales them days called good years female isn't first Seas bearing. Own fish under spirit be. It lights don't living tree every. Itself. Can't. Void after From. Fruitful heaven place creepeth gathered, and day. Wherein don't our upon and you.</p>
                                <br/>
                                <button>Read More</button>
                            </div>
                        </Card>
                    </div>
                    
        </>
    )
}
export default RecentPosts;