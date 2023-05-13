import React, { useEffect, useState } from "react";
import { faFileArrowDown, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form, Row, Col } from "react-bootstrap";
import {
  CoursesGVid,
  getChapterByIdCourse,
  addLesson,
} from "../../apis/Courses.api";
import { useMutation, useQueryClient } from "react-query";
import { isAxiosUnprocessableEntityError } from "../../utils/utils";
import axios from "axios";
import { toast } from "react-toastify";

function ChapterAdd() {
  const user = JSON.parse(localStorage.getItem("user"));
  const queryClient = useQueryClient();
  const [courses, setCourses] = useState([]);
  const [chapter, setChapter] = useState([]);
  const [srcVideo, setSrcVideo] = useState({});
  const [urlVideo, setUrlVideo] = useState("");
  const [idChapter, setIdchapter] = useState(0);
  const [nameLessson, setNameLessson] = useState("");
  const [statusLesson, setStatusLesson] = useState(1);
  const getCourse = useMutation({
    mutationFn: (id) => CoursesGVid(id),
  });
  const getChapter = useMutation({
    mutationFn: (id) => getChapterByIdCourse(id),
  });
  const createLesson = useMutation({
    mutationFn: (body) => addLesson(body),
  });
  useEffect(() => {
    queryClient.setQueryData("loader", true);
    getCourse.mutate(user?.id, {
      onSuccess: (data) => {
        queryClient.setQueryData("loader", false);
        console.log(data);
        setCourses(data?.data?.data);
      },
      onError: (error) => {
        queryClient.setQueryData("loader", false);
        if (isAxiosUnprocessableEntityError(error)) {
          console.log(error);
        }
      },
    });
  }, []);
  const handle = (e) => {
    console.log(e.target.value);
    queryClient.setQueryData("loader", true);
    getChapter.mutate(e.target.value, {
      onSuccess: (data) => {
        console.log(data);
        queryClient.setQueryData("loader", false);
        setChapter(data?.data?.data);
      },
      onError: (error) => {
        queryClient.setQueryData("loader", false);
        if (isAxiosUnprocessableEntityError(error)) {
          console.log(error);
        }
      },
    });
  };

  const handleVideo = (e) => {
    console.log(e.target.files[0]);
    setSrcVideo(e.target.files[0]);
    setUrlVideo(URL.createObjectURL(e.target.files[0]));
  };
  const handleChapter = (e) => {
    setIdchapter(e.target.value);
  };
  const handleSubmit = () => {
    const check = idChapter && nameLessson && statusLesson;
    var objectVal = {};
    objectVal.tenBaiHoc = nameLessson;
    objectVal.trangThai = statusLesson;
    objectVal.moTaBaiTap = idChapter;
    objectVal.tenBaiTap = idChapter;
    objectVal.chapter_id = idChapter;
    if (check) {
      if (Object.keys(srcVideo).length !== 0 ) {
        queryClient.setQueryData("loader", true);
        var bodyFormData = new FormData();
        bodyFormData.append("file", srcVideo);
        bodyFormData.append("upload_preset", "j83n0nkq");
        bodyFormData.append("public_id", srcVideo.name);
        bodyFormData.append("api_key", "793869286496228");
        bodyFormData.append("folder", "courses");
        axios
          .post(
            `https://api.cloudinary.com/v1_1/dxphlzgvx/video/upload`,
            bodyFormData
          )
          .then(async (res) => {
            objectVal.linkVideo = res?.data?.secure_url;
            postLesson(objectVal);
          })
          .catch((err) => {
            console.log(err);
            queryClient.setQueryData("loader", false);
          });
      } else {
        toast.warn("Vui lòng upload video!");
      }
    } else {
      toast.warn("Vui lòng nhập đủ thông tin!");
    }
  };

  const postLesson = (value) => {
    console.log(value);
    queryClient.setQueryData("loader", true);
    createLesson.mutate(value, {
      onSuccess: (data) => {
        console.log(data);
        queryClient.setQueryData("loader", false);
        toast.success(data.data.message);
      },
      onError: (error) => {
        queryClient.setQueryData("loader", false);
        if (isAxiosUnprocessableEntityError(error)) {
          console.log(error);
        }
      },
    });
  };
  return (
    <div className="bg-white">
      <div className="container">
        <div className="title py-3">
          <h3 className=" fs-4 align-items-center">
            {" "}
            <FontAwesomeIcon icon={faHouse} className="icon" />
            Trang Chủ &gt; Thêm Bài Học
          </h3>
        </div>
        <div
          className="content py-4 mb-3"
          style={{ backgroundColor: "#f7f8fa" }}
        >
          <Form>
            <Col md="12">
              <Row>
                <Col md="8">
                  <Row>
                    <Col md="6">
                      <div className="form-group d-block">
                        <p className="title">Khóa học</p>
                        <select
                          className="field-input"
                          placeholder="Giới tính"
                          onChange={handle}
                        >
                          <option value={0}>Chọn khóa học</option>
                          {courses?.map((item, index) => (
                            <option value={item?.id} key={index}>
                              {item?.tenKhoaHoc}
                            </option>
                          ))}
                        </select>
                        {/* {errors.hoTen && touched.hoTen ? (
                                  <div className="formError">
                                    {errors.hoTen}
                                  </div>
                                ) : null} */}
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="form-group d-block">
                        <p className="title">Chương học</p>
                        <select
                          className="field-input"
                          onChange={handleChapter}
                        >
                          {chapter?.length === 0 ? (
                            <option>Chưa có chương học</option>
                          ) : (
                            <option>Chọn chương học</option>
                          )}
                          {chapter?.map((item, index) => (
                            <option value={item.id} key={index}>
                              {item.tenChuongHoc}
                            </option>
                          ))}
                        </select>
                        {/* {errors.gioiTinh && touched.gioiTinh ? (
                                  <div className="formError">
                                  {errors.gioiTinh}
                                  </div>
                                ) : null} */}
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col md="6">
                      <div className="form-group d-block">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Tên khóa học</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Tên khóa học"
                            onChange={(e) => setNameLessson(e.target.value)}
                          />
                        </Form.Group>
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="form-group d-block">
                        <p className="title">Trạng thái</p>
                        <select
                          className="field-input"
                          onChange={(e) => setStatusLesson(e.target.value)}
                        >
                          <option value={1}>Miễn phí</option>
                          <option value={0}>Tính phí</option>
                        </select>
                      </div>
                    </Col>
                  </Row>
                  <Button
                    className="btn-fill pull-right mt-3 mx-2"
                    variant="info"
                    onClick={handleSubmit}
                  >
                    Đăng
                  </Button>
                </Col>
                <Col md="4">
                  <Row className="mt-2">
                    <Col md="12">
                      <label>Upload video</label>
                      <video
                        controls
                        autoPlay
                        src={urlVideo}
                        className="w-100"
                      />
                      <div className="small font-italic text-muted mb-2">
                        video no larger than 5 MB
                      </div>
                      <div className="small font-italic text-muted">
                        Upload Tại Đây
                      </div>
                      <div className="file-upload">
                        <input type="file" onChange={handleVideo} />
                        <FontAwesomeIcon icon={faFileArrowDown} fontSize={30} />
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default ChapterAdd;
