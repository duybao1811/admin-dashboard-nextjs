import React from 'react';
import Image from 'next/image';
import BgLogin from '../../../../public/images/bg-login.svg'
import LoginForm from './components/LoginForm';

const LoginPage = () => {
    return (
        <div className={'h-screen grid grid-cols-[448px_1fr]'}>
            <LoginForm />
            <div className={'flex items-center justify-center'}>
                <Image
                    width={647}
                    height={602}
                    src={BgLogin}
                    alt={'background login'}
                    className={'w-[40rem] h-[37rem]'}
                />
            </div>
        </div>
    );
};

export default LoginPage;
