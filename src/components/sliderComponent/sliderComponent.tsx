import React, {useState} from 'react';
import Slider from 'react-slick';
import './sliderComponent.css';

type Photo  = {
    id: number;
    url: string;
}

type SliderComponentProps = {
    photos: Photo[];
}

function SliderComponent ({photos}: SliderComponentProps) : JSX.Element {

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % photos.length);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + photos.length) % photos.length);
    };


    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    // };

    return (
    //     <div className="slider">
    //         <Slider {...settings}>
    //         {photos.map((photo) => (
    //             <img
    //                 key={photo.id}
    //                 src={photo.url}
    //                 width={318}
    //                 height={220}
    //                 alt={`Slide ${photo.id}`}
    //             />
    //         ))}
    //         </Slider>
    //             <div className={`product__image-more-photo ${photos.length <= 5 ? 'hidden' : ''}`}>+ {photos.length - 5} фото</div>
    //     </div>
        <div className="slider-container">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {photos.map((photo, index) => (
                    <img
                                    key={photo.id}
                                    src={photo.url}
                                    width={318}
                                    height={220}
                                    alt={`Slide ${photo.id}`}
                                />
                ))}
                <div className={`product__image-more-photo ${photos.length <= 5 ? 'hidden' : ''}`}>+ {photos.length - 5} фото</div>
            </div>
            <button className="prev-btn" onClick={handlePrevSlide}>
                &lt;
            </button>
            <button className="next-btn" onClick={handleNextSlide}>
                &gt;
            </button>
        </div>
      );
};

export default SliderComponent;