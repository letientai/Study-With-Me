import React from "react";
import chevronRight from "../../assets/Icon/chevron-right.svg";
import iconCheckout from "../../assets/Icon/icon-checkout.svg";
import iconCheckoutVouucher from "../../assets/Icon/icon-checkout-system-vouucher.svg";
import iconCheckoutPayment from "../../assets/Icon/icon-checkout-payment.svg";
import "./Checkout.scss";
import { useLocation } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { getCourse } from "../../apis/Courses.api";
import { useEffect } from "react";
import { useState } from "react";
import { PaymentForm } from "../../components/paymentForm/paymentForm";
export const Checkout = () => {
  const location = useLocation();
  const queryClient = useQueryClient();
  const [data, setData] = useState({});
  const [checkFormPayment, setCheckFormPayment] = useState(false);
  const access_token = localStorage.getItem("access_token");
  const user = JSON.parse(localStorage.getItem("user"));

  const id = location.pathname.split("/thanh-toan/")[1];
  const getDetailCourse = useMutation({
    mutationFn: (id) => getCourse(id),
  });

  useEffect(() => {
    if (access_token && user?.phanQuyen === 0) {
      queryClient.setQueryData("loader", true);
      getDetailCourse.mutate(id, {
        onSuccess: (data) => {
          queryClient.setQueryData("loader", false);
          console.log(data);
          setData(data?.data?.data);
        },
        onError: (error) => {
          queryClient.setQueryData("loader", false);
          console.log(error);
        },
      });
    }
  }, [id]);

  const turnOff = () => {
    setCheckFormPayment(false);
  };
  return (
    <div className="container checkout">
      {checkFormPayment && <PaymentForm turnOff={turnOff} data={data} />}
      <div className="Checkout_header">
        <div className="Checkout_header_content">
          <p>Trang chủ</p>
          <img src={chevronRight} alt="" />
          <p>Thanh toán</p>
        </div>
      </div>
      <div className="Checkout_content">
        <div className="main">
          <div className="title">
            <img src={iconCheckout} alt="" />
            <span>Thanh toán</span>
          </div>
          <div className="order-info">
            <div className="order-info-header">
              <span>Đơn hàng</span>
            </div>
            <div className="order-info-body">
              {/* {dataCheckout?.map((item, index) => (
                <CardItem key={index} item={item} />
              ))} */}
              <div className="Checkout-card-item">
                <div className="image">
                  <img src={data?.linkVideo} alt="" />
                </div>
                <div className="name">
                  <p>{data?.tenKhoaHoc}</p>
                  <b>Giảng viên: {data?.instructor?.hoTen}</b>
                </div>
                <div className="amount">
                  <p>Số lượng</p>
                  <b>1</b>
                </div>
                <div className="priceTotal">
                  <p>Thành tiền</p>
                  <b>
                    {data?.giaCa
                      ?.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    đ
                  </b>
                </div>
              </div>
            </div>
            <div className="system-vouchers">
              <div className="title">
                <img src={iconCheckoutVouucher} alt="" />
                <p>Mã giảm giá</p>
              </div>
              <div className="action-vouchers">Chọn voucher</div>
            </div>
            <div className="order-payment-header">
              <img src={iconCheckoutPayment} alt="" />
              <p>Hình thức thanh toán</p>
            </div>
            <div className="order-payment-title">
              <div className="general-info">
                <div className="general-info-item">
                  <span>Tổng tiền hàng ( sản phẩm) </span>
                  <span>đ</span>
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
                    {data?.giaCa
                      ?.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    đ
                  </span>
                </div>
              </div>
            </div>
            <div className="order-create-section">
              <div
                className="create-order"
                onClick={() => setCheckFormPayment(true)}
              >
                <p>Thanh toán</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
