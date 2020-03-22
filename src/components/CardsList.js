import React from 'react'

import Card from './Card'

const CardList = ({schedules}) => schedules.map((schedule, index) =>
    <Card key={index} {...schedule}/>
)

export default CardList