import React from 'react'
import Link from "next/link";
import { Container, Row, Col, Button } from "react-bootstrap";

function Cart(props) {
let count = 0;
if(count === 0){
return (
<Container>
<Row>
<Col>
<h3 className="text-center">SHOPPING CART</h3>
<p className="text-center" style={{color: "orange"}}>YOUR SHOPPING CART IS EMPTY</p>
<p className="text-center">Shop for products and add items to the cart</p>
<Row>
<Col className="d-flex justify-content-center">
<Link href="/homepage">
<Button variant="warning">Continue Shopping</Button>
</Link>
</Col>
</Row>
<p className="text-center">Search for: <span style={{color: "orange"}}>EarPhones | HeadPhones | Lenses</span></p>
</Col>
</Row>
</Container>
)
} else {
return <></>
}
}

export default Cart