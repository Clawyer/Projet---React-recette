import React from "react";
export default function Titre(props) {
return (
  <div className="desserts">
    <h2 className="desserts-title">{props.title}</h2>
    <img className="desserts-img" src={props.url} alt={props.title}></img>
  </div>
);
}

