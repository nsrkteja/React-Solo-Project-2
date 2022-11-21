import React from "react"

function Card(props){
    return (
        <div className="card">
            <div className="card-img">
                <img src={props.imageUrl} className="image"/>
            </div>
            <div className="side">
                <div className="map">
                    <img src="/public/204-2048201_vector-location-icon-png.png" className="locion"/>
                    <p className="location">{props.location}</p>
                    <a href={props.googleMapsUrl} className="link">View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <h3 className="date">{props.startDate} - {props.endDate}</h3>
                <p className="desc">{props.description}</p>
            </div>
        </div>
    )
}

export default Card