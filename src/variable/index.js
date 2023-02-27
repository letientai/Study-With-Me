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
