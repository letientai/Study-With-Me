import React from "react";
import banner from "../../assets/Images/banner.png";
import { CardTc } from "../../components/Card/CardTc";
import { Select } from "../../components/Select";
import "./Teacher.scss";
export default function Teacher() {
  const dataSearch = {
    default: "Chọn môn",
    data: [
      {
        title: "Chọn môn",
        value: "all",
      },
      {
        title: "Ngữ Văn",
        value: "nguvan",
      },
      {
        title: "Toán",
        value: "toan",
      },
      {
        title: "Vật lý",
        value: "vatly",
      },
      {
        title: "Hóa học",
        value: "hoahoc",
      },
      {
        title: "Sinh học",
        value: "sinhhoc",
      },
    ],
  };

  return (
    <div>
      <div className="gv-highlight w-100">
        <img
          className="w-100"
          style={{ marginTop: "1px" }}
          src={banner}
          alt=""
        />
      </div>
      <div className="container mt-5">
        <div className="gv-top d-block d-md-flex justify-content-between mb-3">
          <div className="gv-select col-12 col-md-4 row">
            <div className="col ps-0">
              <Select dataSearch={dataSearch} />
            </div>
            <div className="col ps-0">
              <Select dataSearch={dataSearch} />
            </div>
          </div>
          <div className="gv-search col-12 col-md-6 position-relative d-flex mt-md-0 mt-2 justify-content-md-end">
            {/* <Select /> */}
            {/* <span className="gv-glass"></span> */}
            <input
              type="text"
              name="search"
              className="gv-search-input"
              placeholder="Tìm kiếm ..."
            />
            <input
              type="submit"
              name="submit"
              className="gv-search-btn"
              id="btnSearchGv"
              value="Tìm kiếm"
            />
          </div>
        </div>
        <div className="gv-list flex-wrap d-flex row">
          <CardTc/>
          <CardTc/>
          <CardTc/>
          <CardTc/>
          <CardTc/>
          <CardTc/>
          <CardTc/>
          <CardTc/>
          <CardTc/>
          <CardTc/>
          <CardTc/>
          <CardTc/>
        </div>
      </div>
    </div>
  );
}
