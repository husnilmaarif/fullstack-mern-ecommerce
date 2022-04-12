import React, { useState, useEffect } from "react";
import "./Product.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const response = await axios.get("http://localhost:3000/product");
    setCards(response.data);
  };

  return (
    <>
      <div className="container mt-5">
        {cards.map((card, index) => {
          <Card className="col-lg-3 shadow" key={index}>
            <Card.Img variant="top" src={card.imageUrl} />
            <Card.Body>
              <Card.Title>{card.name}</Card.Title>
              <Card.Text className="text-muted">
                <small>
                  <strong>
                    Rp {card.price} | {card.countInStock}
                  </strong>
                </small>
              </Card.Text>
              <Link to={`/product/${1111}`} className="btn btn-primary">
                View Detail
              </Link>
            </Card.Body>
          </Card>;
        })}
      </div>
    </>
  );
};

export default Product;
