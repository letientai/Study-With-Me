import { faApple, faFacebook, faGoogle, faYahoo } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const dataLogin = [
    {
        role : "facebook",
        icon : <FontAwesomeIcon icon={faFacebook} className="icon"/>,
        title : "Đăng Nhập Qua FaceBook"
    },
    {
        role : "google",
        icon : <FontAwesomeIcon icon={faGoogle} className="icon"/>,
        title : "Đăng Nhập Qua Google"
    },
    {
        role : "yahoo",
        icon : <FontAwesomeIcon icon={faYahoo} className="icon"/>,
        title : "Đăng Nhập Qua yahoo"
    },
    {
        role : "apple",
        icon : <FontAwesomeIcon icon={faApple} className="icon"/>,
        title : "Đăng Nhập với Apple"
    }
]


export const DATA_CATEGORY_COURSE = [
    { value: 1, label: 'Lớp 6' },
    { value: 2, label: 'Lớp 7' },
    { value: 3, label: 'Lớp 8' },
    { value: 4, label: 'Lớp 9' },
    { value: 5, label: 'Lớp 10' },
];

export const STATUS_CATEGORY_COURSE = [
    { value: 1, label: 'Hoạt Động' },
    { value: 0, label: 'Không Hoạt Động' },
   
];
  
