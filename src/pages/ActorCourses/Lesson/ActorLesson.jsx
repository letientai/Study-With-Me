import React, { useEffect, useState } from "react";
import { faFileArrowDown, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form, Row, Col } from "react-bootstrap";
import {
  CoursesGVid,
  getChapterByIdCourse,
  addLesson,
  updateLesson,
} from "../../../apis/Courses.api";
import { useMutation, useQueryClient } from "react-query";
import { isAxiosUnprocessableEntityError } from "../../../utils/utils";
import axios from "axios";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

function ActorLesson() {
  const user = JSON.parse(localStorage.getItem("user"));
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const location = useLocation();
  const checkUpdate = location.pathname !== "/add-lesson";

  const [courses, setCourses] = useState([]);
  const [chapter, setChapter] = useState([]);
  const [srcVideo, setSrcVideo] = useState({});
  const [urlVideo, setUrlVideo] = useState("");
  const [idChapter, setIdchapter] = useState(0);
  const [idCourse, setIdCourse] = useState(0);
  const [idLesson, setIdLesson] = useState(0);
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
  const editLesson = useMutation({
    mutationFn: (body) => updateLesson((parseInt(location.pathname.split("/")[4])),body),
  });
  useEffect(() => {
    var getChapterWhenUpdate = null;
    queryClient.setQueryData("loader", true);
    if (checkUpdate) {
      getChapterWhenUpdate = getChapterByIdCourse(
        location.pathname.split("/")[2]
      );
    }
    Promise.all([CoursesGVid(user?.id), getChapterWhenUpdate])
      .then((responses) => {
        // Xử lý kết quả từ responses[0] và responses[1] ở đây
        setCourses(responses[0]?.data?.data);
        if (checkUpdate) {
          var litsLesson = [];
          setChapter(responses[1]?.data?.data);
          setIdCourse(location.pathname.split("/")[2]);
          setIdchapter(location.pathname.split("/")[3]);
          responses[1]?.data?.data?.filter((x) => {
            litsLesson.push(...x.lessons);
          });
          setNameLessson(
            litsLesson.filter(
              (x) => x.id === parseInt(location.pathname.split("/")[4])
            )[0]?.tenBaiHoc
          );
          setUrlVideo(
            litsLesson.filter(
              (x) => x.id === parseInt(location.pathname.split("/")[4])
            )[0]?.linkVideo
          );
          setStatusLesson(
            litsLesson.filter(
              (x) => x.id === parseInt(location.pathname.split("/")[4])
            )[0]?.trangThai
          );
        }
        console.log("done", responses);
        queryClient.setQueryData("loader", false);
      })
      .catch((error) => {
        console.log(error);
        queryClient.setQueryData("loader", false);
        // Xử lý lỗi ở đây
      });
  }, []);

  const handle = (e) => {
    setIdCourse(e.target.value);
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
    const check = idChapter && nameLessson;
    console.log(idChapter, nameLessson);
    var objectVal = {};
    objectVal.tenBaiHoc = nameLessson;
    objectVal.trangThai = statusLesson;
    objectVal.moTaBaiTap = idChapter;
    objectVal.tenBaiTap = idChapter;
    objectVal.chapter_id = idChapter;
    if (check) {
      if(!checkUpdate){
        if (srcVideo?.name) {
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
              console.log(res);
              objectVal.linkVideo = res?.data?.secure_url;
              postLesson(objectVal);
            })
            .catch((err) => {
              console.log(err);
              toast.error("File video không đúng định dạng")
              queryClient.setQueryData("loader", false);
            });
        } else {
          toast.warn("Vui lòng upload video!");
        }
      }else{
        console.log(objectVal);
        objectVal.linkVideo = urlVideo
        if(srcVideo?.name){
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
              console.log(res);
              objectVal.linkVideo = res?.data?.secure_url;
              updateLessonById(objectVal);
            })
            .catch((err) => {
              console.log(err);
              toast.error("Đã xảy ra lỗi vui lòng thử lại sau")
              queryClient.setQueryData("loader", false);
            });
        }else{
          updateLessonById(objectVal)
        }

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
        navigate("/Study-With-Me");
      },
      onError: (error) => {
        queryClient.setQueryData("loader", false);
        console.log(error);
      },
    });
  };
  const updateLessonById = (value) => {
    console.log(value);
    queryClient.setQueryData("loader", true);
    editLesson.mutate(value, {
      onSuccess: (data) => {
        console.log(data);
        queryClient.setQueryData("loader", false);
        toast.success(data.data.message);
        navigate(`/listCourse/${(parseInt(location.pathname.split("/")[2]))}`);
      },
      onError: (error) => {
        queryClient.setQueryData("loader", false);
        console.log(error);
      },
    });
  };
  return (
    <div className="bg-white">
      <div className="container">
        <div className="title py-3">
          <h3 className=" text-start fs-4 align-items-center">
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
                        <p className="title text-align-left">Khóa học</p>
                        <select
                          className="field-input"
                          placeholder="Giới tính"
                          onChange={handle}
                          value={idCourse}
                          disabled={checkUpdate}
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
                          value={idChapter}
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
                          <Form.Label>Tên bài học</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Tên khóa học"
                            onChange={(e) => setNameLessson(e.target.value)}
                            value={nameLessson}
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
                          value={statusLesson}
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
export default ActorLesson;
