'use client';
import Slider from 'react-slick';
import classNames from 'classnames/bind';
import styles from './SlideShow.module.scss';
import CardExpert from '~/app/components/feature/CardExpert';
import { ExpertNextArrow, ExpertPrevArrow } from '~/app/components/feature/CardExpert';

const cx = classNames.bind(styles);

function SlideShow() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <ExpertNextArrow />,
        prevArrow: <ExpertPrevArrow />,
    };

    const infoExperts = [
        {
            id: 1,
            image: 'https://vjp-connect-upload.s3.ap-southeast-1.amazonaws.com/thangvo.png',
            heading: 'Tư vấn kinh doanh và CNTT',
            expert: 'Võ Đức Thắng',
        },
        {
            id: 2,
            image: 'https://vjp-connect-upload.s3.ap-southeast-1.amazonaws.com/itcomtor.png',
            heading: 'Tư vấn Web',
            expert: 'Inoue Tadasu',
        },
        {
            id: 3,
            image: 'https://vjp-connect-upload.s3.ap-southeast-1.amazonaws.com/expert-team-01.jpg',
            heading: 'Tư vấn kinh doanh, bằng sáng chế',
            expert: 'Fushimi Kiyoshi',
        },
        {
            id: 4,
            image: 'https://vjp-connect-upload.s3.ap-southeast-1.amazonaws.com/expert-team-02.jpg',
            heading: 'Tư vấn kinh doanh',
            expert: 'Yokoyama Kazuhisa',
        },
        {
            id: 5,
            image: 'https://vjp-connect-upload.s3.ap-southeast-1.amazonaws.com/mochi.jpg',
            heading: 'Tư vấn xây dựng WEB',
            expert: 'Mochizuki Ginko',
        },
    ];

    return (
        <div className={cx('slider-container')}>
            <Slider {...settings}>
                {infoExperts.map((item) => (
                    <div key={item.id}>
                        <CardExpert data={item} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default SlideShow;
