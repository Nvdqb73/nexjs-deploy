'use client';

import classNames from 'classnames/bind';
import { IconMenu2 } from '@tabler/icons-react';
import styles from './Navbar.module.scss';
import Image from '~/app/components/common/Image';

const cx = classNames.bind(styles);

function Navbar() {
    return (
        <>
            <div className={cx('logo')}>
                <a href="/">
                    <Image
                        src="https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogovjpc.8300dbca.png&w=750&q=75"
                        alt="logo"
                    />
                </a>
            </div>
            <div className={cx('menu')}>
                <div className={cx('left_menu')}>
                    <a href="/">
                        <button>
                            Đăng kí tài khoản
                            <br></br>
                            <span>(MIỄN PHÍ)</span>
                        </button>
                    </a>
                </div>
            </div>
            <div className={cx('menu_mobile')}>
                <div className={cx('container')}>
                    <span className={cx('action')}>
                        <IconMenu2 color="black" />
                    </span>
                </div>
            </div>
        </>
    );
}

export default Navbar;
