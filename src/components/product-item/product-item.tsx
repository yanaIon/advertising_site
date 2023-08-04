import {Product} from "../../types/product";
import dayjs from 'dayjs';
import 'dayjs/locale/ru'; // Подключение русской локали для day.js
import SliderComponent from '../sliderComponent/sliderComponent';

type ProductItemProps = {
    product: Product,
}

function getFormattedTime(publishDate: string) {

    dayjs.locale('ru'); // Установка русской локали для day.js

    const publishDateTime = dayjs(Number(publishDate));
    const now = dayjs();

    const diffInHours = now.diff(publishDateTime, 'hour');
    const diffInDays = now.diff(publishDateTime, 'day');
    const diffInYears = now.diff(publishDateTime, 'year');

    if (diffInHours < 24) {
        return `${diffInHours} ${getDeclension(diffInHours, ['час', 'часа', 'часов'])} назад`;
    } else if (diffInDays < 7) {
        return `${diffInDays} ${getDeclension(diffInDays, ['день', 'дня', 'дней'])} назад`;
    } else if (diffInYears === 0) {
        return `${publishDateTime.format('D MMMM')}`;
    } else {
        return `${publishDateTime.format('D MMMM YYYY')}`;
    }
}

function getDeclension(number: number, titles: string[]) {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[
        number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]
        ];
}

function ProductItem({product}: ProductItemProps): JSX.Element {
    return (
        <li className="results__item product">
            <button
                className="product__favourite fav-add"
                type="button"
                aria-label="Добавить в избранное"
            >
                <svg
                    width={22}
                    height={20}
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3 7C3 13 10 16.5 11 17C12 16.5 19 13 19 7C19 4.79086 17.2091 3 15 3C12 3 11 5 11 5C11 5 10 3 7 3C4.79086 3 3 4.79086 3 7Z"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            <div className="product__image">
              <SliderComponent photos={product.photos.map((url, index) => ({ id: index + 1, url }))} />
            </div>
            {/*<div className="product__image">*/}
            {/*    <div*/}
            {/*        className={`product__image-more-photo ${product.photos.length <= 5 ? 'hidden' : ''}`}>+ {product.photos.length - 5} фото*/}
            {/*    </div>*/}
            {/*    {product.photos.map((photo) => (*/}
            {/*        <img*/}
            {/*            key={photo}*/}
            {/*            src={photo}*/}
            {/*            srcSet={photo}*/}
            {/*            width={318}*/}
            {/*            height={220}*/}
            {/*            alt={photo}*/}
            {/*        />))}*/}
            {/*    <div className="product__image-navigation">*/}
            {/*        {product.photos.map((photo, i) => (*/}
            {/*            <span key={i} className="product__navigation-item product__navigation-item--active"/>*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="product__content">
                <h3 className="product__title">
                    <a href="/">{product.name}</a>
                </h3>
                <div className="product__price">{product.price.toLocaleString('ru-RU')} ₽</div>
                <div className="product__address">
                    {product.address.city}, {product.address.street}
                </div>
                <div className="product__date">{getFormattedTime(product['publish-date'])}</div>
            </div>
        </li>
    );
};

export default ProductItem;