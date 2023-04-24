import React from "react";
import "./CardTc.scss";
export const CardTc = () => {
  return (
    <div className="gv-item col-lg-3 col-md-4 col-6 mb-md-4 mb-3">
      <div className="gv-item-wr w-100">
        <div className="gv-image w-100">
          <img
            className="w-100"
            src="https://hocmai.vn/file.php/1/Anh_giao_vien_THCS_va_TH/Van_Trinh_Quynh_An/Form_mau_anh_dai_dien_236_x_315.png"
            alt="Cô: Văn Trịnh Quỳnh An"
          />
        </div>
        <div className="gv-caption">
          <p className="gv-name">
            <a
              href="https://hocmai.vn/giao-vien/286/co-van-trinh-quynh-an.html"
              target="blank"
            >
              Cô: Văn Trịnh Quỳnh An
            </a>
          </p>
          <p className="gv-school">Trường THPT Gia Định, TP.HCM</p>
          <div className="gv-desc">
            <p>
              Ankipedia không phải lúc nào cũng đúng, nhưng sẵn sàng cập nhật,
              không phải là nguồn tài liệu cuối cùng mà sẽ là nguồn tài liệu đầu
              tiên của học sinh.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
