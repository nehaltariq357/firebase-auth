import React from "react";

function Card(props) {
  const { category, description, id, image, price, title } = props.data;

  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Category: {category}</li>
          <li className="list-group-item">Price: ${price}</li>
          <li className="list-group-item">ID: {id}</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
