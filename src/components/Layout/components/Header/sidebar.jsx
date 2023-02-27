import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

export const Sidebar = ({ name, ...props }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow} className="me-2" style={{marginTop: "10px"}}>
          {name}
        </Button> */}
      <div className="sidenav-toggler" onClick={handleShow}  style={{marginTop: "20px"}}>
        <div className="sidenav-toggler-inner m-auto">
          <i className="sidenav-toggler-line"></i>
          <i className="sidenav-toggler-line"></i>
          <i className="sidenav-toggler-line"></i>
        </div>
      </div>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>HOCMAI</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="sidebar-option">Trang chủ</div>
          <div className="sidebar-option">Giới thiệu</div>
          <div className="sidebar-option">Giáo viên</div>
          <div className="sidebar-option">Hướng nghiệp</div>
          <div className="sidebar-option">Tư vấn</div>
          <div className="sidebar-option">Học phí</div>
          <div className="sidebar-option">Hỗ trợ</div>
          <div className="sidebar-option">Đăng nhập</div>
          <div className="sidebar-option">Đăng ký</div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
