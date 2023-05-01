import Button from "../../components/Button/Login";
import { dataLogin } from "../../variable";
import "./Login.scss";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../utils/rules";
import { useMutation, useQueryClient } from "react-query";
import { loginAccount } from "../../apis/Auth.api";
import { isAxiosUnprocessableEntityError } from "../../utils/utils";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { setLocalStorage } from "../../utils/auth";

function Login() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const loginAccountMutation = useMutation({
    mutationFn: (body) => loginAccount(body),
  });

  const onSubmit = handleSubmit((data) => {
    queryClient.setQueryData("loader", true);
    loginAccountMutation.mutate(data, {
      onSuccess: (data) => {
        queryClient.setQueryData("loader", false);
        toast.success("Đăng nhập thành công");
        setLocalStorage("user", data?.data?.user);
        if (data.data.user.phanQuyen === 2) {
          navigate("/actor-courses");
        } else {
          navigate("/Study-With-Me");
        }
      },
      onError: (error) => {
        queryClient.setQueryData("loader", false);
        if (isAxiosUnprocessableEntityError(error)) {
          const dataError = error.response.data.error;
          toast.error(dataError);
        }
      },
    });
  });

  return (
    <div className="wrapper">
      <form className="form-wrap" noValidate onSubmit={onSubmit}>
        <h2 className="title-signup">Đăng nhập vào tài khoản của bạn</h2>
        <div className="sub-title-signup">
          Học tập và giao lưu với hàng triệu học viên trên
          <span className="">mọi miền đất nước.</span>
        </div>
        <div className="wrap-btn">
          <Button dataBtn={dataLogin[0]} />
          <Button dataBtn={dataLogin[1]} />
        </div>
        <div className="wrap-btn">
          <Button dataBtn={dataLogin[2]} />
          <Button dataBtn={dataLogin[3]} />
        </div>
        <p className="line">
          <span className="line-text">Hoặc</span>
        </p>
        <input placeholder="Email" type="email" {...register("email")} />
        <div className="error-mess">{errors.email?.message}</div>
        <input
          placeholder="Mật Khẩu"
          autoComplete="on"
          type="password"
          {...register("password")}
        />
        <div className="error-mess">{errors.password?.message}</div>
        <button type="submit" className="btn-login">
          Đăng Nhập
        </button>
        <a href="/forgot" className="link-forgot">
          Quên mật khẩu ?
        </a>
      </form>
    </div>
  );
}

export default Login;
