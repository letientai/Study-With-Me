import { useEffect } from "react";
import CourseHighlight from "../../components/CourseHighlight";

function DetailCourse() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="wrapper-detail">
      <div className="container w-100">
        <CourseHighlight />
      </div>
    </div>
  );
}

export default DetailCourse;
