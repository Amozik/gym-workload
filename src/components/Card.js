import React from 'react'

const Card = ({color, size, booked, comment}) => (
    <div className="card" style={{backgroundColor: color, opacity: Math.max(booked/size, 0.3)}}>
        <div className="booked">{`Занято: ${booked}\xA0из\xA0${size}`}</div>
        <div className="comment"><p>{comment}</p></div>
    </div>
)

export default Card