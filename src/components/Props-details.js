import React from 'react';

export default function Propsdetail (props) {
    return (
      <article className="details-p">
        <img className="details-img" src={props.url} alt={props.title}></img>
        <div className="text-content">
          <h2 className="details-title">{props.title}</h2>
          <div className="details-ingredients">
            <h5>Ingrédients</h5>
            <ol>
              <li>ingrédient 1</li>
              <li>ingrédient 2</li>
              <li className="last-li">ingrédient 3</li>
            </ol>
          </div>
          <div className="details-preparation">
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
          </div>
        </div>
      </article>
    );
}

