import React from "react";

export default function Card(props){
    // console.log(props)
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`./Images/${props.coverImg}`} alt="" className="card-img"/>
            <div className="top-content">
                <img src="../Images/Star.svg" alt="" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}).</span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="title">{props.title}</p>
            <p className="price"><span className="bold">From ${props.price}</span>/person</p>
        </div>
    )
}

// "../Images/card-img.png