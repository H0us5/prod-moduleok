import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title ? `${title} | Module OK` : 'Module OK. Будівельні вагончики, дачі, мафи Харків'}</title>
      <meta 
        name="description" 
        content={description || "Продаж та виготовлення битовок, будівельних вагончиків і дач у Харкові. Пропонуємо готові рішення та виготовлення на замовлення за вашими побажаннями. Надійність, доступні ціни та швидка доставка."} 
      />
      <meta property="og:title" content={title ? `${title} | Module OK` : 'Module OK. Будівельні вагончики, дачі, мафи Харків'} />
      <meta property="og:description" content={description || "Продаж та виготовлення битовок, будівельних вагончиків і дач у Харкові."} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default SEO;
