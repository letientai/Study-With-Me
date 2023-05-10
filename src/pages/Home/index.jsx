import { useQuery, useQueryClient } from "react-query";
import { ContentCourse } from "../../components/ContentCourse";
import Slide from "../../components/Slide";
import { getAllcourses } from "../../apis/Courses.api";
import { useEffect } from "react";

function Home() {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["allCourses"],
    queryFn: () => getAllcourses(),
    staleTime: 60 * 1000,
  });
  // console.log(isLoading);

  useEffect(() => {
    queryClient.setQueryData("loader", isLoading);
  }, [isLoading]);

  return (
    <div className="wrapper-home">
      <div className="slide">
        <Slide />
      </div>
      <div className="content" style={{ marginTop: "100px" }}>
        <ContentCourse data={data}/>
      </div>
    </div>
  );
}

export default Home;
