import React from "react";
import "./CardTc.scss";
export const CardTc = ({ item }) => {
  return (
    <div className="gv-item col-lg-3 col-md-4 col-6 mb-md-4 mb-3">
      <div className="gv-item-wr w-100">
        <div className="gv-image w-100" style={{backgroundImage: `url(${item?.avatar})`}}>
        </div>
        <div className="gv-caption">
          <p className="gv-name">
            <span>{item?.gioiTinh === "Nam" ? "Thầy": "Cô"}: {item?.hoTen}</span>
          </p>
          <p className="gv-school">Sinh ngày: {item?.ngaySinh}</p>
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
