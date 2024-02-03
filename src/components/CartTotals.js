import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

const CartTotals = () => {
  const { cart, total_amount, shipping_fee, clearCart } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();

  return (
    <Wrapper>
      <div>
        <article>
          {/* <h5>
            subtotal : <span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            shipping fee : <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr /> */}
          <h4>
            Вартість : <span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
        <form
          className="contact-form"
          action="https://formspree.io/f/xrgwegeb"
          method="POST"
        >
          {cart.map((item) => (
            <input
              key={item.id}
              type="hidden"
              name={`cartItems[${item.id}]`}
              value={JSON.stringify({
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: item.amount,
              })}
            />
          ))}
          <input
            type="tel"
            className="form-input"
            pattern="[\+]\d{3}\s*\d{2}\s*\d{3}\s*\d{2}\s*\d{2}"
            placeholder="введіть ваш номер"
            name="number"
            id="number"
            minlength="13"
            maxlength="17"
            required
          />
          <button type="submit" className="submit-btn">
            замовити
          </button>
        </form>
        <small>Формат: +380 ** *** ** **</small>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-form {
    /* width: 90vw; */
    max-width: 500px;
    min-width: 400px;
    display: grid;
    grid-template-columns: 1fr auto;
    padding-top: 20px;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid var(--clr-grey-8);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 0.75rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`;

export default CartTotals;
