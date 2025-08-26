import React from "react";

function Card({ image, title, price, username, location, description, status }){
    return(
        <>
        <div className="card">
            <div className="card-header">
                <div className="card-logo">
                    <img src={image}/>
                </div>
                <div className="card-title"><h4>{title}</h4></div>
                <div className="card-price">{price}</div>
            </div>
            <div className="card-body">
                <div className="card-username"><h4>{username}</h4></div>
                <div className="card-location">{location}</div>
                <div className="card-description">{description}</div>
                <div className="btns">
                    <button className="btn-outline">VIEW CV</button>
                    <button className="btn-filled">MAKE OFFER</button>
                </div>
                <div className="card-status">{status}</div>
            </div>
        </div>
        </>
    )
}

export default Card