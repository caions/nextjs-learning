import withRoot from './onepirate/modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import ProductCategories from './onepirate/modules/views/ProductCategories';
import ProductSmokingHero from './onepirate/modules/views/ProductSmokingHero';
import AppFooter from './onepirate/modules/views/AppFooter';
import ProductHero from './onepirate/modules/views/ProductHero';
import ProductValues from './onepirate/modules/views/ProductValues';
import ProductHowItWorks from './onepirate/modules/views/ProductHowItWorks';
import ProductCTA from './onepirate/modules/views/ProductCTA';
import AppAppBar from './onepirate/modules/views/AppAppBar';
import {Estilo} from "./styled"

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <Estilo>
      <h1>Ola bom bom dia</h1>
      </Estilo>
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
