'use client';
import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Button from '~/app/components/common/Button';
import styles from './layout.module.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);

function Page() {
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const images = [
        'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2019/11/4/763881/D1.jpg',
        'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2019/11/4/763881/D2.jpg',
        'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2019/11/4/763881/D5.jpg',
        'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2019/11/4/763881/D8.jpg',
    ];
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button primary small onClick={() => setIsOpen(!isOpen)}>
                Open Lightbox
            </Button>

            {isOpen && (
                <Lightbox
                    wrapperClassName={cx('lightBox_css')}
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setIsOpen(!isOpen)}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                />
            )}
        </div>
    );
}

export default Page;
