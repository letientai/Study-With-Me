import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import {
  getCommentsByLesson,
  getCourse,
  postComment,
  replyComment,
} from "../../apis/Courses.api";
import { useLocation } from "react-router";
import { isAxiosUnprocessableEntityError } from "../../utils/utils";
import CourseDetail from "../../components/CourseHighlight/description/courseDetail";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Lesson.scss";
import http from "../../utils/https";
export const Lesson = () => {
  const queryClient = useQueryClient();
  const user = JSON.parse(localStorage.getItem("user"));
  const location = useLocation();
  const navigate = useNavigate();
  const idCourse = location.pathname
    .split("khoa-hoc/")[1]
    .split("/bai-hoc/")[0];
  const idLesson = location.pathname.split("bai-hoc/")[1];

  const [data, setData] = useState({});
  const [urlVideo, setUrlVideo] = useState("");
  const [titleLesson, setTitleLesson] = useState("");
  const [comments, setComments] = useState([]);
  const [textComment, setTextComment] = useState("");
  const [parentIdComment, setParentIdComment] = useState(null);
  const [nameReply, setNameReply] = useState("");

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location]);
  const getDetailCourse = useMutation({
    mutationFn: (idCourse) => getCourse(idCourse),
  });
  const getComments = useMutation({
    mutationFn: (idLesson) => getCommentsByLesson(idLesson),
  });
  const addComment = useMutation({
    mutationFn: (field) => postComment(idLesson, field),
  });
  const replyCommentUser = useMutation({
    mutationFn: (parentIdComment) =>
      replyComment(idLesson, parentIdComment, textComment),
  });
  useEffect(() => {
    try {
      queryClient.setQueryData("loader", true);
      Promise.all([fetchDataCourse(), fetchDataComments()]);
    } finally {
      queryClient.setQueryData("loader", false);
    }
  }, [location]);

  const fetchDataCourse = () => {
    queryClient.setQueryData("loader", true);
    setData({});
    getDetailCourse.mutate(idCourse, {
      onSuccess: (data) => {
        console.log(data);
        setData(data?.data?.data);
        queryClient.setQueryData("loader", false);
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError(error)) {
          console.log(error);
          queryClient.setQueryData("loader", false);
        }
      },
    });
  };

  const fetchDataComments = () => {
    setComments([1]);
    queryClient.setQueryData("loader", true);
    getComments.mutate(idLesson, {
      onSuccess: (data) => {
        setComments(data?.data?.data);
        queryClient.setQueryData("loader", false);
      },
      onError: (error) => {
        console.log(error);
        queryClient.setQueryData("loader", false);
      },
    });
  };

  const sentIdLesson = (itemChild) => {
    navigate(`/khoa-hoc/${idCourse}/bai-hoc/${itemChild.id}`);
    setUrlVideo(itemChild?.linkVideo);
    setTitleLesson(itemChild?.tenBaiHoc);
    fetchDataComments();
  };

  const addCommentToLesson = () => {
    const field = {
      noiDung: textComment,
    };
    queryClient.setQueryData("loader", true);
    addComment.mutate(field, {
      onSuccess: (data) => {
        console.log(data);
        setTextComment("");
        fetchDataComments();
      },
      onError: (error) => {
        console.log(error);
        queryClient.setQueryData("loader", false);
      },
    });
  };

  const replyCommentToLesson = () => {
    queryClient.setQueryData("loader", true);
    // replyCommentUser.mutate(parentIdComment, {
    //   onSuccess: (data) => {
    //     console.log("ahihi",data);
    //     queryClient.setQueryData("loader", true);
    //     setTextComment("");
    //   },
    //   onError: (error) => {
    //     console.log(error);
    //     queryClient.setQueryData("loader", false);
    //   },
    // });
    console.log(idCourse,parentIdComment,textComment);
    http
      .post(
        `https://deploy-production-fe48.up.railway.app/api/lesson/${idCourse}/comments/${parentIdComment}/replies`,
        {
          noiDung: textComment,
        }
      )
      .then(async (res) => {
        console.log("ahihi", res);
        setTextComment("");
        setParentIdComment(null)
        queryClient.setQueryData("loader", false);
        fetchDataComments()
      })
      .catch((err) => {
        console.log(err);
        queryClient.setQueryData("loader", false);
      });
  };
  const handleComment = (e) => {
    if (e.key === "Enter") {
      if (!parentIdComment) {
        addCommentToLesson();
      } else {
        console.log("ĐÚng");
        replyCommentToLesson();
      }
    }
  };
  return (
    <div className=" container">
      <div className="title pt-2">
        <div className="content col-12">
          <div className="content-title">
            <h2>{data?.tenKhoaHoc}</h2>
          </div>
          <div className="content-description">
            Kiến thức {data?.tenKhoaHoc} quá khó khiến em không biết bắt đầu từ
            đâu? Hay đơn giản em đang muốn tìm kiếm
            <span className="td-cl">
              <b> {data?.tenKhoaHoc} </b>
            </span>
            chất lượng với hệ thống BTTL phong phú? Vậy thì hãy bắt đầu ngay với
            chương trình {data?.tenKhoaHoc} nhé!
          </div>
          <div className="content-teacher">
            <h4 className="td-cl mt-2">{titleLesson}</h4>{" "}
          </div>
        </div>
      </div>
      <div className="content d-flex mt-4 justify-content-between">
        <div className="col-7">
          <video controls className="w-100" src={urlVideo}></video>
          <div className="course-description-title mb-3 mt-3">Bình luận </div>
          <div className="course-description-detail">
            {comments?.map((item, index) => (
              <div key={index}>
                <div className="top d-flex mt-2">
                  <div
                    className="avatar"
                    style={{ backgroundImage: `url(${item?.user?.avatar})` }}
                  ></div>
                  <div className="content-comment mt-2">
                    <div className="d-flex">
                      <div className="name-user me-2">
                        {item?.user?.hoTen}:{" "}
                      </div>
                      <div className="content">{item?.noiDung}</div>
                    </div>
                    {!item?.parent_id && (
                      <div
                        className="btn-reply td-cl"
                        onClick={() => {
                          setNameReply(item?.user?.hoTen);
                          setParentIdComment(item.id);
                        }}
                      >
                        Phản hồi
                      </div>
                    )}
                  </div>
                </div>
                {item?.replies?.map((item, index) => (
                  <div
                    className="mb-3 top d-flex mt-1"
                    key={index}
                    style={{
                      marginLeft: "20px",
                      paddingLeft: "25px",
                      borderLeft: `1px solid rgb(180 176 176)`,
                    }}
                  >
                    <div
                      className="avatar"
                      style={{ backgroundImage: `url(${item?.user.avatar})` }}
                    ></div>
                    <div className="content-comment mt-2">
                      <div className="d-flex">
                        <div className="name-user me-2">
                          {item?.user?.hoTen}:{" "}
                        </div>
                        <div className="content">{item?.noiDung}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
            {user && (
              <div className="comment mt-4">
                {parentIdComment && (
                  <div className="reply d-flex align-items-center">
                    <span className="td-cl">Trả lời: </span>
                    {nameReply}
                    <div
                      className="btn-cancel"
                      onClick={() => {
                        setParentIdComment(null);
                        setNameReply("");
                      }}
                    >
                      x
                    </div>
                  </div>
                )}
                <div className="field-comment mt-1 d-flex">
                  <div
                    className="avatar"
                    style={{ backgroundImage: `url(${user?.avatar})` }}
                  ></div>
                  <div className="input-comment">
                    <input
                      value={textComment}
                      onChange={(e) => setTextComment(e.target.value)}
                      onKeyDown={handleComment}
                      type="text"
                      placeholder="Viết bình luận..."
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="action_comment"></div>
        </div>
        <div className="col-4">
          <CourseDetail data={data} sentIdLesson={sentIdLesson} />
        </div>
      </div>
    </div>
  );
};
