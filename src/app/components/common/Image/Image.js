'use client';
import classNames from 'classnames/bind';
import { useState, forwardRef } from 'react';

import styles from './Image.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    const classes = cx('wrapper', {
        [className]: className,
    });

    return <img className={classes} ref={ref} src={fallback || src} alt={alt} {...props} onError={handleError} />;
});

export default Image;
