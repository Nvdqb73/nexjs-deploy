'use client';
import classNames from 'classnames/bind';
import styles from './Radio.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Radio() {
    const [isNavbarOpen, setInNavbarOpen] = useState(false);
    function handleChangeRadio() {
        setInNavbarOpen(!isNavbarOpen);
    }
    return (
        <span className={cx('radio')}>
            <input
                type="radio"
                name="category"
                defaultChecked
                onChange={handleChangeRadio}
                className={cx('radio-input')}
                value="vi"
            />
            <span className={cx('radio-inner')}></span>
        </span>
    );
}

export default Radio;
