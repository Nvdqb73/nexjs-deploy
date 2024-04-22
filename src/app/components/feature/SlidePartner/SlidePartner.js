'use client';
import classNames from 'classnames/bind';
import styles from './SlidePartner.module.scss';
import CardPartner from '../CardPartner/CardPartner';
import Slider from 'react-slick';

const cx = classNames.bind(styles);

function SlidePartner() {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 6,
        autoplay: true,
        speed: 20000,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnHover: true,
        className: cx('wrapper'),
    };

    return (
        <div className={cx('slider-container')}>
            <Slider {...settings}>
                <CardPartner image="https://www.vjp-connect.com/images/logo-company-1.png" />
                <CardPartner image="https://www.vjp-connect.com/images/logo-company-2.png" />
                <CardPartner image="https://www.vjp-connect.com/images/logo-company-3.png" />
                <CardPartner image="https://www.vjp-connect.com/images/logo-company-4.png" />
                <CardPartner image="https://www.vjp-connect.com/images/logo-company-5.png" />
                <CardPartner image="https://www.vjp-connect.com/images/logo-company-6.png" />
            </Slider>
        </div>
    );
}

export default SlidePartner;
