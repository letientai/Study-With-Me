import React from "react";
import "./MyCourses.scss";
import { useMutation, useQueryClient } from "react-query";
import { getMyCourses } from "../../apis/Courses.api";
import { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export const MyCourses = () => {
  const queryClient = useQueryClient();
  const [myCoursesList, setMyCoursesList] = useState([]);

  const getCourses = useMutation({
    mutationFn: (a) => getMyCourses(),
  });
  useEffect(() => {
    fetchMyCourses();
  }, []);

  const fetchMyCourses = () => {
    queryClient.setQueryData("loader", true);
    getCourses.mutate("a", {
      onSuccess: (data) => {
        console.log(data);
        setMyCoursesList(data.data.data);
        queryClient.setQueryData("loader", false);
      },
      onError: (error) => {
        queryClient.setQueryData("loader", false);
        console.log(error);
      },
    });
  };
  return (
    <div className="container py-4">
      <div className="title-MyCourses">
        <b>Khóa học của tôi</b>
      </div>
      <div className="content">
        <div className="list-myCourses">
          {myCoursesList?.map((item, index) => (
            <div className="col-md-4 col-xl-3 col-6 px-1 pt-3" key={index}>
              <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src={item?.linkVideo} />
                <Card.Body>
                  <Card.Title>{item.tenKhoaHoc}</Card.Title>
                  <Card.Text>
                    <>Giảng viên:</>
                    <br />
                    Trạng thái: <b className="cl-red">Chưa kích hoạt</b>
                  </Card.Text>

                  <Button variant="primary">{item?.trangThai === 1 ? "Kích hoạt" : "Xem chi tiết"}</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
