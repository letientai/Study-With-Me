import React, { useState } from "react";
import HomeMenu from "./homeMenu";
import { RightContent } from "./rightContent";
import "./Slide.scss";
import { SlideBanner } from "./slideBanner";
import { memo } from "react";

function Slide() {
  const [color, setColor] = useState("#7fb5ff");

  return (
    <div className="wrapper-slide w-100">
      <div className="content w-100 " style={{ backgroundColor: `${color}` }}>
        <div className="header-content w-100">
          <div className="container w-100 position-relative h-100 w-100">
            <div className="row no-mg h-100 w-100 flex-lg-nowrap justify-content-between">
              <div className="w-25  px-0">
                <div className="title-cate w-100">Các khóa học</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container w-100 ">
          <div className="row no-mg h-100 w-100 flex-lg-nowrap justify-content-between ">
            <div className="menu w-25  px-0">
              <HomeMenu />
            </div>
            <div className="slider">
              <SlideBanner setColor={setColor} />
            </div>
            <div className="right-content w-20 px-0">
              <RightContent />
            </div>
          </div>
        </div>
        <div className="container w-100 ">
          <div className="row no-mg w-100">
            <div className="statistics col-12">
              <div className="box-year d-flex">
                <div className="box-img">
                  <img
                    src="https://hocmai.vn/assets/front/images/ptt.png                "
                    alt=""
                  />
                </div>
                <div className="content-statistics">
                  <div className="title-statistics syear">16 năm</div>
                  <div className="info-statistics">Giáo dục trực tuyến</div>
                </div>
              </div>
              <div className="box-user d-flex">
                <div className="box-img">
                  <img
                    src="https://hocmai.vn/assets/front/images/member.png                "
                    alt=""
                  />
                </div>
                <div className="content-statistics">
                  <div className="title-statistics syear">6.349.589</div>
                  <div className="info-statistics">Thành viên</div>
                </div>
              </div>
              <div className="box-nt d-flex">
                <div className="box-img">
                  <img
                    src="https://hocmai.vn/assets/front/images/nt.png               "
                    alt=""
                  />
                </div>
                <div className="content-statistics">
                  <div className="info-statistics">Nền tảng học trực tuyến</div>
                  <div className="title-statistics syear">số 1 Việt Nam</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Slide);
