import React from 'react'

const Hall = ({name, selected, color, onClick}) => (
    <div className="hall" onClick={onClick}>
        <div className="hall-icon" style={{backgroundColor: color}}/>
        <p className={"hall-name" + (selected ? ' selected' : '')}>{name}</p>
    </div>
)

export default Hall