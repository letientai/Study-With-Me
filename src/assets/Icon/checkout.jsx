import React, { useState, useEffect } from "react";
import "./checkout.scss";
import chevronRight from "../../assets/img/chevron-right.svg";
import iconCheckout from "../../assets/img/icon-checkout.svg";
import iconCheckoutVouucher from "../../assets/img/icon-checkout-system-vouucher.svg";
import iconCheckoutPayment from "../../assets/img/icon-checkout-payment.svg";
import { UseStore, action } from "../../store";
import { CardItem } from "../../components/checkout/card_item/card_item";
import { commerce } from "../../lib/commerce";
import { SetProductsOrder } from "../../store/action";
import { PaymentForm } from "../../components/checkout/paymentForm/paymentForm";

export const Checkout = () => {
  const [state, dispatch] = UseStore();
  const { checkoutData, listOrder } = state;
  const [totalItem, setTotalItem] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [checkFormPayment, setCheckFormPayment] = useState(false);
  
  const checkOutItem = localStorage.getItem("checkOutItem");
  const dataCheckout = JSON.parse(checkOutItem).filter(
    (x) => x.checkBuyNow === true
  );
  const fetchData = () => {
    let total = 0;
    dataCheckout.forEach((element) => {
      total = element.line_total.raw + total;
    });
    setTotalItem(total);
    setTotalPayment(total );
  };
  useEffect(() => {
    fetchData();
  }, []);

  const payment = () => {
    setCheckFormPayment(true)
  };
  const turnOff = (check) => {
    setCheckFormPayment(check);
  };
  return (
    <div className="Checkout">
      {checkFormPayment && (
        <div>
          <PaymentForm turnOff={turnOff} totalPayment={totalPayment}/>
        </div>
      )}
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
              {dataCheckout?.map((item, index) => (
                <CardItem key={index} item={item} />
              ))}
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
                  <span>Tổng tiền hàng ({dataCheckout.length} sản phẩm) </span>
                  <span>
                    {totalItem.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    đ
                  </span>
                </div>
                {/* <div className="general-info-item">
                  <span>Phí vận chuyển:</span>
                  <span>32.000đ</span>
                </div> */}
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
                    {totalPayment
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    đ
                  </span>
                </div>
              </div>
            </div>
            <div className="order-create-section">
              <div className="create-order" onClick={payment}>
                <p>Thanh toán</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
