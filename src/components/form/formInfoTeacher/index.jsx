import dr from "../../../assets/Icon/bgadress.png";
import email from "../../../assets/Icon/bgemail.png";
import mu from "../../../assets/Icon/bgmu.png";
import fb from "../../../assets/Icon/bgfb.png";
import sach from "../../../assets/Icon/bgsach.png";
import u from "../../../assets/Icon/u.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FormUpdateInfomation } from "../formUpdateInfomation";
function FormInfoTeacher({ item }) {
  const [checkFormUpdate, setCheckFormUpdate] = useState(false);
  const showHideModal = (check) => {
    setCheckFormUpdate(check)
  }
  return (
    <div className="form-infomation w-100 d-flex">
      <div className="col-5 d-flex align-items-center">
        <img className="w-100" src={item?.avatar} alt="" />
      </div>
      <div className="col-7 d-flex align-items-center">
        <div className="info w-100">
          <div className="title pt-5 d-flex">
            <div className="title-content">
              THÔNG TIN {item?.phanQuyen === 2 ? "GIÁO VIÊN" : "CÁ NHÂN"}
            </div>
            {item?.phanQuyen !== 2 && (
              <div
                className="btn-edit"
                onClick={() => setCheckFormUpdate(true)}
              >
                <FontAwesomeIcon className="icon" icon={faPenToSquare} />
              </div>
            )}
          </div>
          <div className="details p-4">
            <div className="d-flex w-100 field bt mg_bt">
              <div className="icoleft">
                {" "}
                <img src={u} alt="" />
              </div>
              <div className="text py-1">
                <span>Họ và tên</span>
                <p className="m-0">{item?.hoTen}</p>
              </div>
            </div>
            <div className="d-flex w-100 field bt mg_bt">
              <div className="icoleft">
                <img src={dr} alt="" />
              </div>
              <div className="text py-1">
                <span>Địa chỉ</span>
                <p className="m-0">{item?.diaChi || "Trống"}</p>
              </div>
            </div>
            <div className="d-flex w-100 bt field mg_bt">
              <div className="col d-flex  field">
                <div className="icoleft">
                  <img src={sach} alt="" />
                </div>
                <div className="text py-1">
                  <span>Ngày sinh:</span>
                  <p className="m-0">{item?.ngaySinh || "Trống"}</p>
                </div>
              </div>
              <div className="col d-flex  field">
                <div className="icoleft">
                  <img src={mu} alt="" />
                </div>
                <div className="text py-1">
                  <span>Giới tính:</span>
                  <p className="m-0">{item?.gioiTinh}</p>
                </div>
              </div>
            </div>
            <div className="d-flex w-100 field mg_bt">
              <div className="col d-flex  field">
                <div className="icoleft">
                  {" "}
                  <img src={email} alt="" />
                </div>
                <div className="text py-1">
                  <span>Email:</span>
                  <p className="m-0">{item?.email}</p>
                </div>
              </div>
              <div className="col d-flex  field">
                <div className="icoleft">
                  {" "}
                  <img src={fb} alt="" />
                </div>
                <div className="text py-1">
                  <span>Số điện thoại:</span>
                  <p className="m-0">{item?.soDienThoai}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {checkFormUpdate && <FormUpdateInfomation showHideModal={showHideModal} item={item}/>}
    </div>
  );
}

export default FormInfoTeacher;
