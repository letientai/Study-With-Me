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

  const [data, setData] = useState({})

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
        setData(data?.data?.data)
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
      <div className="container w-100">
        <CourseHighlight data={data}/>
      </div>
    </div>
  );
}

export default DetailCourse;
