import React from "react";
import { Link } from "react-router-dom";

import { v4 as uuid } from "uuid";

import "./Checkout.css";

function Checkout() {
  const unique_id = uuid();
  //   const orderid = [
  //     {
  //       id: 1,
  //       order: "1005A2312",
  //     },
  //     {
  //       id: 2,
  //       order: "1004C2190",
  //     },
  //     {
  //       id: 3,
  //       order: "1007E4567",
  //     },
  //     {
  //       id: 4,
  //       order: "1009B5678",
  //     },
  //   ];

  //   const [index, setIndex] = useState(0);

  //   const checkNumber = (number) => {
  //     if (number > orderid.length - 1) {
  //       return 0;
  //     }
  //     if (number < 0) {
  //       return orderid.length - 1;
  //     }

  //     return number;
  //   };

  //   const randomOrder = () => {
  //     let randomNumber = Math.floor(Math.random() * orderid.length);
  //     if (randomNumber === index) {
  //       randomNumber = index + 1;
  //     }
  //     setIndex(checkNumber(randomNumber));
  //   };

  return (
    <div className="checkout">
      <div className="checkout_header">
        <h2>Your order has been placed!!!</h2>
      </div>
      <div className="checkout_order">
        <span>Order Id : </span>
        {unique_id}
      </div>
      <Link to="/Landing">
        <button className="checkout_goBackHome">Home</button>
      </Link>
    </div>
  );
}

export default Checkout;
