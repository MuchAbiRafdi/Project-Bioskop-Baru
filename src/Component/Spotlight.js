// Spotlight.js
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Css/Spotlight.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Spotlight = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500
    };

    const news = [
        {
            title: 'Sudah Tayang, Jangan Lewatkan ‘Pasutri Gaje’ di Bioskop!',
            image: 'https://asset.tix.id/wp-content/uploads/2024/02/7fb16524-43ba-4c14-a50e-c3862e8111ab.jpeg',
        },
        {
            title: 'TIX ID Box Office (29 Januari – 4 Februari 2024)',
            image: 'https://asset.tix.id/wp-content/uploads/2024/02/4882571c-95d0-45cc-a030-9ca99f211012.jpeg',
        },
        {
            title: '‘No Way Up’ Berikan Kengerian Teror Hiu di Dalam Laut Setelah Sebuah Pesawat Kecelakaan',
            image: 'https://asset.tix.id/wp-content/uploads/2024/02/f37ce935-9199-4751-976a-7f555e20bfb1.jpeg',
        },
        {
            title: 'Sudah Tayang, Film Argylle Miliki Dunia Yang Sama Dengan Kingsman?',
            image: 'https://asset.tix.id/wp-content/uploads/2024/01/a6e9aaa5-a2f9-431e-b523-769fba4c716a.jpeg',
        },
        {
            title: 'TIX ID Box Office (22-28 Januari 2024)',
            image: 'https://asset.tix.id/wp-content/uploads/2024/01/50908e23-edf0-4c7c-aed6-3d7e81abe2b1.jpeg',
        },
        {
            title: 'TIX ID Box Office Minggu Ini (15-21 Januari 2024)',
            image: 'https://asset.tix.id/wp-content/uploads/2024/01/423f833d-b5eb-414f-b328-ead84ed84112.jpeg',
        },
        {
            title: 'TIX ID Box Office Minggu Ini (08-14 Januari 2024)',
            image: 'https://asset.tix.id/wp-content/uploads/2024/01/1054ae4f-4784-4b35-993a-f75ff156dbf6.jpeg',
        },
        {
            title: 'TIX ID Box Office Minggu Ini (1-7 Januari 2024)',
            image: 'https://asset.tix.id/wp-content/uploads/2024/01/54fa3a71-1af0-4d0b-a77d-73199d537117.jpeg',
        },
        {
            title: 'Ancika: Dia Yang Bersamaku 1995, Film Yang Wajib Kamu Nantikan di Awal Tahun 2024',
            image: 'https://asset.tix.id/wp-content/uploads/2024/01/48b6c79e-17b8-4d13-813d-f3c8fa5b47f8.jpeg',
        },
        // Tambahkan berita lainnya sesuai kebutuhan
    ];

    const goToNext = () => {
        sliderRef.current.slickNext();
    };

    const goToPrev = () => {
        sliderRef.current.slickPrev();
    };

    

    return (
        <div className="spotlight-container">
            <Slider ref={sliderRef} {...settings}>
                {news.map((item, index) => (
                    <div key={index}>
                        <img src={item.image} alt={item.title} />
                        <div className="spotlight-caption">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
            <div className="arrow-buttons">
                <a className="prev-btn" onClick={goToPrev}><FaArrowLeft /></a>
                <a className="next-btn" onClick={goToNext}><FaArrowRight /></a>
            </div>
        </div>
    );
};

export default Spotlight;
