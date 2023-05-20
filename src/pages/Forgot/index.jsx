import { useForm } from 'react-hook-form';
import './Forgot.scss'
import { yupResolver } from '@hookform/resolvers/yup';
import { forgot } from '../../utils/rules';
import { useMutation, useQueryClient } from 'react-query';
import { forgotPassword } from '../../apis/Auth.api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { isAxiosUnprocessableEntityError } from '../../utils/utils';
function Forgot() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(forgot),
      });
      const ForgotPasswordMutation = useMutation({
        mutationFn: (body) => forgotPassword(body),
      });
      const onSubmit = handleSubmit((email) => {
        console.log(email)
        queryClient.setQueryData("loader", true);
        ForgotPasswordMutation.mutate(email, {
          onSuccess: (email) => {
            queryClient.setQueryData("loader", false);
            toast.success("Đã gởi mật khẩu mới vào gmail");
              navigate("/dang-nhap")
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
    return <div className='container d-flex flex-column text-center pt-4'>
        <h1 className='fs-4 text-primary'>KHÔI PHỤC MẬT KHẨU</h1>
        <span className='line m-4'></span>
        <form className='flex container-form-forgot' noValidate onSubmit={onSubmit}>
            <h1 className='name'>KHÔI PHỤC MẬT KHẨU QUA EMAIL</h1>
            <span className='d-block fw-bold'>Bạn vui lòng điền địa chỉ Email đã dùng để đăng ký tài khoản HOCMAI.</span>
            <span className='d-block'>Địa chỉ email: <input className='form-input' placeholder="Email" type="email"{...register('email')} /></span>
            <div className="error-mess">{errors.email?.message}</div>
            <button onClick={onSubmit}  type="button" className="btn btn-primary m-2 ">Lấy lại mật khẩu</button>
        </form>
    </div>
}

export default Forgot;