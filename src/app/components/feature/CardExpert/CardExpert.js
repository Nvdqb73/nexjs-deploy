import classNames from 'classnames/bind';
import { IconCaretLeftFilled, IconCaretRightFilled } from '@tabler/icons-react';
import styles from './CardExpert.module.scss';
import Image from '~/app/components/common/Image';
import Button from '~/app/components/common/Button';

const cx = classNames.bind(styles);

function CardExpert(props) {
    const { data } = props;

    return (
        <div className={cx('card')}>
            <div className={cx('card-content')}>
                <div className={cx('content-user')}>
                    <div className={cx('content-user-image')}>
                        <Image className={cx('user-image-item')} src={data.image} alt="user-image" />
                    </div>
                    <div className={cx('content-name')}>
                        <h3>{data.heading}</h3>
                        <span
                            className={cx('text-black', {
                                'expert--name': true,
                            })}
                        >
                            ({data.expert})
                        </span>
                    </div>
                    <div className={cx('content-expert-eye')}>
                        <div className={cx('content-expert-show')}>
                            <IconCaretLeftFilled className={cx('icon-expert')} />
                            <Button outline smallMedium>
                                Xem hồ sơ
                            </Button>
                            <IconCaretRightFilled className={cx('icon-expert')} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardExpert;
