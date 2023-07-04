import React from "react";
import Category from "../category/category";
import FilterRange from "../filters/filter-range/filter-range";
import FilterEstate from "../filters/filter-estate/filter-estate";
import FilterCamera from "../filters/filter-camera/filter-camera";
import FilterLaptop from "../filters/filter-laptop/filter-laptop";
import FilterCar from "../filters/filter-car/filter-car";
import FilterButton from "../filters/filter-button/filter-button";

function Sidebar () : JSX.Element {
    return (
        <section className="onlineshop-app__filter filter">
            <h2 className="title filter__title">Фильтр</h2>
            <form className="filter__form" action="#" method="post">
                <Category/>
                <FilterRange/>
                <FilterEstate/>
                <FilterCamera/>
                <FilterLaptop/>
                <FilterCar/>
                <FilterButton/>
            </form>
        </section>
    )
};

export default Sidebar;