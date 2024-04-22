import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import Translate from '~/app/components/feature/Translate';
import Navbar from '~/app/components/feature/Navbar/Navbar';
import Image from '~/app/components/common/Image';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('other')}>
                <div className={cx('translate')}>
                    <div className={cx('translate_left')}></div>
                    <div className={cx('translate_right')}>
                        <Translate
                            language="ja"
                            src="https://www.vjp-connect.com/_next/image?url=%2Fimages%2Flogo4.png&w=128&q=75"
                            alt="ja"
                        />
                        <Translate
                            language="en"
                            src="https://www.vjp-connect.com/_next/image?url=%2Fimages%2Flogo3.png&w=128&q=75"
                            alt="en"
                        />
                        <Translate
                            language="vi"
                            src="https://www.vjp-connect.com/_next/image?url=%2Fimages%2Flogo2.png&w=128&q=75"
                            alt="vi"
                        />
                    </div>
                </div>
                <div className={cx('container')}>
                    <Navbar />
                </div>
            </div>
            <div className={cx('banner')}>
                <Image
                    className={cx('imageBanner')}
                    src="https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogobanner.dcf00dbd.png&w=3840&q=75"
                    alt="banner"
                />
            </div>
        </div>
    );
}

export default Header;
