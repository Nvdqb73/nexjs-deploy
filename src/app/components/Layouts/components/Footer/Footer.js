import classNames from 'classnames/bind';
import { IconBrandFacebook, IconBrandGoogle, IconMapPinFilled, IconPhoneFilled } from '@tabler/icons-react';
import styles from './Footer.module.scss';
import Image from '~/app/components/common/Image';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className="grid grid-cols-12 gap-4" style={{ marginLeft: '-12px', marginRight: '-12px' }}>
                    <div className="col-span-4" style={{ paddingLeft: '12px', paddingRight: '12px' }}>
                        <Image
                            className={cx('footer-images')}
                            src="https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogovjpcfooter.fcfeb984.png&w=640&q=75"
                            alt="logo"
                        />
                        <p className={cx('footer-title')}>
                            VJP Connect Platform (VJP-CONNECT.COM) là nền tảng chuyên hỗ trợ quảng bá doanh nghiệp, tìm
                            đối tác, kết nối chuyên gia Việt Nam và Nhật Bản trong nhiều lĩnh vực. Nền tảng được vận
                            hành bởi công ty Viet Japan Partner Cooperation - thành viên của hệ sinh thái hỗ trợ doanh
                            nghiệp Nhật Bản của Viet Japan Partner Group gồm các công ty hoạt động trong nhiều lĩnh lực:
                            Xúc tiến thương mại, Công nghệ, Phát triển nguồn lực Công nghệ, Tuyển dụng, Thiết kế,
                            Marketing, In ấn.
                        </p>
                        <Image
                            className={cx('footer-images')}
                            src="https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogovjpgroup.20565107.png&w=828&q=75"
                            alt="logo2"
                        />
                        <ul className={cx('social-list')}>
                            <li>
                                <a href="/">
                                    <IconBrandFacebook fontSize={10} />
                                </a>
                            </li>

                            <li>
                                <a href="/">
                                    <IconBrandGoogle fontSize={10} />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-3" style={{ paddingLeft: '12px', paddingRight: '12px', color: '#fff' }}>
                        <h5 className={cx('footer-list-heading')}>Menu</h5>
                        <ul className={cx('footer-list-content')}>
                            <li>
                                <a href="/">Trang Chủ</a>
                            </li>
                            <li>
                                <a href="/">Về Chúng Tôi</a>
                            </li>
                            <li>
                                <a href="/">Tìm kiếm</a>
                            </li>
                            <li>
                                <a href="/">Bảng giá</a>
                            </li>
                            <li>
                                <a href="/">Liên hệ</a>
                            </li>
                            <li>
                                <a href="/">Tìm chuyên gia</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-5" style={{ paddingLeft: '12px', paddingRight: '12px', color: '#fff' }}>
                        <h5 className={cx('footer-list-heading')}>Thông Tin Liên Lạc</h5>
                        <div className={cx('footer-info')}>
                            <div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <span
                                        style={{ display: '-webkit-inline-box', position: 'relative', right: '22px' }}
                                    >
                                        <IconMapPinFilled fontSize={30} width={50} />
                                        VIET JAPAN PARTNER COOPERATION CO.,LTD
                                    </span>
                                    <span>
                                        P1.3-40, The Prince Residence-Novaland, 17-19-21 Đ. Nguyễn Văn Trỗi, Phường 14,
                                        Hồ Chí Minh, Thành phố Hồ Chí Minh
                                    </span>
                                </div>
                            </div>

                            <div className={cx('footer-contact')}>
                                <IconPhoneFilled className={cx('icon-contact')} />
                                (+84) 028 7303 8939
                            </div>
                            <div className={cx('footer-contact')}>
                                <IconPhoneFilled className={cx('icon-contact')} />
                                vjpconnect@vj-partner.com
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('footerTitle')}>
                <span>©2024 Bản quyền thuộc về VIET JAPAN DIGITAL CO.,LTD</span>
            </div>
        </div>
    );
}

export default Footer;
