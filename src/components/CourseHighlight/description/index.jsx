import CourseDetail from "./courseDetail";
import { SidebarCourse } from "./sidebarCourse";

function ContentDescription({data}) {
  return (
    <div>
      <hr />
      <div className="content-wr mt-4">
        <div className="content d-block d-md-flex">
          <div className="course-description col-12 col-md-8">
            <div className="course-description-title mb-3">Mô tả khóa học</div>
            <div className="course-description-detail">
              Hướng dẫn học sinh cách tư duy về Hóa học chứ không đơn thuần là
              việc nhớ các kiến thức thuần túy. Các kiến thức trong bài giảng
              được sắp xếp tinh gọn, khoa học, sáng tạo khiến bài giảng trở nên
              sinh động, dễ hiểu. Khóa học Hóa học 11 sẽ giới thiệu cho học sinh
              về ion, các nguyên tố thuộc nhóm IVA, VA và hợp chất của chúng.
              Đặc biệt, học sinh sẽ bước đầu được tiếp cận với “thành phố đông
              dân” nhất của Hóa học thông qua các bài giảng về Hóa học hữu cơ
              11.
              <p>
                Cấu trúc khóa học Học tốt Hóa học 11 thông qua lộ trình học tập
                4 bước: Trang bị các nội dung một cách chi tiết và sáng tạo,
                giúp học sinh củng cố kiến thức, hiểu sâu và bài bản nội dung
                theo chương trình SGK Hóa học 11. Hệ thống câu hỏi luyện tập
                được xây dựng bám sát theo từng bài học, học sinh được thực hành
                ngay sau khi học video bài giảng thông qua hệ thống bài tập Hóa
                học trắc nghiệm. Hỏi đáp 247 dưới từng nội dung học giúp học
                sinh gỡ rối những khúc mắc ngay trong quá trình theo dõi nội
                dung học tập. Đánh giá kết thúc các nội dung theo từng chương,
                giúp học sinh nhìn nhận lại quá trình học để điều chỉnh cho giai
                đoạn học tiếp theo.
              </p>
            </div>
            <CourseDetail/>
          </div>
          <SidebarCourse/>
        </div>

      </div>
    </div>
  );
}

export default ContentDescription;
