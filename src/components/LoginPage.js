import React from 'react';
import Logo from '../image/EpaperLogo_BLACK.png';
import './LoginPage.scss';

function LoginPage() {
    const handleClicked = () => {

    }

    return (
        <div className='container'>
            <div className='logo'>
                <img src={Logo} alt='LOGO' />
            </div>

            <div className='line'></div>

            <div className='login'>
                <div className='login_Text'>
                    <label>登入</label>
                </div>

                <div className='account'>
                    <input type='text' placeholder='請輸入您的帳號' />
                </div>

                <div className='password'>
                    <input type='text' placeholder='請輸入您的密碼' />
                </div>

                <div className='login_BTN'>
                    <button onClick={handleClicked()}>登入</button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;