import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import Link from "next/link";
import MainCarousel from "../components/MainCarousel";
import Carousel from "../components/Carousel";
import Card from "../components/Card";

function homepage() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
    <style jsx>{
      `
      `
    }
    </style>
      <MainCarousel/>
      <br></br>
      <div style={{display: 'flex'}}>
      <Card  cardtitle  = "abc" />
      {/* <Card />
      <Card />
      <Card />
      <Card />
      <Card /> */}
      </div>
      <br></br>
      Trending
      {/* <Carousel/> */}
      <div>
    
        <div className="container text-center">
          <h3>What We Do
          </h3>
          <br />
          <p>E-commerce (electronic commerce) is the activity of electronically buying or selling of products on online services or over the Internet. E-commerce draws on technologies such as mobile commerce, electronic funds transfer, supply chain management, Internet marketing, online transaction processing, electronic data interchange (EDI), inventory management systems, and automated data collection systems. E-commerce is in turn driven by the technological advances of the semiconductor industry, and is the largest sector of the electronics industry.</p>
          <div className="row">
            <div className="col-sm-4">
              <img
                src="https://placehold.it/150x80?text=IMAGE"
                className="img-responsive"
                style={{ width: "100%" }}
                alt="Image"
              />
              <p>Current Project <br></br> Working on ecommerce website using next js for front end</p>
            </div>
            <div className="col-sm-4">
              <img
                src="https://placehold.it/150x80?text=IMAGE"
                className="img-responsive"
                style={{ width: "100%" }}
                alt="Image"
              />
              <p>Inotebook <br></br> Used to save notes on innotebook and access via login</p>
            </div>
            <div className="col-sm-4">
              <div className="well">
                <p>Some text..</p>
              </div>
              <div className="well">
                <p>Some text..</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default homepage;
