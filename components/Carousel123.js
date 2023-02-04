import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "./Card";

const CarouselComponent = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  let stylee = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    // textAlign: "center",
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item style={stylee}>
        <Card />
        <Card />
        <Card />
      </Carousel.Item>
      <Carousel.Item style={stylee}>
        <Card />
        <Card />
        <Card />
      </Carousel.Item>
      <Carousel.Item style={stylee}>
        <Card />
        <Card />
        <Card />
      </Carousel.Item>
      <Carousel.Item style={stylee}>
        <Card />
        <Card />
        <Card />
      </Carousel.Item>
      <Carousel.Item style={stylee}>
        <Card />
        <Card />
        <Card />
      </Carousel.Item>
      <Carousel.Item style={stylee}>
        <Card />
        <Card />
        <Card />
      </Carousel.Item>
      <Carousel.Item style={stylee}>
        <Card />
        <Card />
        <Card />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
