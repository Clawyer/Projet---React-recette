import React from 'react';

export default function Propsdetail (props) {
    return (
      <article className="details-p">
        <h2>{props.title}</h2>
        <img src={props.url} alt={props.title}></img>
        <h5>Ingrédients</h5>
        <ol>
          <li>ingrédient 1</li>
          <li>ingrédient 2</li>
          <li>ingrédient 3</li>
        </ol>
        <h5>Preparation</h5>
        <ol>
          <li>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
            placeat explicabo perferendis voluptas nam blanditiis delectus
            commodi, deleniti labore. Quam aperiam nostrum eum numquam eaque
            assumenda praesentium cupiditate autem quaerat.
          </li>
          <li>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
            placeat explicabo perferendis voluptas nam blanditiis delectus
            commodi, deleniti labore. Quam aperiam nostrum eum numquam eaque
            assumenda praesentium cupiditate autem quaerat.
          </li>
          <li>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
            placeat explicabo perferendis voluptas nam blanditiis delectus
            commodi, deleniti labore. Quam aperiam nostrum eum numquam eaque
            assumenda praesentium cupiditate autem quaerat.
          </li>
        </ol>
      </article>
    );
}

