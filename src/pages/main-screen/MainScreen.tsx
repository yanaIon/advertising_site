import React from 'react';
import Sidebar from "../../components/sidebar/sidebar";
import ProductList from "../../components/product-list/product-list";
import SortingProduct from "../../components/sorting/sorting-product/sorting-product";
import SortingFavourites from "../../components/sorting/sorting-favourites/sorting-favourites";
import NoFavouritesProduct from "../../components/no-favourites-product/no-favourites-product";
import {Product} from "../../types/product";


type MainScreenProps = {
    products: Product[]
}

function MainScreen ({products}: MainScreenProps) : JSX.Element {
    return (
            <section className="onlineshop-app">
                <h1 className="visually-hidden">Главная</h1>
                <div className="onlineshop-app__blueline" />
                <div className="onlineshop-app__wrapper">
                    <Sidebar/>
                    <section className="onlineshop-app__results results">
                        <div className="results__head">
                            <h2 className="title results__title">Результаты</h2>
                            <div className="results__sorting sorting">
                                <form className="sorting__form">
                                    <SortingProduct/>
                                    <SortingFavourites/>
                                </form>
                            </div>
                        </div>
                        <NoFavouritesProduct/>
                        <ProductList products={products}/>
                    </section>
                </div>
            </section>
    )
};

export default MainScreen;
