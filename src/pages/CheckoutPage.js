import React from "react";
import styled from "styled-components";
import { PageHero, StripeCheckout } from "../components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cart } = useCartContext();
  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page">
        {cart.length < 1 ? (
          <div className="empty">
            <h2>ваш кошик пустий</h2>
            <Link to="/products" className="btn">
              купити
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`;
export default Checkout;
