import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './ActorCourses.scss'
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import ListCoursesActor from "../../components/ListCoursesActor";
import { useQuery } from "react-query";
import { CoursesGVid } from "../../apis/Courses.api";

import { getProfileFromLS } from "../../utils/auth";

function ActorCourses() {
    const profile = getProfileFromLS()
    const dataName = [
        {
            name :'Thêm Khoá Học',
            href: 'actor-courses/add'
        },
        {
            name :'Thêm Chương Học',
            href: 'actor-courses/'
        },
        {
            name :'Thêm Bài Học',
            href: 'actor-courses/'
        },
        {
            name :'Khoá Học Của Tôi',
            href: 'actor-courses/'
        },
    ]

    const result = useQuery({
        queryKey: ['courses',profile.id],
        queryFn: () => CoursesGVid(profile.id)
    })
    return <div className="container py-4">
                <h3 className="text-start fs-4 align-items-center">
                <a href="/"> <FontAwesomeIcon icon={faHouse} className="icon"/></a>
                Trang Chủ &gt; Khoá Học 
                </h3>
            <div className="row mt-4">
                <div className="col-3">
                    <div className="info-user">
                        <div className="mc-avatar">
                            <img src={profile.avatar || "https://hocmai.vn/pix/u/f1.png"} alt=""></img>
                        </div>
                        <div className="name">
                            <span>{profile.hoTen}</span>
                        </div>
                        {dataName.map((data,index) => (
                            <a key={index} href={data.href} className="mc-links">{data.name}</a>
                        ))}
                    </div>
                </div>
                <div className="col-9 ">
                  <ListCoursesActor result={result} />
                </div>
            </div>

        </div>
}

export default ActorCourses;