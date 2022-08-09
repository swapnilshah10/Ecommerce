import React from 'react'
import Link from "next/link";

function cart() {
  let c = 0
  return (
    <div >
     {
      ()=>{
        if(c ==0) {
          return(
          <><div style={{display: 'flex', alignItems: 'center' , justifyContent: 'center'}}>SHOPPING CART</div>
          <div style={{display: 'flex', alignItems: 'center' , justifyContent: 'center' ,color:"orange"}}>YOUR SHOPPING CART IS EMPTY</div>
          <div style={{display: 'flex', alignItems: 'center' , justifyContent: 'center'}}>Shop for products and add items to the cart</div>
          <div style={{display: 'flex', alignItems: 'center' , justifyContent: 'center'}}>
          <Link href = "/homepage" >
            <button style={{display: 'flex', justifyContent: 'center', backgroundColor:"orange"}}>Continue Shopping</button>
            </Link>
            </div>
            <div style={{display: 'flex', alignItems: 'center' , justifyContent: 'center'}}>Search for:
            <span style={{color:"orange"}}>Eyeglasses  | SunglassesContact | Lenses</span></div> </>)
        }
      }
     }
      
 
    </div>
  )
}

export default cart