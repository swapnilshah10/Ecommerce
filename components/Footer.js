import React from "react";

function Footer() {
  return (
    <>
    <div className="footer-container" style={{ paddingTop : "100px"}}>
      <div className="container my-5" style={{ backgroundColor: "#f2f2f2" }}>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <h5 className="font-weight-bold text-center my-2">ABOUT</h5>
            <ul className="list-unstyled text-center">
              <li>
                <a href="/" className="text-decoration-none">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/" className="text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="/" className="text-decoration-none">
                  Careers
                </a>
              </li>
              <li>
                <a href="/" className="text-decoration-none">
                  Flipkart Stories
                </a>
              </li>
              <li>
                <a href="/" className="text-decoration-none">
                  Press
                </a>
              </li>
              <li>
                <a href="/" className="text-decoration-none">
                  Flipkart Wholesale
                </a>
              </li>
              <li>
                <a href="/" className="text-decoration-none">
                  Corporate Information
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h5 className="font-weight-bold text-center my-2">HELP</h5>
            <ul className="list-unstyled text-center">
              <li>
                <a href="/" className="text-decoration-none">
                  Payments
                </a>
              </li>
              <li>
                <a href="/" className="text-decoration-none">
                  Shipping
                </a>
              </li>
              <li>
                <a href="/" className="text-decoration-none">
                  Cancellation & Returns
                </a>
              </li>
              <li>
                <a href="/" className="text-decoration-none">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/" className="text-decoration-none">
                  Report Infringement
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h5 className="font-weight-bold text-center my-2">POLICY</h5>
            <ul className="list-unstyled text-center">
              <li>
                <a href="/" className="text-decoration-none">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="/" className="text-decoration-none">
                  Security
                </a>
              </li>
              <li>
                <a href="/" className="text-decoration-none">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/" className="text-decoration-none">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/pages/TnC" className="text-decoration-none">
                  Seller Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="https://seller.flipkart.com/flipkart-first?otracker=undefined_footer_navlinks"
                  className="text-decoration-none"
                >
                  Flipkart First Terms
                </a>
              </li>
              <li>
                <a
                  href="https://www.flipkart.com/pages/security#cookie-policy"
                  className="text-decoration-none"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h5 className="font-weight-bold text-center my-2">FOLLOW US</h5>
            <ul className="list-unstyled text-center">
              <li>
                <a
                  href="https://www.facebook.com/flipkart"
                  target="_blank"
                  className="text-decoration-none"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/flipkart"
                  target="_blank"
                  className="text-decoration-none"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/user/flipkart"
                  target="_blank"
                  className="text-decoration-none"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/flipkart/"
                  target="_blank"
                  className="text-decoration-none"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Footer;
