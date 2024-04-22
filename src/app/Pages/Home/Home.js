'use client';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import HeaderHome from '~/app/components/Layouts/components/HeaderHome';
import Company from '~/app/components/feature/Company';
import SlideShow from '~/app/components/feature/SlideShow';
import CardContact from '~/app/components/feature/CardContact';
import Button from '~/app/components/common/Button';
import ServiceBox from '~/app/components/feature/ServiceBox';
import SlidePartner from '~/app/components/feature/SlidePartner';
import {
    IconPlaneDeparture,
    IconToolsKitchen,
    IconTrendingUp,
    IconChartArrowsVertical,
    IconSettingsCog,
    IconSchool,
    IconNetwork,
    IconBuildingFactory2,
} from '@tabler/icons-react';

import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

function Home() {
    const { t } = useTranslation();

    const companyJapans = [
        {
            id: 1,
            log1: 'https://vjp-connect-upload.s3.ap-southeast-1.amazonaws.com/50d945a1c2196cca66dd7706e599f1af',
            log2: 'https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo1.3907871c.png&w=128&q=75',
            log3: 'https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fctynhat.f204ff5d.png&w=640&q=75',
            nameCty: 'NAKAYAMA CO., LTD',
            founding: 1948,
            employee: 57,
            corporateCapital: '2000万円',
            address: '627-0012 657-1 Sugitani, Mineyama-cho, thành phố Kyotango, tỉnh Kyoto, Nhật Bản.',
            career: 'Khác',
            demand: 'Tìm đối tác Việt Nam',
        },
        {
            id: 2,
            log1: 'https://vjp-connect-upload.s3.ap-southeast-1.amazonaws.com/7d22b1a6b99de92f97e18484e73ab8bf',
            log2: 'https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo1.3907871c.png&w=128&q=75',
            log3: 'https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fctynhat.f204ff5d.png&w=640&q=75',
            nameCty: 'FUJINO SHOJI CO.,LTD',
            founding: 2023,
            employee: 90,
            corporateCapital: '25,000千円',
            address: 'Số 11-3, phường Gokojo, thành phố Higashi-omi, tỉnh Shiga, Nhật Bản.',
            career: 'Khác',
            demand: 'Tìm đối tác Việt Nam',
        },
        {
            id: 3,
            log1: 'https://vjp-connect-upload.s3.ap-southeast-1.amazonaws.com/482f1a3663baab32e9df001c462c84ef',
            log2: 'https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo1.3907871c.png&w=128&q=75',
            log3: 'https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fctynhat.f204ff5d.png&w=640&q=75',
            nameCty: 'SUSTAINA MEDICAL CO.,LTD',
            founding: 2020,
            employee: 5,
            corporateCapital: '100万円 (1.000.000 JPY)',
            address: '1065 Hagiwara, Atagawa-cho, Kita-ku, Kobe-shi, Hyogo-ken 651-1615',
            career: 'Khác',
            demand: 'Bán hàng thiết bị y tế',
        },
        {
            id: 4,
            log1: 'https://vjp-connect-upload.s3.ap-southeast-1.amazonaws.com/327f711a7a4fde870f7fbeb654f8eaf8',
            log2: 'https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo1.3907871c.png&w=128&q=75',
            log3: 'https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fctynhat.f204ff5d.png&w=640&q=75',
            nameCty: '久保田会計事務所',
            founding: 2023,
            employee: 11,
            corporateCapital: '4000万円',
            address: '295-1 Terado, làng Kurotaki, huyện Yoshino, tỉnh Nara, Nhật Bản',
            career: 'Khác',
            demand: 'Đang Cập Nhật',
        },
    ];

    const companyVietNam = [
        {
            id: 1,
            log1: 'https://vjp-connect-upload.s3.ap-southeast-1.amazonaws.com/32eeeef2334c618cee14df81359d6913',
            log2: 'https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo1.3907871c.png&w=128&q=75',
            log3: 'https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fctyvna.67f6a5a0.png&w=640&q=75',
            nameCty: 'NAKAYAMA CO., LTD',
            founding: 2018,
            employee: 20,
            corporateCapital: '2.000.000.000 VNĐ',
            address: 'Phòng 22, Nhà 8, Khu Công nghệ Phần mềm Quang Trung, Quận 12, TP.HCM, Việt Nam',
            career: 'Liên quan đến CNTT',
            demand: 'Tìm kiếm các công ty Nhật muốn sử dụng nguồn nhân lực IT, hoặc đầu tư-thương mại với Việt Nam và',
        },
        {
            id: 2,
            log1: 'https://vjpconnect.s3.ap-southeast-1.amazonaws.com/89edeb4063aebdb26191f59a0cfce2f3',
            log2: 'https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo1.3907871c.png&w=128&q=75',
            log3: 'https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fctyv.adc9c420.png&w=640&q=75',
            nameCty: 'VIET JAPAN DIGITAL',
            founding: 2022,
            employee: 20,
            corporateCapital: '1000000000',
            address: 'Phòng 22, QTSC 8, Công Viên Phần Mềm Quang Trung, Quận 12, TP HCM.',
            career: 'Liên quan đến CNTT',
            demand: 'Tìm khách hàng có nhu cầu phát triển phần mềm, chuyển đổi số',
        },
        {
            id: 3,
            log1: 'https://vjp-connect-upload.s3.ap-southeast-1.amazonaws.com/9adaa35dfdf4476d41a598ddce511ac0',
            log2: 'https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo1.3907871c.png&w=128&q=75',
            log3: 'https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fctyv.adc9c420.png&w=640&q=75',
            nameCty: 'Công ty Tư vấn Tài chính Kế toán NVCS',
            founding: 2010,
            employee: 200,
            corporateCapital: '100000$',
            address: 'Lầu 1, số 170-170Bis Bùi Thị Xuân, P. Phạm Ngũ Lão, Q. 1, TP. Hồ Chí Minh.',
            career: 'Khác',
            demand: 'Tìm đối tác Nhật Bản',
        },
        {
            id: 4,
            log1: 'https://vjpconnect.s3.ap-southeast-1.amazonaws.com/logo_final-02.png',
            log2: 'https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo1.3907871c.png&w=128&q=75',
            log3: 'https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fctyva.0d2f3fff.png&w=640&q=75',
            nameCty: 'CÔNG TY TNHH TƯ VẤN THUẾ VÀ GIẢI PHÁP QUẢN TRỊ TH.FINTAX',
            founding: 2019,
            employee: 10,
            corporateCapital: '2.000.000.000 VND',
            address: '198 Thượng Đình, Phường Thượng Đình, Quận Thanh Xuân, Hà Nội',
            career: 'Pháp lý và Kế toán',
            demand: 'Tìm các công ty muốn thành lập pháp nhân Việt Nam, các công ty cần hỗ trợ dịch vụ báo cáo thuế, kế toán',
        },
    ];
    const content = `Hãy liên hệ email vjpconnect@vj-partner.com hoặc nhấn nút "Đăng ký tư vấn" để nhập thông tin liên hệ`;
    const fields = [
        {
            id: 1,
            Icon: IconPlaneDeparture,
            title: 'Du lịch, giải trí và thiết kế',
        },
        {
            id: 2,
            Icon: IconToolsKitchen,
            title: 'Ngành thực phẩm & dịch vụ',
        },
        {
            id: 3,
            Icon: IconTrendingUp,
            title: 'Kinh doanh theo xu hướng',
        },
        {
            id: 4,
            Icon: IconChartArrowsVertical,
            title: 'Liên quan đến CNTT',
        },
        {
            id: 5,
            Icon: IconSettingsCog,
            title: 'Liên quan đến thực tập sinh kỹ năng',
        },

        {
            id: 6,
            Icon: IconSchool,
            title: 'Giáo dục và chăm sóc',
        },
        {
            id: 7,
            Icon: IconNetwork,
            title: 'Mở rộng sang Việt Nam',
        },
        {
            id: 8,
            Icon: IconBuildingFactory2,
            title: 'Khác',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('events_matching_container')}>
                <div className={cx('home-header')}>
                    <HeaderHome />
                </div>
                <div className={cx('content')}>
                    <h1 className={cx('heading')}>{t('header')}</h1>

                    <div className={cx('slogan')}>
                        <p className={cx('slogan-title')}>
                            Công ty tiêu biểu phía
                            <span>Nhật bản</span>
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 ">
                        {companyJapans.map((item) => (
                            <div key={item.id}>
                                <Company key={item.id} item={item} />
                            </div>
                        ))}
                    </div>

                    <div className={cx('slogan')}>
                        <p className={cx('slogan-title')}>
                            CÔNG TY TIÊU BIỂU PHÍA
                            <span>VIỆT NAM</span>
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {companyVietNam.map((item) => (
                            <div key={item.id}>
                                <Company item={item} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className={cx('content')}>
                    <h1 className={cx('heading')}>CÁC CHUYÊN GIA HỖ TRỢ</h1>

                    <div className={cx('slogan')}>
                        <p className={cx('slogan-title')}>CHUYÊN GIA ĐẠI DIỆN</p>
                    </div>

                    <SlideShow />

                    <div className={cx('btn-content-expert')}>
                        <Button primary medium>
                            Xem tất cả
                        </Button>
                    </div>
                </div>

                <div
                    className={cx('content', {
                        'content-margin': true,
                    })}
                >
                    <h1 className={cx('heading')}>LIÊN HỆ</h1>
                    <div className={cx('contact_container')}>
                        <CardContact
                            title="Bạn muốn đăng thông tin doanh nghiệp miễn phí?"
                            content="Hãy bắt đầu từ đăng ký thành viên."
                            nameBtn="Đăng ký tài khoản"
                            marginCss
                        />
                        <CardContact title="Bạn cần tư vấn ngay?" content={content} nameBtn="Đăng ký tư vấn" />
                    </div>
                </div>

                <div
                    className={cx('content', {
                        'content-margin': true,
                    })}
                >
                    <h1 className={cx('heading')}>LĨNH VỰC</h1>
                    <div className={cx('field_container')}>
                        <div className="grid grid-cols-4 gap-4">
                            {fields.map((item) => (
                                <div key={item.id}>
                                    <ServiceBox data={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div
                    className={cx('content', {
                        'content-margin': true,
                    })}
                >
                    <h1 className={cx('heading')}>ĐỐI TÁC VÀ KHÁCH HÀNG</h1>
                    <SlidePartner />
                </div>
            </div>
        </div>
    );
}

export default Home;
