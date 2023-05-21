import "./DetailTeacher.scss";
import React, { useEffect, useMemo, useState } from "react";
import FormInfoTeacher from "../../components/form/formInfoTeacher";
import SliderCustom from "../../components/Slider";
import Card from "../../components/ContentCourse/card";
import { CoursesGVid } from "../../apis/Courses.api";
import { useLocation } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { isAxiosUnprocessableEntityError } from "../../utils/utils";
function DetailTeacher() {
  const [infoTeacher, setInfoTeacher] = useState({});
  const [courses, setCourse] = useState([]);
  const location = useLocation();
  const queryClient = useQueryClient();

  const id = location.pathname.split("/giao-vien/")[1];
  const customSetting = {
    slidesToShow: 1,
    autoplay: true,
    speed: 300,
  };

  const getCourses = useMutation({
    mutationFn: (id) => CoursesGVid(id),
  });

  useEffect(() => {
    queryClient.setQueryData("loader", true);
    getCourses.mutate(id, {
      onSuccess: (data) => {
        queryClient.setQueryData("loader", false);
        setInfoTeacher(data?.data?.user);
        setCourse(data?.data?.data);
      },
      onError: (error) => {
        queryClient.setQueryData("loader", false);
        if (isAxiosUnprocessableEntityError(error)) {
          console.log(error);
        }
      },
    });
  }, []);
  return (
    <div className="wrapper-detail">
      <div className="infomation pt-5">
        <div className="container d-flex">
          <FormInfoTeacher item={infoTeacher} />
        </div>
        <div className="container mt-5">
          <div className="list-course pb-5">
            <div className="title text-center mb-4">
              <h3>KHÓA HỌC CỦA TÔI</h3>
            </div>
            <div className="content">
              <SliderCustom customSetting={customSetting}>
                {courses.map((item, index) => (
                  <div className="card-course w-100 d-flex" key={index}>
                    <div className="col-3 p-3">
                      <Card item={item} />
                    </div>
                    <div className="col-9 p-3">
                      <div className="title">
                        {item?.tenKhoaHoc} -{" "}
                        {infoTeacher?.gioiTinh === "Nam" ? "Thầy" : "Cô"}{" "}
                        {infoTeacher?.hoTen}
                      </div>
                      <div className="content mt-4">
                        Sau quá trình ôn luyện toàn bộ kiến thức, các em học
                        sinh đang đến gần hơn với giai đoạn nước rút - giai đoạn
                        cần kiểm lại năng lực hiện tại của bản thân cũng như
                        được thực hành các kiến thức đã học vào làm đề thi. Khóa
                        học HM10 Luyện đề Ngữ văn TP. Hồ Chí Minh có cấu trúc
                        bám sát đề thi Ngữ văn vào 10 không chuyên những năm gần
                        đây, giúp các em học sinh rèn phương pháp, luyện kĩ năng
                        làm bài. Từ đó học sinh có thể chinh phục bài thi một
                        cách dễ dàng và nhẹ nhàng nhất. Hệ thống đề thi: gồm 10
                        đề được biên soạn kĩ càng dựa trên sự phân tích ma trận
                        đề thi những năm gần đây, đảm bảo bám sát cấu trúc đề
                        thi chính thức giúp các em có cái nhìn tổng quát nhất về
                        cấu trúc một đề thi. Video chữa 100% các câu hỏi có
                        trong đề thi, trong mỗi video đó, cô Quỳnh An sẽ khái
                        quát phương pháp làm từng dạng bài cũng như lưu ý lỗi
                        sai thường gặp trong từng dạng bài. Tham gia học HM10
                        Luyện đề và cùng Cô "phá đảo" kì thi tuyển sinh vào 10
                        các em nhé!
                      </div>
                    </div>
                  </div>
                ))}
              </SliderCustom>
              {courses.length === 0 && <h3 className="text-center">Chưa có khóa học</h3>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailTeacher;
