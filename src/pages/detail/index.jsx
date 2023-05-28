import { useEffect, useState } from "react";
import CourseHighlight from "../../components/CourseHighlight";
import { useMutation, useQueryClient } from "react-query";
import { getCourse } from "../../apis/Courses.api";
import { useLocation } from "react-router";
import { isAxiosUnprocessableEntityError } from "../../utils/utils";

function DetailCourse() {
  const queryClient = useQueryClient();
  const location = useLocation();
  const id = location.pathname.split("khoa-hoc-truc-tuyen/")[1];
  const [count, setCount] = useState(1);
  const [data, setData] = useState({});
  const listMyCourses = JSON.parse(localStorage.getItem("myCourses")) || [];

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const getDetailCourse = useMutation({
    mutationFn: (id) => getCourse(id),
  });
  
  useEffect(() => {
    if (
      listMyCourses.some(
        (course) => course.idKhoaHoc === parseInt(id) && course.trangThai === 0
      )
    ) {
      console.log("Có rồi");
      const course = listMyCourses.filter(
        (course) => course.idKhoaHoc === parseInt(id) && course.trangThai === 0
      )[0];
      var dataSend = {
        chapters: course.my_chapter,
        giaCa: course.giaCa,
        id: course.idKhoaHoc,
        instructor: {
          id: course.giaoVienID,
          hoTen: "",
        },
        linkVideo: course.linkVideo,
        moTa: course.moTa,
        tenKhoaHoc: course.tenKhoaHoc,
        trangThai: course.trangThai,
        user_id: course.giaoVienID,
      };
      console.log(dataSend);
      dataSend.chapters.map((item) => {
        console.log(item);
        item.lessons = item.my_lessons;
        item.lessons.map((childItem) => {
          childItem.id = childItem.idBaiHoc
        });
      });
      setData(dataSend);
    } else if (count === 1) {
      console.log(count);
      queryClient.setQueryData("loader", true);
      setCount(count + 1);
      getDetailCourse.mutate(id, {
        onSuccess: (data) => {
          queryClient.setQueryData("loader", false);
          console.log(data);
          setData(data?.data?.data);
        },
        onError: (error) => {
          queryClient.setQueryData("loader", false);
          if (isAxiosUnprocessableEntityError(error)) {
            console.log(error);
          }
        },
      });
    }
  }, []);
  return (
    <div className="wrapper-detail">
      <div className="container w-100">
        <CourseHighlight data={data} />
      </div>
    </div>
  );
}

export default DetailCourse;
