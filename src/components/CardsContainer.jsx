import React from "react";
import Card from "./Card";
import img1 from "./img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img1.jpg"
function CardsContainer(){
    return(
        <>
        <div className="cards-container">
            
                <Card 
                image={img1}
                title="Film Director, Producer"
                price="$14/hour"
                username="Jeffrey Abrams, 51"
                location="New York, United States"
                description="Abrams was born in New York City and raised in Los Angeles."
                status="Online"
            />
            
                <Card 
                image={img2}
                title="Actor, Film Director"
                price="$9/hour"
                username="Baltsar Kormakur, 52"
                location="Reykjavik, Iceland"
                description="Iceland actor, theater and film director, and film producer."
                status="Last seen: 17 minutes ago"
            />
            
                <Card 
                image={img3}
                title="Film Director"
                price="$20/hour"
                username="S S Rajamouli, 51"
                location="Karnataka, India"
                description="Indian filmmaker who works in Telugu cinema."
                status="Offline"
            />
            
        </div>
        
        </>
    )
}

export default CardsContainer