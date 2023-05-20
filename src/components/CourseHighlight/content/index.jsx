import SidebarInf from "./sidebarInf";

function Content({ data }) {
  // console.log(data.linkVideo);
  return (
    <div>
      <div className="content-wr w-100">
        <div className="content col-12 col-md-8">
          <div className="content-title">{data?.tenKhoaHoc}</div>
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

      <div className="content-wr d-block d-md-flex justify-content-between">
        <div className="content col-12 col-md-8">
          {/* <video
            controls
            autoPlay
            src={data?.linkVideo}
            className="w-100"
          /> */}
          <div className="image-course-detail" style={{backgroundImage: `url(${data?.linkVideo})`}}>
            {/* <img className="w-100" src={data?.linkVideo} alt="" /> */}
          </div>
          <p className="mt-2">
            <span style={{ color: "#ff6c00", fontWeight: "bold" }}>Lưu ý:</span>{" "}
            Trong trường hợp bạn không mở được video bài giảng này bằng trình
            duyệt Google Chrome, vui lòng{" "}
            <span className="td-cl">tải trình duyệt Firefox</span> để sử dụng
            hoặc làm theo hướng dẫn <span className="td-cl">tại đây.</span>
          </p>
        </div>
        <SidebarInf data={data} />
      </div>
    </div>
  );
}

export default Content;
