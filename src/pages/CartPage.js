import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { CartContent, PageHero } from "../components";
import SEO from "../components/SEO";

const Cart = () => {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <Wrapper className="page-100">
        <SEO title="Кошик" />
        <div className="empty">
          <h2>Ваш кошик пустий</h2>
          <Link to="/products" className="btn">
            наповнити
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <main>
      <SEO title="Кошик" />
      <PageHero title="кошик" />
      <Wrapper className="page">
        <CartContent />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;

export default Cart;
