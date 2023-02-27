
import { useState } from "react";
import Button from "../../components/Button/Login";
import { dataLogin } from "../../variable";
import "./Register.scss";
function Register() {
    const [account, setAccount] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [shPassword, setShPassword] = useState('');
    return (<div className="wrapper">
        <form className="form-wrap">
            <h2 className="title-signup">Tạo tài khoản của bạn</h2>
            <div className="sub-title-signup">Học tập và giao lưu với hàng triệu học
            <span className="">viên trên mọi miền đất nước.</span>
            </div>
            <div className="wrap-btn"><Button data={dataLogin[0]}/><Button data={dataLogin[1]}/></div>
            <div className="wrap-btn"><Button data={dataLogin[2]}/><Button data={dataLogin[3]}/></div>
            <p className="line">
                <span className="line-text">Hoặc</span>
            </p>
            <input placeholder="Tên Đăng Nhập" onChange={(e) => setAccount(e.target.value)}/>
            <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Số Điện Thoại" onChange={(e) => setPhone(e.target.value)} />
            <div className="wrap-input">
                <input className="input-password" placeholder="Mật Khẩu" onChange={(e) => setPassword(e.target.value)} />
                <input placeholder="Xác Nhận Mật Khẩu" onChange={(e) => setShPassword(e.target.value)} />
            </div>
            <div className="se-box-note">
                (*) Khi bấm vào đăng ký tài khoản, bạn chắc chắn đã đọc và đồng ý với  
                <a href="https://hocmai.vn/privacy2.php">Chính sách bảo mật, Điều khoản dịch vụ và chính sách tư vấn</a>
                của HOCMAI.
            </div>
            <button type="submit" className="btn-login">Đăng Ký</button>
            
        </form>
    </div>);
}

export default Register;