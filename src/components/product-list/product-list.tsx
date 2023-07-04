import React from "react";
import ProductItem from '../product-item/product-item';

function ProductList () : JSX.Element {
    return (
        <ul className="results__list">
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
        </ul>
    )
}

export default ProductList;