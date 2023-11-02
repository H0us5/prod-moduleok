import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ProductImages = ({ images = [{ url: "" }] }) => {
  const [main, setMain] = useState(images[0]);

  useEffect(() => {
    setMain(images[0]);
  }, [images]);

  return (
    <Wrapper>
      {main && (
        <img src={main.url} alt="main product" className="main delayed-image" />
      )}
      <div className="gallery">
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              alt={image.filename}
              key={index}
              onClick={() => setMain(images[index])}
              className={`${
                image.url === main.url ? "active" : null
              } delayed-image-sm`}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .delayed-image {
    opacity: 0;
    animation: fadeIn 1s forwards 0.75s;
  }

  .delayed-image-sm {
    opacity: 0;
    animation: fadeIn 1s forwards 0.5s;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;

export default ProductImages;
