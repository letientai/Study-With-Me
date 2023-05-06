import React, { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { isAxiosUnprocessableEntityError } from "../../../utils/utils";
import { CoursesGVid } from "../../../apis/Courses.api";

function Card({ item }) {
  const [user, setUser] = useState({});
  const queryClient = useQueryClient();

  const getCourses = useMutation({
    mutationFn: (id) => CoursesGVid(id),
  });
  // useEffect(() => {
  //   queryClient.setQueryData("loader", true);
  //   getCourses.mutate(item?.user_id, {
  //     onSuccess: (data) => {
  //       queryClient.setQueryData("loader", false);
  //       setUser(data?.data?.user);
  //     },
  //     onError: (error) => {
  //       queryClient.setQueryData("loader", false);
  //       if (isAxiosUnprocessableEntityError(error)) {
  //         console.log(error);
  //       }
  //     },
  //   });
  // }, []);
  const navigate = useNavigate();
  return (
    <div
      className="wrap-card w-100 px-1"
      onClick={() => navigate(`/khoa-hoc-truc-tuyen/${item?.id}`)}
    >
      <div className="item-course course">
        <div className="box-img course-image-wr">
          <div className="icon-hot">Hot</div>
          <div className="course-img">
            <div
              className="image"
              style={{ backgroundImage: `url(${item?.linkVideo})` }}
            ></div>
          </div>
        </div>
        <div className="course-info">
          <div className="course-name">
            <span>{item?.tenKhoaHoc}</span>
          </div>
          <p className="course-teachers">
            Mô tả: <span>{item?.moTa}</span>
          </p>
          <div className="course-scorms">
            <p className="course-fee">
              <span>{item?.chapters ? item?.chapters : "0"}</span> Chapter
            </p>
            <p className="course-fee">
              <span>50</span> Câu hỏi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
