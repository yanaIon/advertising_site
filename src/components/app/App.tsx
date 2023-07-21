import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import {HelmetProvider} from 'react-helmet-async'; //добавляет заголовки
import MainScreen from '../../pages/main-screen/MainScreen';
import FullProductItem from "../full-product-item/full-product-item";
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen'
import {Product} from "../../types/product";

type AppProps = {
    products: Product[]
}

function App({products}: AppProps): JSX.Element {

  return (
      <HelmetProvider>
          <BrowserRouter>
              <Routes>
                  <Route
                      path={AppRoute.Main}
                      element={<MainScreen products={products} />}
                  />
                  <Route
                      path="*"
                      element={<NotFoundScreen />}
                  />
              </Routes>
          </BrowserRouter>
      </HelmetProvider>
  )
};

export default App;
