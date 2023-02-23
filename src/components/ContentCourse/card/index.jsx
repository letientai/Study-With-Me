import React from "react";

function Card() {
  return (
    <div className="wrap-card w-100 px-1">
      <div className="item-course course">
        <div className="box-img course-image-wr">
          <div className="icon-hot">Hot</div>
          <div className="course-img">
            <img
              src="https://hocmai.vn/course/images/hoc-tot-toan-12-thay-luu-huy-thuong-1614046727.jpg"
              alt=""
              className="lazy sss"
            />
          </div>
        </div>
        <div className="course-info">
          <div className="course-name">
            <a href="">PEN-I Toán</a>
          </div>
          <p className="course-teachers">
            Giáo viên:
            <a href="">Thầy Hồng Trí Quang</a>
          </p>
          <div className="course-scorms">
            <p className="course-fee">
              <span >16</span>
               {" "}Bài giảng
            </p>
            <p className="course-fee">
              <span >50</span>
               {" "}Câu hỏi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
