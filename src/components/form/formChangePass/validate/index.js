import * as Yup from "yup";
export const FormChangePass = Yup.object().shape({
    old_password: Yup.string()
        .required('Bắt buộc')
        .min(5, 'Độ dài từ 5 - 160 ký tự')
        .max(160, 'Độ dài từ 5 - 160 ký tự'),
    new_password: Yup.string()
        .required('Bắt buộc')
        .min(5, 'Độ dài từ 5 - 160 ký tự')
        .max(160, 'Độ dài từ 5 - 160 ký tự'),
    confirm_password: Yup.string()
        .required('Bắt buộc')
        .min(5, 'Độ dài từ 5 - 160 ký tự')
        .max(160, 'Độ dài từ 5 - 160 ký tự')
        .oneOf([Yup.ref('new_password')], 'Nhập lại password không khớp')
});
