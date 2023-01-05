import React from "react";
import ic_graduation from "../../assets/Icon/graduation-cap.png";
function HomeMenu() {
  return (
    <div className="home-menu">
      <ul className="clear-list mega-menu">
        <li className="have-childs">
          <img src={ic_graduation} alt="" className="mx-2" /> Đại học - Cao đẳng
        </li>
        <li className="have-childs">
          <img src={ic_graduation} alt="" className="mx-2" /> Khóa học bổ trợ
        </li>
        <li className="have-childs">
          <img src={ic_graduation} alt="" className="mx-2" /> Bồi dưỡng học sinh
          giỏi
        </li>
        <li className="have-childs">
          <img src={ic_graduation} alt="" className="mx-2" /> Luyện thi đại học
        </li>
        <li className="have-childs">
          <img src={ic_graduation} alt="" className="mx-2" /> Lớp 10 - 11 - 12
        </li>
        <li className="have-childs">
          <img src={ic_graduation} alt="" className="mx-2" /> Luyện thi vào 10
        </li>
        <li className="have-childs">
          <img src={ic_graduation} alt="" className="mx-2" /> Lớp 6 - 7 - 8
        </li>
        <li className="have-childs">
          <img src={ic_graduation} alt="" className="mx-2" /> Luyện thi vào 6
        </li>
        <li className="have-childs">
          <img src={ic_graduation} alt="" className="mx-2" /> Lớp 1 - 2 - 3 - 4 - 5
        </li>
        <li className="have-childs">
          <img src={ic_graduation} alt="" className="mx-2" /> Tiền tiểu học
        </li>
      </ul>
    </div>
  );
}

export default HomeMenu;
