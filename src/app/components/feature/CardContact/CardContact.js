import classNames from 'classnames/bind';
import styles from './CardContact.module.scss';
import Button from '~/app/components/common/Button';
const cx = classNames.bind(styles);

function CardContact({ title, content, nameBtn, marginCss = false }) {
    return (
        <div className={cx('card')}>
            <div className={cx('ant-card')}>
                <div className={cx('ant-card-body')}>
                    <div
                        className={cx('content', {
                            marginCss,
                        })}
                    >
                        <p>
                            {title}
                            <br />
                            {content}
                        </p>
                        <br />
                    </div>
                    <a href="/">
                        <Button primary medium>
                            {nameBtn}
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CardContact;
