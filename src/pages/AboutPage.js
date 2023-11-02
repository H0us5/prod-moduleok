import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/about.jpg";

const About = () => {
  return (
    <main>
      <PageHero title="про нас" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>Про нас</h2>
            <div className="underline"></div>
          </div>
          <p>
            Ми почали свій шлях у місті Харків більше шести років тому. Протягом
            цього часу ми зарекомендували себе надійними партнерами для
            будівельних компаній, приватних осіб та організацій, які цінують
            якість та пунктуальність у наданні послуг. Серед них:{" "}
            <ul>
              <li>
                <strong>Група спецпідрозділів охорони "Барс"</strong>
              </li>
              <li>
                <strong>Декоративні рослини "Green Optima"</strong>
              </li>
              <li>
                <strong>Ресторани швидкого харчування "KFC"</strong>
              </li>
              <li>
                <strong>Будівельна компанія "Альтаїр"</strong>
              </li>
              <li>
                <strong>Виробник харчових продуктів "Апрель"</strong>
              </li>
              <li>
                <strong>Виробник автомобільного мастила "Хадо"</strong>
              </li>
            </ul>
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default About;
