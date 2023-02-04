import { useRouter } from "next/router";
import Carousel from "../../components/MainCarousel";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import { useState } from "react";

const Product = () => {
  let productDetails = {
    productName: "Shure SE846 BT2-EFS Wireless Audiophile Earphones",
    description:
      "State-of-the-art, unparalleled audio is delivered through four custom-engineered drivers – each tailored to blend precisely with the others. Customizable sound signatures for balanced, warm and bright audio is enlightened listening at its finest. Pure bliss for the refined ear, available in four striking color options.",
    price: 99,
    imageUrl:
      "https://www.audiosanctuary.co.uk/images/detailed/15/audiosanctuary_shure_se846_blue.jpg",
    details: {
      features: [
        {
          name: "QUAD HIGH-DEFINITION MICRODRIVERS WITH TRUE SUBWOOFER",
          description:
            "For extended high-end clarity and unparalleled low-end performance Four custom-engineered, balanced armature drivers",
        },
        {
          name: "REMOVABLE CABLE WITH BLUETOOTH WIRELESS TECHNOLOGY",
          description:
            "For wireless audio playback and cable-free convenience, with customizable communications and controls.",
        },
        {
          name: "ADVANCED NOISE ISOLATION",
          description:
            "Minimizes background noise for immersive sound and improved vocal clarity.",
        },
        {
          name: "COMFORTABLE, SECURE FIT",
          description:
            "With a customizable, ergonomic fit for long-lasting comfort and stability.",
        },
      ],
    },
  };
  const router = useRouter();
  const { slug } = router.query;
  const [counters, setCounter] = useState(1);

  let incrementCounter = () => {
    setCounter(counters + 1);
  };
  let decrementCounter = () => {
    if (counters > 1) {
      setCounter(counters - 1);
    }
  };
  return (
    <>
      <Carousel />

      <div className="container my-5">
        <h2 className="text-center">{productDetails.title}</h2>
        <p className="text-muted text-center lead">
          {productDetails.description}
        </p>
        <h3 className="text-center text-muted">
          Price : {productDetails.price}$
        </h3>

        <div className="d-flex justify-content-center">
          <Link href="/cart">
            <button className="btn btn-warning">Buy Now</button>
          </Link>
          <div className="mx-3">
            <button className="btn btn-secondary" onClick={decrementCounter}>
              -
            </button>
            <span className="mx-2">{counters}</span>
            <button className="btn btn-secondary" onClick={incrementCounter}>
              +
            </button>
          </div>
        </div>
        <div className="my-5 d-flex flex-wrap">
          <div className="col-sm-12 col-md-6">
            <img
              className="card-img-top mx-auto"
              src={productDetails.imageUrl}
              alt="Product Image"
            />
          </div>
          <div className="productDescription col-sm-12 col-md-6">
            <h2 className="text-muted">PRODUCT DETAILS</h2>
            <h3 className="text-muted">Features</h3>
            <ul>
              {productDetails.details.features.map((feature) => (
                <li key={feature.title}>
                  <h6 className="text-muted">{feature.title}</h6>
                  <li>{feature.description}</li>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Product;
