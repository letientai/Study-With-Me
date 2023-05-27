import * as yup from "yup";
// when validate handmade
export const getRules = (watch)=> ({
    email: {
      required: {
        value: true,
        message: 'Email là bắt buộc'
      },
      pattern: {
        value: /^\S+@\S+\.\S+$/,
        message: 'Email không đúng định dạng'
      },
      maxLength: {
        value: 160,
        message: 'Độ dài từ 5 - 160 ký tự'
      },
      minLength: {
        value: 5,
        message: 'Độ dài từ 5 - 160 ký tự'
      }
    },
    nameAll: {
        required: {
            value: true,
            message: 'Phải Nhập Tên Đầy Đủ'
        },
        maxLength: {
            value: 160,
            message: 'Độ dài từ 6 - 160 ký tự'
        },
        minLength: {
            value: 6,
            message: 'Độ dài từ 6 - 160 ký tự'
        }
    },
    phone: {
      required: {
        value: true,
        message: 'Phải Nhập Số Điện Thoại'
      },
        maxLength: {
            value: 10,
            message: 'Độ dài không vượt quá 10 con số'
        },
        minLength: {
            value: 10,
            message: 'Độ dài 10 con số'
        }
    },
    password: {
      required: {
        value: true,
        message: 'Password là bắt buộc'
      },
      maxLength: {
        value: 160,
        message: 'Độ dài từ 6 - 160 ký tự'
      },
      minLength: {
        value: 6,
        message: 'Độ dài từ 6 - 160 ký tự'
      }
    },
    confirm_password: {
      required: {
        value: true,
        message: 'Nhập lại password là bắt buộc'
      },
      maxLength: {
        value: 160,
        message: 'Độ dài từ 6 - 160 ký tự'
      },
      minLength: {
        value: 6,
        message: 'Độ dài từ 6 - 160 ký tự'
      },
      validate:
        typeof watch === 'function'
          ? (value) => value === watch('password') || 'Nhập lại password không khớp'
          : undefined
    }
})

// when validate with Yup
export const schema = yup.object({
  email: yup.string()
    .required('Email là bắt buộc')
    .email('Email không đúng định dạng')
    .min(5,'Độ dài từ 5 - 160 ký tự')
    .max(160,'Độ dài từ 5 - 160 ký tự'),
  nameAll : yup.string()
    .required('Phải nhập tên đầy đủ')
    .min(5,'Độ dài từ 5 - 160 ký tự')
    .max(160,'Độ dài từ 5 - 160 ký tự'),
  soDienThoai: yup.string()
    .matches(/^(03|05|07|08|09)+([0-9]{8})$/, 'Sai định dạng')
    .required('Bắt buộc'),
  password : yup.string()
    .required('Phải nhập password')
    .min(5,'Độ dài từ 5 - 160 ký tự')
    .max(160,'Độ dài từ 5 - 160 ký tự'),
  confirm_password : yup.string()
    .required('Phải nhập password')
    .min(5,'Độ dài từ 5 - 160 ký tự')
    .max(160,'Độ dài từ 5 - 160 ký tự')
    .oneOf([yup.ref('password')],'Nhập lại password không khớp')    
})


export const loginSchema = schema.omit(['nameAll','soDienThoai','confirm_password'])
export const forgot = schema.omit(['nameAll','soDienThoai','confirm_password','password'])

// when add course

export const schemaCourseGV = yup.object({
  tenKhoaHoc: yup.string()
    .required('Phải có tên khoá học')
    .min(5,'Độ dài từ 5 - 160 ký tự')
    .max(1000,'Độ dài từ 5 - 1000 ký tự'),
  moTa : yup.string()
    .required('Phải có mô tả bài học')
    .min(5,'Độ dài từ 5 - 500 ký tự')
    .max(1000,'Độ dài từ 5 - 1000 ký tự'),
  linkVideo: yup.string(),
  giaCa : yup.number()
  .required('Phải nhập giá tiền')
  .positive('Giá tiền không hợp lệ'),
  category_id : yup.number()
    .required('Phải chọn danh mục'),
  trangThai : yup.number()
})

export const schemaChapterGV = yup.object({
  tenChuongHoc: yup.string()
    .required('Phải có tên Chương học')
    .min(5,'Độ dài từ 5 - 160 ký tự')
    .max(1000,'Độ dài từ 5 - 1000 ký tự'),
  course_id : yup.number()
    .required('Phải chọn danh mục'),
  trangThai : yup.number()
})



export const schemaCategory = yup.object({
  tenDanhMuc: yup.string()
    .required('Phải có tên Danh Mục')
    .min(5,'Độ dài từ 5 - 160 ký tự')
    .max(1000,'Độ dài từ 5 - 1000 ký tự'),
  moTa : yup.string()
    .required('Phải có mô tả Danh mục')
    .min(5,'Độ dài từ 5 - 500 ký tự')
    .max(1000,'Độ dài từ 5 - 1000 ký tự'),
})

