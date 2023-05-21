import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";

const CourseDetail = ({ data, sentIdLesson }) => {
  const queryClient = useQueryClient();
  const access_token = localStorage.getItem("access_token");
  var listMyCourse = queryClient.getQueryData("myCourses") || [];
  // console.log(listMyCourse);
  const [checkMyCourse, setCheckMyCourse] = useState(false);
  const handleVideo = (itemChild) => {
    if (itemChild.trangThai === 1) {
      sentIdLesson(itemChild);
    } else if (checkMyCourse) {
      sentIdLesson(itemChild);
    } else {
      toast.info("Mua khóa học để xem được các bài giảng");
    }
  };
  if (access_token) {
    // listMyCourse = ;
  }
  // listMyCourse = useQuery({
  //   queryKey: ["loader"],
  //   queryFn: () => queryClient.getQueryData("myCourses"),
  // });
  useEffect(() => {
    if (access_token) {
      console.log(listMyCourse);
      if (listMyCourse.length !== 0) {
        if (listMyCourse.some((course) => course.idKhoaHoc === data.id && course.trangThai === 0)) {
          setCheckMyCourse(true);
        } else {
          setCheckMyCourse(false);
        }
      }
    } else {
      setCheckMyCourse(false);
      queryClient.setQueryData("myCourses", () => []);
    }
  }, [listMyCourse, access_token, data]);

  return (
    <div className="course-outline">
      <div className="course-detail-stitle ">
        <span className="name">Đề cương khóa học</span>
      </div>
      {data?.chapters?.map((item, index) => (
        <div className="topic" key={index}>
          <div className="topic-right-name clearfix">
            <span>{item?.tenChuongHoc}</span>
          </div>
          <ul className="learn-outline-section">
            {item?.lessons?.map((itemChild, index) => (
              <li
                className="learn-outline-item py-1"
                key={itemChild?.id}
                onClick={() => handleVideo(itemChild)}
              >
                <h4 className="scorm-right-name visible">
                  <span className="scorm-right-link">
                    {itemChild?.tenBaiHoc}{" "}
                  </span>
                  {itemChild?.trangThai === 1 && (
                    <img
                      src="https://hocmai.vn/files/Mien_phi.png"
                      alt="miễn phí"
                    ></img>
                  )}
                </h4>
                <h4 className="scorm-right-name visible ">
                  <span className="scorm-right-link">
                    🎬 <span className="mx-1">4 phút</span>
                  </span>
                  <span className="scorm-right-link mx-4">
                    ❤️ <span className="mx-1">3894</span>
                  </span>
                </h4>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CourseDetail;
