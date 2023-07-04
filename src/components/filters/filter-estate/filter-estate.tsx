import React from "react";

function FilterEstate () : JSX.Element {
    return (
        <div className="filter__estate">
            <fieldset className="filter__type filter__type--estate">
                <legend>Тип недвижимости</legend>
                <ul className="filter__checkboxes-list filter__checkboxes-list--estate">
                    <li className="filter__checkboxes-item">
                        <input
                            className="visually-hidden"
                            type="checkbox"
                            name="estate-type"
                            defaultValue="house"
                            id="house"
                        />
                        <label htmlFor="house">Дом</label>
                    </li>
                    <li className="filter__checkboxes-item">
                        <input
                            className="visually-hidden"
                            type="checkbox"
                            name="estate-type"
                            defaultValue="flat"
                            id="flat"
                        />
                        <label htmlFor="flat">Квартира</label>
                    </li>
                    <li className="filter__checkboxes-item">
                        <input
                            className="visually-hidden"
                            type="checkbox"
                            name="estate-type"
                            defaultValue="apartments"
                            id="apartments"
                        />
                        <label htmlFor="apartments">Апартаменты</label>
                    </li>
                </ul>
            </fieldset>
            <div className="filter__min-square">
                <label htmlFor="square">
                    Минимальная площать, м<sup>2</sup>
                </label>
                <input
                    type="number"
                    id="square"
                    name="min-square"
                    min={1}
                    defaultValue=""
                    placeholder='0'
                />
            </div>
            <fieldset className="filter__radiobuttons filter__radiobuttons--ram">
                <legend>Количество комнат</legend>
                <ul className="filter__ram-list">
                    <li className="filter__radiobuttons-item">
                        <input
                            className="visually-hidden"
                            type="radio"
                            name="rooms"
                            defaultValue="any"
                            id="any_room"
                        />
                        <label htmlFor="any_room">Любое</label>
                    </li>
                    <li className="filter__radiobuttons-item">
                        <input
                            className="visually-hidden"
                            type="radio"
                            name="rooms"
                            defaultValue="one"
                            id="one"
                        />
                        <label htmlFor="one">1</label>
                    </li>
                    <li className="filter__radiobuttons-item">
                        <input
                            className="visually-hidden"
                            type="radio"
                            name="rooms"
                            defaultValue="two"
                            id="two"
                        />
                        <label htmlFor="two">2</label>
                    </li>
                    <li className="filter__radiobuttons-item">
                        <input
                            className="visually-hidden"
                            type="radio"
                            name="rooms"
                            defaultValue="three"
                            id="three"
                        />
                        <label htmlFor="three">3</label>
                    </li>
                    <li className="filter__radiobuttons-item">
                        <input
                            className="visually-hidden"
                            type="radio"
                            name="rooms"
                            defaultValue="four"
                            id="four"
                        />
                        <label htmlFor="four">4</label>
                    </li>
                    <li className="filter__radiobuttons-item">
                        <input
                            className="visually-hidden"
                            type="radio"
                            name="rooms"
                            defaultValue="fivemore"
                            id="fivemore"
                        />
                        <label htmlFor="fivemore">5+</label>
                    </li>
                </ul>
            </fieldset>
        </div>
    )
}

export default FilterEstate;