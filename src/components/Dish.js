import React from "react"
import '../assets/css/dish.css'

export default function Dish(props){
return (
    <div className="dish">
        <h3 className="dish--title">{props.title}</h3>
        <img className="dish_img" src={props.url} alt={props.title} />
        <p>{props.description}</p>
    </div>
)
}