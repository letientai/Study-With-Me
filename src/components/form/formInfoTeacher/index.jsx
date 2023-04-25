import dr from "../../../assets/Icon/bgadress.png";
import email from "../../../assets/Icon/bgemail.png";
import mu from "../../../assets/Icon/bgmu.png";
import fb from "../../../assets/Icon/bgfb.png";
import sach from "../../../assets/Icon/bgsach.png";
import u from "../../../assets/Icon/u.png";
function FormInfoTeacher() {
  return (
    <div className="form-infomation w-100 d-flex">
      <div className="col-5 d-flex align-items-center">
        <img
          className="w-100"
          src="https://hocmai.vn/file.php/1/Anh_giao_vien_THCS_va_TH/Van_Trinh_Quynh_An/470X470.png"
          alt=""
        />
      </div>
      <div className="col-7 d-flex align-items-center">
        <div className="info w-100">
          <div className="title pt-5">
            <div className="title-content">THÔNG TIN GIÁO VIÊN</div>
          </div>
          <div className="details p-4">
            <div className="d-flex w-100 field bt">
              <div className="icoleft">
                {" "}
                <img src={u} alt="" />
              </div>
              <div className="text py-1">
                <span>Họ và tên</span>
                <p className="m-0">Văn Trịnh Quỳnh An</p>
              </div>
            </div>
            <div className="d-flex w-100 field bt">
              <div className="icoleft">
                <img src={dr} alt="" />
              </div>
              <div className="text py-1">
                <span>Nơi công tác:</span>
                <p className="m-0">TRƯỜNG THPT GIA ĐỊNH, TP.HCM</p>
              </div>
            </div>
            <div className="d-flex w-100 bt field">
              <div className="col d-flex  field">
                <div className="icoleft">
                  <img src={sach} alt="" />
                </div>
                <div className="text py-1">
                  <span>Môn dạy:</span>
                  <p className="m-0">NGỮ VĂN</p>
                </div>
              </div>
              <div className="col d-flex  field">
                <div className="icoleft">
                  <img src={mu} alt="" />
                </div>
                <div className="text py-1">
                  <span>Học vị:</span>
                  <p className="m-0">THẠC SĨ</p>
                </div>
              </div>
            </div>
            <div className="d-flex w-100 field">
              <div className="col d-flex  field">
                <div className="icoleft">
                  {" "}
                  <img src={email} alt="" />
                </div>
                <div className="text py-1">
                  <span>Email:</span>
                  <p className="m-0">gv.anvtq@hocmai.edu.vn</p>
                </div>
              </div>
              <div className="col d-flex  field">
                <div className="icoleft">
                  {" "}
                  <img src={fb} alt="" />
                </div>
                <div className="text py-1">
                  <span>Facebook:</span>
                  <p className="m-0">https://www.facebook.com/q</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormInfoTeacher;
