import React from "react";

function SortingProduct () : JSX.Element {
    return (
        <fieldset className="sorting__order">
            <legend>Показать сначала:</legend>
            <ul className="sorting__order-list">
                <li className="sorting__order-tab">
                    <input
                        className="visually-hidden"
                        type="radio"
                        name="sorting-order"
                        defaultValue="popular"
                        id="sort-popular"
                        defaultChecked
                    />
                    <label htmlFor="sort-popular">Популярные</label>
                </li>
                <li className="sorting__order-tab">
                    <input
                        className="visually-hidden"
                        type="radio"
                        name="sorting-order"
                        defaultValue="cheap"
                        id="sort-cheap"
                    />
                    <label htmlFor="sort-cheap">Дешёвые</label>
                </li>
                <li className="sorting__order-tab">
                    <input
                        className="visually-hidden"
                        type="radio"
                        name="sorting-order"
                        defaultValue="cheap"
                        id="sort-new"
                    />
                    <label htmlFor="sort-new">Новые</label>
                </li>
            </ul>
        </fieldset>
    )
}

export default SortingProduct;