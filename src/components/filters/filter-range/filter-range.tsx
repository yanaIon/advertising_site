import React from "react";
//import PriceSlider from '../../price-slider/price-slider';

function FilterRange () : JSX.Element {

    return (
        <div className="filter__range">
            <label htmlFor="range">Цена, ₽</label>
            <input type="text" id="sampleSlider"/>
        </div>
    )
}

export default FilterRange;