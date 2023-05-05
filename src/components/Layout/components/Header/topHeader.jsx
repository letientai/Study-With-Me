import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ic_phone from "../../../../assets/Icon/telephone.png";
import useDebounce from "../../../../Hooks/useDebounce";
import { Sidebar } from "./sidebar";
import {  useMutation, useQueryClient } from "react-query";
import { logout } from "../../../../apis/Auth.api";
import { toast } from "react-toastify";
import { clearLS, clearUser } from "../../../../utils/auth";
function TopHeader() {
  const [valueSearch, setValueSearch] = useState("");
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const debounce = useDebounce(valueSearch, 500);

  useEffect(() => {
    //handle search suggestion
  }, [debounce]);
  const logoutMutation = useMutation({
    mutationFn : logout,
    onSuccess: () => {
      toast.success("Đăng xuất thành công");
      clearLS()
      clearUser()
    }
  })
  const handleLogout = () => {
    logoutMutation.mutate()
  } 
  return (
    <div className="top-header">
      <div className="container h-100 ">
        <div className="row w-100 no-mg d-flex justify-content-between h-100">
          <div className="left-top-header d-flex justify-items-between align-items-center col-10 col-md-5">
            <div
              className="logo box-img"
              onClick={() => navigate("/Study-With-Me")}
            >
              <img
                className="logo-imgage"
                src="https://hocmai.vn/assets/front/images/logo.png"
                alt="Học trực tuyến - Hệ thống giáo dục HOCMAI"
              />
            </div>
            <div className="box-search d-flex align-items-center w-100 ">
              <input
                type="text"
                className="text_search w-100"
                placeholder="Tìm kiếm khóa học"
                value={valueSearch}
                onChange={(e) => setValueSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="sidebar d-block d-md-none col-2">
            <Sidebar name="ahi" placement="end" />
          </div>

          <div className="right-top-header  d-flex justify-content-end d-none d-md-flex col-md-7 px-0">
            <div className="hotline d-none d-md-flex align-items-center ">
              <span className="fw-600">
                <img src={ic_phone} alt="" /> 1900 6933
              </span>
            </div>
            <div className="info-member d-flex align-items-center ">
              {!user ? (
                <div>
                  <span
                    className="btn-acc btn-login"
                    onClick={() => navigate("/dang-nhap")}
                  >
                    Đăng Nhập
                  </span>
                  <span
                    className="btn-acc btn-register bg-orange cl-white"
                    onClick={() => navigate("/dang-ky")}
                  >
                    Đăng Ký
                  </span>
                </div>
              ) : (
                <div className="d-flex justify-content-end align-items-center position-relative">
                  <div onClick={() => navigate("/actor-courses")} className="align-items-center my-courses mx-4">
                    Khóa học của tôi
                  </div>
                  <div className="menuInfo">
                    <div
                      className="avartar"
                      style={{ backgroundImage: `url(${user?.avatar})` }}
                    ></div>
                    <div className="sub-list">
                      <ul>
                        <li className="account d-flex align-items-center">
                          <div
                            className="avartar"
                            style={{ backgroundImage: `url(${user?.avatar})` }}
                          ></div>
                          <div className="info mx-2">
                            <p className="name m-0">{user?.hoTen}</p>
                            <p className="email m-0">{user?.email}</p>
                          </div>
                        </li>
                        <li
                          className="d-flex align-items-center"
                          onClick={() => navigate("/trang-ca-nhan")}
                        >
                          <div className="icon"></div>
                          <div className="text">Thông tin cá nhân</div>
                        </li>
                        <li
                          className="d-flex align-items-center"
                          onClick={() => navigate("/doi-mat-khau")}
                        >
                          <div className="icon"></div>
                          <div className="text">Đổi mật khẩu</div>
                        </li>
                        <li className="d-flex align-items-center">
                          <div className="icon"></div>
                          <div onClick={handleLogout}  className="text">Đăng xuất</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
