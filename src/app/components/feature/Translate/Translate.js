'use client';

import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import classNames from 'classnames/bind';
import styles from './Translate.module.scss';

import Image from '~/app/components/common/Image';
import { useState } from 'react';
const cx = classNames.bind(styles);

function Translate({ language, src, alt }) {
    const router = useRouter();
    const { i18n } = useTranslation();

    const handleClickLanguage = (e) => {
        const newLocale = e.target.value;
        router.push(`/${newLocale}`);
    };

    return (
        <div className={cx('flag_country')}>
            <input type="radio" id={language} name="language" value={language} onChange={handleClickLanguage} />
            <label htmlFor={language} className={cx('content')}>
                <div className={cx('flag-icon')}>
                    <Image className={cx('icon-translate')} src={src} alt={alt} />
                </div>
            </label>
        </div>
    );
}

export default Translate;
