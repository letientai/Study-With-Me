import SidebarInf from "./sidebarInf";


function Content() {
  return (
    <div>
      <div className="content-wr w-100">
        <div className="content col-12 col-md-8">
          <div className="content-title">Học tốt hóa học 11</div>
          <div className="content-description">
            Kiến thức Hóa học 11 quá khó khiến em không biết bắt đầu từ đâu? Hay
            đơn giản em đang muốn tìm kiếm
            <a className="td-cl" href="#">
              <b> khóa học Hóa lớp 11 online </b>
            </a>
            chất lượng với hệ thống BTTL phong phú? Vậy thì hãy bắt đầu ngay với
            chương trình Học tốt Hóa học 11 của thầy Vũ Khắc Ngọc teen nhé!
          </div>
          <div className="content-teacher">
            Giáo viên:{" "}
            <a className="td-cl" href="">
              AHC
            </a>{" "}
          </div>
        </div>
      </div>

      <div className="content-wr d-block d-md-flex justify-content-between">
        <div className="content col-12 col-md-8">
          <video controls autoPlay src="https://youtu.be/A2NwdcVfxHg?t=12" className="w-100" />
          <p className="mt-2">
            <span style={{ color: "#ff6c00", fontWeight: "bold" }}>Lưu ý:</span>{" "}
            Trong trường hợp bạn không mở được video bài giảng này bằng trình
            duyệt Google Chrome, vui lòng{" "}
            <a href="#" className="td-cl">
              tải trình duyệt Firefox
            </a>{" "}
            để sử dụng hoặc làm theo hướng dẫn{" "}
            <a href="#" className="td-cl">
              tại đây.
            </a>
          </p>
        </div>
        <SidebarInf />
      </div>
    </div>
  );
}

export default Content;
