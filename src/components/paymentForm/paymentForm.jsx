import React from "react";
import "./paymentForm.scss";
import { Formik, FastField, Form } from "formik";

import { PaymentSchema } from "./validate";
import { useLocation, useNavigate } from "react-router-dom";
import { paymentCourse } from "../../apis/Courses.api";
import { useMutation, useQueryClient } from "react-query";
import { omit } from "lodash";
import { toast } from "react-toastify";

export const PaymentForm = (prop) => {
  const data = prop.data;
  const location = useLocation();
  const id = location.pathname.split("/thanh-toan/")[1];
  const user = JSON.parse(localStorage.getItem("user"));
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const payment = useMutation({
    mutationFn: (field) => paymentCourse(id, field),
  });
  const initialValues = {
    hoTen: "",
    email: user?.email || "",
    soDienThoai: "",
    diaChi: "",
  };

  const turnOffForm = () => {
    prop.turnOff(false);
  };

  const onAddOrder = async (values) => {
    console.log(omit(values, "email"));
    const field = omit(values, "email");
    queryClient.setQueryData("loader", true);
    payment.mutate(field, {
      onSuccess: (data) => {
        queryClient.setQueryData("loader", false);
        toast.success("Đăng ký khóa học thành công!");
        navigate("/Study-With-Me")
      },
      onError: (error) => {
        queryClient.setQueryData("loader", false);
        toast.info("Đăng ký khóa học thất bại! Vui lòng thử lại sau");
        console.log(error);
      },
    });
  };
  return (
    <div className="payment-container">
      <div className="payment">
        <div className="right col-5">
          <div className="image"></div>
        </div>
        <div className="left col-7">
          <div className="form">
            <div className="header">
              <h2 className="header_text">Xác nhận đơn hàng</h2>
              <h4 className="header_text">Địa chỉ giao hàng</h4>
            </div>
            <div className="content">
              <Formik
                initialValues={initialValues}
                validationSchema={PaymentSchema}
                onSubmit={onAddOrder}
              >
                {({ errors, touched }) => (
                  <Form className="form_fields">
                    <div className="fields row mb-2">
                      <div className="field col">
                        <FastField
                          name="hoTen"
                          placeholder="Họ và tên"
                          className="input"
                          type="text"
                        />
                        {errors.hoTen && touched.hoTen ? (
                          <div className="formError">{errors.hoTen}</div>
                        ) : null}
                      </div>
                      <div className="field col">
                        <FastField
                          name="email"
                          placeholder="Email"
                          className="input"
                          type="text"
                          disabled
                        />
                        {errors.email && touched.email ? (
                          <div className="formError">{errors.email}</div>
                        ) : null}
                      </div>
                    </div>
                    <div className="fields row mb-2">
                      <div className="field col">
                        <FastField
                          name="soDienThoai"
                          placeholder="Số điện thoại"
                          className="input"
                          type="text"
                        />
                        {errors.soDienThoai && touched.soDienThoai ? (
                          <div className="formError">{errors.soDienThoai}</div>
                        ) : null}
                      </div>
                      <div className="field col">
                        <FastField
                          name="diaChi"
                          placeholder="Địa chỉ"
                          className="input"
                          type="text"
                        />
                        {errors.diaChi && touched.diaChi ? (
                          <div className="formError">{errors.diaChi}</div>
                        ) : null}
                      </div>
                    </div>
                    <div className="fields py-2">
                      <div className="field ms-3">
                        <button type="onSubmit" className="btn btn-accept">
                          Xác nhận
                        </button>
                        <button
                          className="btn btn-cancel"
                          onClick={turnOffForm}
                        >
                          Hủy
                        </button>
                      </div>
                      {/* </FormControl> */}
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            <div className="total_price">
              <div className="left">
                <p>Hình thức thanh toán: Trực tiếp</p>
              </div>
              <div className="right">
                <div className="general-info-item">
                  <span>Phí vận chuyển:</span>
                  <span>12.000đ</span>
                  <span>0đ</span>
                </div>
                <div className="general-info-item">
                  <span>Giảm giá phí vận chuyển:</span>
                  <span>0đ</span>
                </div>
                <div className="general-info-item">
                  <span>Giảm giá tiền hàng:</span>
                  <span>0đ</span>
                </div>
                <div className="general-info-item">
                  <span style={{ fontWeight: "bolder" }}>Tổng thanh toán:</span>

                  <span style={{ fontWeight: "bolder", color: "#fd37ae" }}>
                    {(data?.giaCa + 12000)
                      ?.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    đ
                  </span>

                  <span style={{ fontWeight: "bolder", color: "#fd37ae" }}>
                    0đ
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
