import React from "react";
import { useEffect } from "react";

function about() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <div style={{ alignItems: "center" }}>
      <h1 style={{ display: "flex", justifyContent: "center" }}>About us</h1>
      <p
        style={{
          alignItems: "center",
          paddingLeft: "80px",
          paddingRight: "80px",
          paddingTop: "20px",
          textAlign : "justify",
          fontSize: "20px"
        }}
      >
        {" "}
        ShopEase, the activity of buying or selling products online, has
        revolutionized the way consumers shop for products and services. With
        the advent of technologies such as mobile commerce, electronic funds
        transfer, and supply chain management, ShopEase has become one of the
        largest sectors in the electronics industry. The term ShopEase was first
        introduced by Dr. Robert Jacobson, a consultant to the California State
        Assembly's Utilities & Commerce Committee, in 1984, and has since become
        widely accepted and used in the e-commerce industry.
        <br></br>
        <br></br>
        The use of the web plays a crucial role in ShopEase, with the majority
        of transactions taking place through the internet. However, other
        technologies such as e-mail are also utilized in some cases. The variety
        of products available through ShopEase is vast, ranging from physical
        goods like books to digital products like music downloads. ShopEase also
        encompasses different types of transactions, including online retailing,
        electronic markets, and online auctions.
        <br></br>
        <br></br>
        The value of ShopEase lies in its ability to save time and space for
        both customers and enterprises. By allowing consumers to shop and pay
        for products online, ShopEase streamlines the transaction process and
        improves efficiency. This is especially beneficial for busy office
        workers who are looking for a quick and convenient shopping experience.
        Overall, ShopEase is a valuable tool for modern-day consumers, providing
        a convenient and efficient way to shop and pay for products online.
      </p>
    </div>
  );
}

export default about;
