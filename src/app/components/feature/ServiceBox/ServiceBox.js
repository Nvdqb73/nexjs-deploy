import classNames from 'classnames/bind';
import styles from './ServiceBox.module.scss';

const cx = classNames.bind(styles);

function ServiceBox(props) {
    const { Icon, title } = props.data;
    return (
        <div className={cx('col')}>
            <a href="/">
                <div className={cx('service__box')}>
                    <div className={cx('service__box--icon')}>
                        <span>
                            <Icon className={cx('icon-plane-departure')} />
                        </span>
                    </div>
                    <div className={cx('service__content')}>
                        <h3>{title}</h3>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default ServiceBox;
