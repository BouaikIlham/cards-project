import React from 'react'

const Card = (props) => {
    return (
        <div className="card">
            <div className="top">
                <div className="name">{props.name}</div>
                <img className="circle-img" src={props.imgURL}></img>
            </div>
            <div className="bottom">
                <div className="info">{props.phone}</div>
                <div className="info">{props.eamil}</div>

            </div>
        </div>
    )
}

export default Card