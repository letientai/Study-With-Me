
import { useState } from "react";
import Button from "../../components/Button/Login";
import { dataLogin } from "../../variable";
import "./Login.scss";
function Login() {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    return (<div className="wrapper">
        <form className="form-wrap">
            <h2 className="title-signup">Đăng nhập vào tài khoản của bạn</h2>
            <div className="sub-title-signup">Học tập và giao lưu với hàng triệu học viên trên
            <span className="">mọi miền đất nước.</span>
            </div>
            <div className="wrap-btn"><Button data={dataLogin[0]}/><Button data={dataLogin[1]}/></div>
            <div className="wrap-btn"><Button data={dataLogin[2]}/><Button data={dataLogin[3]}/></div>
            <p className="line">
                <span className="line-text">Hoặc</span>
            </p>
            <input placeholder="Tên Đăng Nhập" onChange={(e) => setAccount(e.target.value)}/>
            <input placeholder="Mật Khẩu" onChange={(e) => setPassword(e.target.value)} />

            <button type="submit" className="btn-login">Đăng Nhập</button>
            
            <a href="/forgot"className="link-forgot">Quên mật khẩu ?</a>
        </form>
    </div>);
}

export default Login;