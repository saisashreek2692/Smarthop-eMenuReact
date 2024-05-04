/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="Enter First Name" />
          <input type="text" placeholder="Enter Last Name" />
        </div>
        <div className="multi-fields">
          <input type="email" placeholder="Enter Email Address" />
          <input type="number" placeholder="Enter Phone Number" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Enter Street" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Enter City" />
          <input type="text" placeholder="Enter State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Enter Zipcode" />
          <input type="text" placeholder="Enter Country" />
        </div>
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>$ {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>$ {getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>$ {getTotalCartAmount() === 0 ? 0 :getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
