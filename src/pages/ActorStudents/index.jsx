
import FormInfoTeacher from "../../components/form/formInfoTeacher";
// import SliderCustom from "../../components/Slider";
// import Card from "../../components/ContentCourse/card";
function ActorStudents() {
  // const customSetting = {
  //   slidesToShow: 1,
  //   autoplay: true,
  //   speed: 3000,
  // };
  const user = JSON.parse(localStorage.getItem("user"))

  return (
    <div className="wrapper-detail">
      <div className="infomation py-5">
        <div className="container d-flex">
          <FormInfoTeacher item={user}/>
        </div>
        {/* <div className="container mt-5">
          <div className="list-course pb-5">
            <div className="title text-center mb-4" >
              <h3>KHÓA HỌC CỦA TÔI</h3>
            </div>
            <div className="content">
             
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default ActorStudents;
