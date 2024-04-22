import classNames from 'classnames/bind';
import styles from './CardPartner.module.scss';
import Image from '~/app/components/common/Image';

const cx = classNames.bind(styles);

function CardPartner({ image }) {
    return (
        <div className={cx('slide_image')}>
            <div className={cx('image-client')}>
                <Image className={cx('image')} src={image} alt="logo-partner" />
            </div>
        </div>
    );
}

export default CardPartner;
