import Header from "./Header";
import "./CourseHighlight.scss";
import Content from "./content";
import ContentDescription from "./description";
function CourseHighlight({data}) {
  return (
    <div>
      <Header data={data}/>
      <Content data={data}/>
      <ContentDescription data={data}/>
    </div>
  );
}

export default CourseHighlight;
