import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Css/Card.css'

const Card = () => {
    const movies = [
        { id: 1, title: 'Agak Laen', imageUrl: require('../Images/agaklaencard.jpg') },
        { id: 2, title: 'The Beekeeper', imageUrl: require('../Images/beekeepcard.jpg') },
        { id: 3, title: 'Pemukim Setan', imageUrl: require('../Images/pesecard.jpg') },
        { id: 4, title: 'Pasutri Gaje', imageUrl: require('../Images/psgcard.jpg') },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Ubah menjadi 4 agar setiap baris slide berisi 4 card
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            {movies.map((movie) => (
                <div key={movie.id} className="card-container"> {/* Tambahkan kelas 'card-container' */}
                    <img src={movie.imageUrl} alt={movie.title} className="card-image" />
                    <h3>{movie.title}</h3>
                </div>
            ))}
        </Slider>
    );
};

export default Card;
