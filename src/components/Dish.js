import React from "react"

export default function Dish(props){
return (
    <div className="dish">
        <h2>{props.title}</h2>
        <img className="dish_img" src={props.url} alt={props.title} />
        <p>{props.description}</p>
    </div>
)
}