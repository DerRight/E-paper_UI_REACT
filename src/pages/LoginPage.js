import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Logo from '../image/EpaperLogo_BLACK.png';
import './LoginPage.scss';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [userpassword, setUserpassword] = useState('');
    const [nameError, setNameError] = useState('');
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

    const validateName = (e) => {
        const name = e.target.value;
        setUsername(name);

        const nameRegex = 'admin';
        if (!nameRegex.test(name)) {
            setNameError('Invalid name');
        }
        else {
            setNameError('');
        }
    }

    return (
        <article className='login-content'>
            <figure className='logo'>
                <img src={Logo} alt='LOGO' />
            </figure>

            <section className='login'>
                <p className='login-text'>登入</p>

                <section className='account'>
                    <input
                        type='text'
                        placeholder='請輸入您的帳號'
                        value={username}
                        onChange={validateName}
                        className={nameError ? 'error' : ''} />
                        {nameError && <p className='error-message'>{nameError}</p>}
                </section>

                <section className='password'>
                    <input
                        type='password'
                        placeholder='請輸入您的密碼'
                        value={userpassword}
                        onChange={(e) => setUserpassword(e.target.value)} />
                </section>

                <section className='login-BTN'>
                    <button onClick={handleLoginClicked}>登入</button>
                </section>
            </section>
        </article>
    );
}

export default LoginPage;