import React, { useState } from "react";
import ic_phone from "../../../../assets/Icon/telephone.png";
function TopHeader() {
  const [valueSearch, setValueSearch] = useState("");

  return (
    <div className="top-header">
      <div className="container h-100 ">
        <div className="row w-100 no-mg d-flex justify-content-between h-100">
          <div className="left-top-header w-40 d-flex justify-items-between align-items-center col-5">
            <div className="logo box-img">
              <img
                className="logo-imgage"
                src="https://hocmai.vn/assets/front/images/logo.png"
                alt="Học trực tuyến - Hệ thống giáo dục HOCMAI"
              />
            </div>
            <div className="box-search d-flex align-items-center w-100">
              <input
                type="text"
                className="text_search"
                placeholder="Tìm kiếm khóa học"
                value={valueSearch}
                onChange={(e) => setValueSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="right-top-header w-60 d-flex justify-content-end col-7 px-0">
            <div className="hotline d-flex align-items-center ">
              <span className="fw-600">
                <img src={ic_phone} alt="" /> 1900 6933
              </span>
            </div>
            <div className="info-member d-flex align-items-center">
              <a className="btn-acc btn-login" href="/loginv2">
                Đăng Nhập
              </a>
              <a
                className="btn-acc btn-register bg-orange cl-white"
                href="/loginv2/signup.php"
              >
                Đăng Ký
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
