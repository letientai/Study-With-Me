import { useNavigate } from "react-router-dom";

function BottomHeader() {
  const navigate = useNavigate()
  return (
    <div className="bottom-header d-none d-md-block">
      <div className="container">
        <div className="row no-mg">
          <nav className="w-100 box-menu-top">
            <ul className="top-menu clear-list">
                <li>Giới thiệu</li>
                <li onClick={() => navigate("/giao-vien")}>Giáo viên</li>
                <li>Phòng thi</li>
                <li>Hướng nghiệp</li>
                <li>Thư viện</li>
                <li>Học phí</li>
                <li>Hỗ trợ</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default BottomHeader;
