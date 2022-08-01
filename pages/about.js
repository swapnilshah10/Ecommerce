import React from 'react'
import { useEffect } from "react";

function about() {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
      }, []);

  return (
    <div style = {{ alignItems: "center"}}>
        <h1 style = {{ display: "flex" , justifyContent: "center" }}>About us</h1>
        <p style = {{ alignItems: "center" , paddingLeft : "80px" , paddingRight : "80px"  , paddingTop : "20px" }}>  E-commerce (electronic commerce) is the activity of electronically buying or selling of products on online services or over the Internet. E-commerce draws on technologies such as mobile commerce, electronic funds transfer, supply chain management, Internet marketing, online transaction processing, electronic data interchange (EDI), inventory management systems, and automated data collection systems. E-commerce is in turn driven by the technological advances of the semiconductor industry, and is the largest sector of the electronics industry.
        The term was coined and first employed by Dr. Robert Jacobson, Principal Consultant to the California State Assembly's Utilities & Commerce Committee, in the title and text of California's Electronic Commerce Act, carried by the late Committee Chairwoman Gwen Moore (D-L.A.) and enacted in 1984.
        The term was coined and first employed by Dr. Robert Jacobson, Principal Consultant to the California State Assembly's Utilities & Commerce Committee, in the title and text of California's Electronic Commerce Act, carried by the late Committee Chairwoman Gwen Moore (D-L.A.) and enacted in 1984.<br></br>
        E-commerce typically uses the web for at least a part of a transaction's life cycle although it may also use other technologies such as e-mail. Typical e-commerce transactions include the purchase of products (such as books from Amazon) or services (such as music downloads in the form of digital distribution such as iTunes Store).[1] There are three areas of e-commerce: online retailing, electronic markets, and online auctions. E-commerce is supported by electronic business.[2] The existence value of e-commerce is to allow consumers to shop online and pay online through the Internet, saving the time and space of customers and enterprises, greatly improving transaction efficiency, especially for busy office workers, but also saving a lot of valuable time.
        </p>
    </div>
  )
}

export default about