import classNames from 'classnames/bind';
import Image from '~/app/components/common/Image';
import Button from '~/app/components/common/Button';
import styles from './ Company.module.scss';

const cx = classNames.bind(styles);

function Company(props) {
    const { log1, log2, log3, nameCty, founding, employee, corporateCapital, address, career, demand } = props.item;
    return (
        <div className={cx('company__wrapper')}>
            <div
                style={{ backgroundImage: `url(https://www.vjp-connect.com/images/background2.jpg)` }}
                className={cx('grid grid-cols-3 gap-4', {
                    company__container: true,
                })}
            >
                <div className={cx('company__left')}>
                    <div className={cx('company__left--image')}>
                        <Image src={log1} alt="logo1" />
                    </div>
                    <div className={cx('company__left--country')}>
                        <Image src={log2} className={cx('country-img_one')} alt="logo2" />
                        <Image src={log3} className={cx('country-img_tow')} alt="logo3" />
                    </div>
                    <div className={cx('company__left--button')}>
                        <Button outline small>
                            Chi tiết
                        </Button>
                    </div>
                </div>

                <div className="col-span-2 text-black flex items-start flex-col justify-between">
                    <h3 className={cx('text-truncate', { 'pt-8': true })}>{nameCty}</h3>
                    <p className={cx('text-truncate-p', { 'mt-4': true })}>Năm Thành Lập: {founding}</p>
                    <p className={cx('text-truncate-p', { 'mt-4': true })}>Thành Viên: {employee}</p>
                    <p className={cx('text-truncate-p', { 'mt-4': true })}>Vốn Doanh Nghiệp: {corporateCapital}</p>
                    <p className={cx('text-truncate-p', { 'mt-4': true })}>Địa Chỉ: {address}</p>
                    <p className={cx('text-truncate-p', { 'mt-4': true })}>Ngành Nghề: {career}</p>
                    <p className={cx('text-truncate-p', { ' pb-8': true }, { 'mt-4': true })}>Nhu Cầu: {demand}</p>
                </div>
            </div>
        </div>
    );
}

export default Company;
