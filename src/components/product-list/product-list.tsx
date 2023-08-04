import React from "react";
import ProductItem from '../product-item/product-item';
import {Product} from "../../types/product";


type ProductListProps = {
    products: Product[]
}

function ProductList ({products}: ProductListProps) : JSX.Element {
    return (
        <ul className="results__list">
            {products.map((product) => <ProductItem product={product} key = {product.id} />)}
        </ul>
    )
}

export default ProductList;