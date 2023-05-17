import React from "react";
import { toast } from "react-toastify";

const CourseDetail = ({ data, sentIdLesson }) => {
  const handleVideo = (itemChild) => {
    if (itemChild.trangThai === 0) {
      toast.info("Mua khóa học để xem được các bài giảng");
    } else {
      sentIdLesson(itemChild);
    }
  };
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
