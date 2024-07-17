import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Logo from '../image/EpaperLogo_BLACK.png';
import './LoginPage.scss';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [userpassword, setUserpassword] = useState('');
    const navigate = useNavigate();

    const handleLoginClicked = () => {
        if (username === "4a9g0000" && userpassword === "1234") {
            alert("您的身份是學生");
            navigate('/home');
        }
        else if (username === "admin" && userpassword === "1234") {
            alert("您的身份是管理員");
            navigate('/home');
        }
        else if (username === "teacher" && userpassword === "1234") {
            alert("您的身份是老師");
            navigate('/home');
        }
        else {
            alert("登入失敗，請檢查帳號密碼是否有誤！");
        }
    }

    return (
        <div className='login-content'>
            <div className='logo'>
                <img src={Logo} alt='LOGO' />
            </div>

            <div className='line'></div>

            <div className='login'>
                <div className='login_Text'>
                    <label>登入</label>
                </div>

                <div className='account'>
                    <input
                        type='text'
                        placeholder='請輸入您的帳號'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                </div>

                <div className='password'>
                    <input
                        type='password'
                        placeholder='請輸入您的密碼'
                        value={userpassword}
                        onChange={(e) => setUserpassword(e.target.value)} />
                </div>

                <div className='login_BTN'>
                    <button onClick={handleLoginClicked}>登入</button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;