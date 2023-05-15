import React from "react";
import "./MyCourses.scss";
import { useMutation, useQueryClient } from "react-query";
import { getMyCourses } from "../../apis/Courses.api";
import { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
export const MyCourses = () => {
  const queryClient = useQueryClient();
  const [myCoursesList, setMyCoursesList] = useState([]);
  const [dataUpdate, setDataUpdate] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        // setMyCoursesList(data?.data?.data);
        queryClient.setQueryData("loader", false);
      },
      onError: (error) => {
        queryClient.setQueryData("loader", false);
        console.log(error);
      },
    });
  };

  const handleMyCourse = (item) => {
    if (item?.trangThai === 1) {
      setDataUpdate(item);
      handleShow();
    }
  };

  const activate = () =>{

  }
  return (
    <div className="container py-4">
      {/* <FormCourseActivation dataUpdate={dataUpdate}/> */}
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
                  <Card.Title className="titleCourse">
                    {item.tenKhoaHoc}
                  </Card.Title>
                  <Card.Text>
                    <>Giảng viên:</>
                    <br />
                    Trạng thái: <b className="cl-red">Chưa kích hoạt</b>
                  </Card.Text>
                  <Button
                    onClick={() => handleMyCourse(item)}
                    variant={item?.trangThai === 1 ? "danger" : "primary"}
                  >
                    {item?.trangThai === 1 ? "Kích hoạt" : "Xem chi tiết"}
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={true}>
        <Modal.Header closeButton>
          <Modal.Title>Nhập mã kích hoạt</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            id="activationCode"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Hủy
          </Button>
          <Button variant="primary" onClick={activate}>Kích hoạt</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
