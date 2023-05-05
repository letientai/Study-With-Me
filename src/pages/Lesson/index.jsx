import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { getCourse } from "../../apis/Courses.api";
import { useLocation } from "react-router";
import { isAxiosUnprocessableEntityError } from "../../utils/utils";
import CourseDetail from "../../components/CourseHighlight/description/courseDetail";

export const Lesson = () => {
  const queryClient = useQueryClient();
  const location = useLocation();
  const id = location.pathname.split("bai-hoc/")[1];

  const [data, setData] = useState({});

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const getDetailCourse = useMutation({
    mutationFn: (id) => getCourse(id),
  });
  useEffect(() => {
    queryClient.setQueryData("loader", true);
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
  }, []);
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
            Giáo viên: <span className="td-cl">AHC</span>{" "}
          </div>
        </div>
      </div>
      <div className="content d-flex mt-4 justify-content-between">
        <div className="col-7">
          <video controls className="w-100" src={data?.linkVideo}></video>
          <div className="course-description-title mb-3 mt-3">Mô tả khóa học</div>
          <div className="course-description-detail">
            Hướng dẫn học sinh cách tư duy về Hóa học chứ không đơn thuần là
            việc nhớ các kiến thức thuần túy. Các kiến thức trong bài giảng được
            sắp xếp tinh gọn, khoa học, sáng tạo khiến bài giảng trở nên sinh
            động, dễ hiểu. Khóa học Hóa học 11 sẽ giới thiệu cho học sinh về
            ion, các nguyên tố thuộc nhóm IVA, VA và hợp chất của chúng. Đặc
            biệt, học sinh sẽ bước đầu được tiếp cận với “thành phố đông dân”
            nhất của Hóa học thông qua các bài giảng về Hóa học hữu cơ 11.
           
          </div>
        </div>
        <div className="col-4">
          <CourseDetail />
        </div>
      </div>
    </div>
  );
};
