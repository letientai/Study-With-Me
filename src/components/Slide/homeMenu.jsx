import React, { useState } from "react";
import ic_graduation from "../../assets/Icon/graduation-cap.png";
import { useMutation } from "react-query";
import { useEffect } from "react";
import { getAllcategory } from "../../apis/Categorys.api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function HomeMenu() {
  const [category, setCategory] = useState();
  const navigate = useNavigate()
  const getCategory = useMutation({
    mutationFn: () => getAllcategory(),
  });

  useEffect(() => {
    getCategory.mutate("values", {
      onSuccess: (data) => {
        console.log(data);
        setCategory(data?.data?.data);
        // toast.success(data?.data?.message);
      },
      onError: (error) => {
        console.log(error);
        // toast.error(error?.response?.data?.error);
      },
    });
  }, []);
  const moveToCategory = (item) => {
    navigate(`/danh-muc/${item.id}`)
  }
  return (
    <div className="home-menu">
      <ul className="clear-list mega-menu">
        {category ? (
          category.map((item, index) => (
            <li className="have-childs" key={index} onClick={() => moveToCategory(item)}>
              <img src={ic_graduation} alt="" className="mx-2" />{" "}
              {item.tenDanhMuc}
            </li>
          ))
        ) : (
          <>
            <li className="have-childs">
              <img src={ic_graduation} alt="" className="mx-2" /> Khóa học bổ
              trợ
            </li>
            <li className="have-childs">
              <img src={ic_graduation} alt="" className="mx-2" /> Bồi dưỡng học
              sinh giỏi
            </li>
            <li className="have-childs">
              <img src={ic_graduation} alt="" className="mx-2" /> Luyện thi đại
              học
            </li>
            <li className="have-childs">
              <img src={ic_graduation} alt="" className="mx-2" /> Lớp 10 - 11 -
              12
            </li>
            <li className="have-childs">
              <img src={ic_graduation} alt="" className="mx-2" /> Luyện thi vào
              10
            </li>
            <li className="have-childs">
              <img src={ic_graduation} alt="" className="mx-2" /> Lớp 6 - 7 - 8
            </li>
            <li className="have-childs">
              <img src={ic_graduation} alt="" className="mx-2" /> Luyện thi vào
              6
            </li>
            <li className="have-childs">
              <img src={ic_graduation} alt="" className="mx-2" /> Lớp 1 - 2 - 3
              - 4 - 5
            </li>
            <li className="have-childs">
              <img src={ic_graduation} alt="" className="mx-2" /> Tiền tiểu học
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default HomeMenu;
