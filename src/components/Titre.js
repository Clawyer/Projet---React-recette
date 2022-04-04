import React from "react";
export default function Titre(props) {
return (
  <div className="desserts">
    <img className="desserts-img" src={props.url} alt={props.title}></img>
    <h2 className="desserts-title">{props.title}</h2>
  </div>
);
}
