import React from "react";
import Link from "next/link";

function Card({ cardData = {
  title: "Shure SE846 BT2-EFS Wireless Audiophile Earphones",
  image: "https://www.audiosanctuary.co.uk/images/detailed/15/audiosanctuary_shure_se846_blue.jpg",
  description:
    "SE846 Sound Isolating earphones feature four high-definition drivers for extended high-end clarity and a groundbreaking low-pass filter for ...",
  price: 899
  
} }) {
  let url = "/products/" + cardData.title;

  return (
    <Link href={url}>
      <div style={{ paddingLeft: "20px" }}>
        <div
          className="card"
          style={{
            width: "18rem",
            alignItems: "center",
            justifyContent: "center",
            display: "flex"
          }}
        >
          <img
            className="card-img-top"
            src={cardData.image}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{cardData.title}</h5>
            <p className="card-text">{cardData.description}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{cardData.price}$</li>
          </ul>
          <div className="card-body">
            <button
              className="btn btn-warning btn-sm"
              style={{ display: "flex", justifyContent: "center" }}
            >
              Buy now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;