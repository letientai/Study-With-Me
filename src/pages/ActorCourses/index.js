import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './ActorCourses.scss'
import { faHouse } from "@fortawesome/free-solid-svg-icons";


function ActorCourses() {
    const dataName = ["Thêm bài giảng","Bài giảng của tôi","Tất cả các Khoá học"]
    return <div className="container py-4">
                <h3 className="text-start fs-4 align-items-center">
                <a href="/"> <FontAwesomeIcon icon={faHouse} className="icon"/></a>
                Trang Chủ &gt; Khoá Học 
                </h3>
            <div className="row mt-4">
                <div className="col-3">
                    <div className="info-user">
                        <div className="mc-avatar">
                            <img src="https://hocmai.vn/pix/u/f1.png" alt=""></img>
                        </div>
                        <div className="name">
                            <span>Hậu Lâm</span>
                        </div>
                        {dataName.map((name,index) => (
                            <a key={index} href={name} className="mc-links">{name}</a>
                        ))}
                    </div>
                </div>
                <div className="col-9 ">List</div>
            </div>
        </div>
}

export default ActorCourses;