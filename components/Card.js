import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import Link from "next/link";

function card(props) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  let url = "/products/" + props.cardtitle
  return (
    <>
    <Link href = {url}>
      <div style={{paddingLeft: "20px"}}>
        <div className="card" style={{width: "18rem"  , alignItems: "center" , justifyContent: "center" , display: "flex"}}>
          <img className="card-img-top" src="https://www.audiosanctuary.co.uk/images/detailed/15/audiosanctuary_shure_se846_blue.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Shure SE846 BT2-EFS Wireless Audiophile Earphones  </h5>
            <p className="card-text">
            SE846 Sound Isolating earphones feature four high-definition drivers for extended high-end clarity and a groundbreaking low-pass filter for ...
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">899$</li>
           
          </ul>
          <div className="card-body">
          <button className="btn btn-warning btn-sm" style={{display: 'flex', justifyContent: 'center', }}>Buy now</button>
          </div>
        </div>
      </div>
      </Link>
    </>
  );
}

export default card;
