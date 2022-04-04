import React from "react";
export default function Titre(props) {
return (
  <div>
    <h2>{props.title}</h2>
    <img className="desserts" src={props.url} alt={props.title}></img>
  </div>
)
}

