import classNames from 'classnames/bind';
import { IconChevronRight } from '@tabler/icons-react';
import styles from './CardExpert.module.scss';
const cx = classNames.bind(styles);
function ExpertNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={cx('wrapperNextArrow', {
                className,
            })}
            style={{ ...style }}
            onClick={onClick}
        >
            <IconChevronRight size={80} color="#007aff" />
        </div>
    );
}

export default ExpertNextArrow;
