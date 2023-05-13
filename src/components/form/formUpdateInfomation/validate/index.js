import * as Yup from "yup";
export const FormInfoSchema = Yup.object().shape({
    hoTen: Yup.string().required("Bắt buộc"),
    gioiTinh: Yup.string().required("Bắt buộc"),
    soDienThoai: Yup.string()
        .matches(/^(03|05|07|08|09)+([0-9]{8})$/, 'Sai định dạng')
        .required('Bắt buộc'),
    ngaySinh: Yup.date()
        .max(new Date(), 'Yêu cầu trước ngày hiện tại').required('Bắt buộc'),
    diaChi: Yup.string().min(15, "Ít nhất 15 ký tự").required('Bắt buộc'),
});
