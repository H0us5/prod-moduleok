import React from "react";
import styled from "styled-components";
import { ProductList, Sort, PageHero } from "../components";
import SEO from "../components/SEO";

const Products = () => {
  return (
    <main>
      <SEO title="Товари" description="Каталог наших будівельних вагончиків, дач та битовок." />
      <PageHero title="товари" />
      <Wrapper className="page">
        <div className="section-center products">
          {/* <Filters /> */}
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .products {
    /* display: grid;
    gap: 3rem 1.5rem; */
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      /* grid-template-columns: 200px 1fr; */
    }
  }
`;

export default Products;
