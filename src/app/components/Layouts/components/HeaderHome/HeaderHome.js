import classNames from 'classnames/bind';
import styles from './HeaderHome.module.scss';
import Image from '~/app/components/common/Image';
import Radio from '~/app/components/common/Radio/Radio';
import Button from '~/app/components/common/Button';

const cx = classNames.bind(styles);

function HeaderHome() {
    return (
        <div className={cx('container-content-search')}>
            <div className={cx('container-content-search_input')}>
                <input type="text" placeholder="Tìm kiếm doanh nghiệp....." />
            </div>
            <div className={cx('container-content-search_country')}>
                <div className={cx('radio-group')}>
                    <label className={cx('radio-wrapper')}>
                        <Radio />
                        <span>
                            <Image
                                className={cx('images_logo')}
                                src="https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo2.fad93aaf.png&w=640&q=75"
                                alt="logo"
                            />
                        </span>
                    </label>
                </div>

                <div className={cx('radio-group')}>
                    <label className={cx('radio-wrapper')}>
                        <Radio />
                        <span>
                            <Image
                                className={cx('images_logo')}
                                src="https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo4.3437b7bc.png&w=640&q=75"
                                alt="logo"
                            />
                        </span>
                    </label>
                </div>
            </div>

            <Button primary medium>
                Tìm kiếm
            </Button>
        </div>
    );
}

export default HeaderHome;
