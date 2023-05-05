import Button from "../../components/Button/Login";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../utils/rules";
import { dataLogin } from "../../variable";
import "./Register.scss";

import { omit } from "lodash";

import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { registerAccount } from "../../apis/Auth.api";
import { isAxiosUnprocessableEntityError } from "../../utils/utils";
import { toast } from "react-toastify";

function Register() {
  
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const registerAccountMutation = useMutation({
    mutationFn: (body) => registerAccount(body),
  });

  const onSubmit = handleSubmit((data) => {
    const body = omit(data, ["confirm_password"]);
    registerAccountMutation.mutate(body, {
      onSuccess: (data) => {
        console.log(data);
        toast.info(data.data.thongBao);
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError(error)) {
          const formError = error.response.data.error;
          if (formError.email) {
            Object.keys(formError).forEach((key) => {
              setError(key, {
                message: formError[key][0],
                type: "server",
              });
            });
          }
        }
      },
    });
  });


    return (<div className="wrapper">
        <form className="form-wrap" noValidate onSubmit={onSubmit}>
            <h2 className="title-signup">Tạo tài khoản của bạn</h2>
            <div className="sub-title-signup">Học tập và giao lưu với hàng triệu học
            <span className="">viên trên mọi miền đất nước.</span>
            </div>
            <div className="wrap-btn"><Button dataBtn={dataLogin[0]}/><Button dataBtn={dataLogin[1]}/></div>
            <div className="wrap-btn"><Button dataBtn={dataLogin[2]}/><Button dataBtn={dataLogin[3]}/></div>
            <p className="line">
                <span className="line-text">Hoặc</span>
            </p>
            <input placeholder="Họ Và Tên" type="text" {...register('nameAll')}/>
            <div className="error-mess">{errors.nameAll?.message}</div>
            <input placeholder="Email" type="email" {...register('email')} />
            <div className="error-mess">{errors.email?.message}</div>

            <input placeholder="Số Điện Thoại" type="number"  {...register('soDienThoai')} />
            <div className="error-mess">{errors.soDienThoai?.message}</div>

            <div className="wrap-input">
                <input className="input-password" autoComplete="on" placeholder="Mật Khẩu" type="password" {...register('password')} />
                <input placeholder="Xác Nhận Mật Khẩu" autoComplete="on" type="password" {...register('confirm_password')}/>
            </div>
            <div className="wrap-input">
                <div className="error-mess  error-mess-pass">{errors.password?.message}</div>
                <div className="error-mess ">{errors.confirm_password?.message}</div>
            </div>
            <div className="se-box-note">
                (*) Khi bấm vào đăng ký tài khoản, bạn chắc chắn đã đọc và đồng ý với  
                <a href="https://hocmai.vn/privacy2.php">Chính sách bảo mật, Điều khoản dịch vụ và chính sách tư vấn</a>
                của HOCMAI.
            </div>
            <button disabled={registerAccountMutation.isLoading} type="submit" className="btn-login">Đăng Ký</button>
            
        </form>
    </div>);
}

export default Register;
