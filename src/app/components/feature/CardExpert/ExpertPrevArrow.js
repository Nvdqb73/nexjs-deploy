import classNames from 'classnames/bind';
import { IconChevronLeft } from '@tabler/icons-react';
import styles from './CardExpert.module.scss';

const cx = classNames.bind(styles);

function ExpertPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={cx('wrapperPreArrow', {
                className,
            })}
            style={{ ...style }}
            onClick={onClick}
        >
            <IconChevronLeft size={80} color="#007aff" />
        </div>
    );
}

export default ExpertPrevArrow;
