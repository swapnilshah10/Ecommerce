  import { useRouter } from "next/router";
import Carousel from "../../components/MainCarousel";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import { useState } from "react";

const Product = () => {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);
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
      <h2 style={{ textAlign: "center" }}>
        Shure SE846 BT2-EFS Wireless Audiophile Earphones
      </h2>
      <p style={{ padding: "20px", fontSize: "25px" }}>
        State-of-the-art, unparalleled audio is delivered through four
        custom-engineered drivers – each tailored to blend precisely with the
        others. Customizable sound signatures for balanced, warm and bright
        audio is enlightened listening at its finest. Pure bliss for the refined
        ear, available in four striking color options.
      </p>
      <h3>Price : 99$</h3>

      <button
        type="button"
        className="btn btn-warning"
        style={{ margin: "5px" }}
      >
        Add to cart
      </button>
      <br></br>
      <div style={{ display: "flex" }}>
        <div style={{justifyItems:"center" ,fontSize:"20px" , padding: "5px" }}>Quantity:</div>
        <div style={{ margin: "1px", border: "black", borderStyle: "solid" ,borderWidth: "1px" ,height:"40px" }}>
          <button
            type="button"
            className="btn btn-warning btn-sm"
            style={{ margin: "5px" ,height:"30px" }}
            onClick={incrementCounter}
          >
            +
          </button>
          {counters}
          <button
            type="button"
            className="btn btn-warning btn-sm"
            style={{ margin: "5px",height:"30px"  }}
            onClick={decrementCounter}
          >
            -
          </button>
        </div>
      </div>
      <Link href="/cart">
        <button
          type="button"
          className="btn btn-warning"
          style={{ margin: "5px" }}
        >
          Buy Now
        </button>
      </Link>
      <div
        className="blackPatch"
        style={{ backgroundColor: "white", height: "100px", width: "100%" }}
      ></div>
      <div className="itemDetails" style={{ display: "flex" }}>
        <img
          className="card-img-top"
          src="https://www.audiosanctuary.co.uk/images/detailed/15/audiosanctuary_shure_se846_blue.jpg"
          alt="Card image cap"
          style={{ height: "400px", width: "480px", paddingLeft: "80px" }}
        />
        <div
          className="productDescription"
          style={{
            textAlign: "left",
            width: "32%",
            justifyContent: "center",
            marginLeft: "340px",
            backgroundColor: "#fffdd0",
          }}
        >
          <ul>
            <h2>PRODUCT DETAILS</h2>
            <h3>Features</h3>
            <li>
              <h6>QUAD HIGH-DEFINITION MICRODRIVERS WITH TRUE SUBWOOFER</h6>
              <ul>
                <li>
                  For extended high-end clarity and unparalleled low-end
                  performance Four custom-engineered, balanced armature drivers
                  tailored to blend precisely with each other
                </li>{" "}
                <li>
                  {" "}
                  Three-way system configuration for dedicated low-, mid-, and
                  high-frequency distribution{" "}
                </li>{" "}
                <li>PATENT-PENDING DESIGN FOR UNPARALLELED LOW END </li>{" "}
                <li>
                  {" "}
                  Groundbreaking low-pass filter enables low-end rolloff at ~3
                  dB at 90 Hz (~10 dB at 250 Hz)—the previously unattainable
                  deep low-end performance of a true subwoofer—without
                  sacrificing clarity or detail Ten precision-welded, stainless
                  steel plates form 4 inches of high acoustic mass pathway,
                  naturally enabling low frequency rolloff to begin at about 75
                  Hz without distortion or artifacts
                </li>
              </ul>
            </li>
            <li>
              <h6>UNMATCHED PERSONALIZATION AND COMFORT</h6>
              <ul>
                <li>
                  {" "}
                  Customizable Frequency Response Adjustable sound signatures
                  via changeable nozzle inserts and removable metal nozzle
                  (balanced, warm, and bright options included)
                </li>{" "}
                <li>
                  {" "}
                  Ergonomic, Flexible Design Lightweight, low-profile shape with
                  optimized nozzle angle designed to rest comfortably in the ear
                </li>{" "}
                <li>
                  {" "}
                  Over-the-ear configuration keeps cables out of the way
                </li>{" "}
                <li>
                  {" "}
                  Detachable Cable with Wireform Fit Durable Kevlar™ reinforced
                  cables with formable wire ensure secure placement MMCX
                  connector with lock-snap mechanism allows easy replacement and
                  provides 360-degree rotation to optimize fit Two included
                  cable lengths (46" and 64") for flexible wearing options
                </li>
              </ul>
            </li>
            <li>
              <h6>DURABLE, SOPHISTICATED DESIGN</h6>
              <ul>
                <li>
                  Comfortable Sound Isolating sleeves block up to 37 dB of
                  ambient noise, whether onstage or on-the-go{" "}
                </li>{" "}
                <li>
                  Removable cable and nozzle components ensure a long product
                  life by providing easy and efficient cleaning and part
                  replacement Rugged, ergonomic housing with sweat-resistant
                  construction withstands the extremes of onstage or everyday
                  wear{" "}
                </li>{" "}
                <li>
                  Crystal-clear housing allows a view of the
                  precision-engineered, laser-etched components of the interior
                  (SE846-CL only)
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Product;
