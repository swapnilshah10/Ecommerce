import React from "react";
import { useEffect } from "react";
import Link from "next/link";
import MainCarousel from "../components/MainCarousel";
import Carousel from "../components/Carousel123";
import Card from "../components/Card";

function homepage() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
      <style jsx>{``}</style>
      <MainCarousel />
      <br></br>
      <div className="d-flex flex-wrap justify-content-center">
        <Card
          cardData={{
            title: "Shure SE846 BT2-EFS Wireless Audiophile Earphones",
            image:
              "https://www.audiosanctuary.co.uk/images/detailed/15/audiosanctuary_shure_se846_blue.jpg",
            description:
              "SE846 Sound Isolating earphones feature four high-definition drivers for extended high-end clarity and a groundbreaking low-pass filter for ...",
            price: "799",
          }}
        />
        <Card />
        <Card />
        <Card />
      </div>
      <br></br>
      <Carousel />
      <h3 className="text-center">Trending</h3>
      <div>
        <div className="container text-center mt-5">
          <h3>What We Do</h3>
          <br />
          <p>
            E-commerce (electronic commerce) is the activity of electronically
            buying or selling of products on online services or over the
            Internet. E-commerce draws on technologies such as mobile commerce,
            electronic funds transfer, supply chain management, Internet
            marketing, online transaction processing, electronic data
            interchange (EDI), inventory management systems, and automated data
            collection systems. E-commerce is in turn driven by the
            technological advances of the semiconductor industry, and is the
            largest sector of the electronics industry.
          </p>
          <div className="row mt-5">
            <div className="col-sm-4">
              <p>
                Current Project <br></br> Working on ecommerce website using
                next js for front end
              </p>
            </div>
            <div className="col-sm-4">
              <p>
                Inotebook <br></br> Used to save notes on innotebook and access
                via login
              </p>
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
