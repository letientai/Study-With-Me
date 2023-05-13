import * as Yup from "yup";

export const PaymentSchema = Yup.object().shape({
  hoTen: Yup.string()
    .required("Bắt buộc")
    .min(6, "Tối thiểu 6 ký tự")
    .max(30, "Quá dài"),
  email: Yup.string().email("Sai định dạng").required("Bắt buộc"),
  soDienThoai: Yup.string()
    .matches(/^(03|05|07|08|09)+([0-9]{8})$/, "Sai định dạng")
    .required("Bắt buộc"),
  diaChi: Yup.string().required("Bắt buộc").min(10, "Tối thiểu 10 ký tự"),
});
