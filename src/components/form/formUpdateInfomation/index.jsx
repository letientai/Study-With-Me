import React, { useState } from "react";
import "./FormUpdateInfomation.scss";
import { Button, Card, Row, Col } from "react-bootstrap";
import { ImageUpload } from "./imageUpload/imageUpload";
import { Formik, FastField, Form } from "formik";
import { FormInfoSchema } from "./validate";
import { useMutation, useQueryClient } from "react-query";
import { updateInfomationUser } from "../../../apis/User.api";
import { toast } from "react-toastify";
import { setLocalStorage } from "../../../utils/auth";
import axios from "axios";

export const FormUpdateInfomation = (prop) => {
  const [avatar, setAvatar] = useState("");
  const queryClient = useQueryClient();

  const data = prop.item;
  const hideModal = () => {
    prop.showHideModal(false);
  };
  const stopEventParent = (e) => {
    e.stopPropagation();
  };

  const initialValues = {
    hoTen: data?.hoTen || "",
    gioiTinh: data?.gioiTinh || "",
    soDienThoai: data?.soDienThoai || "",
    ngaySinh: data?.ngaySinh || "",
    diaChi: data?.diaChi || "",
  };

  const updateUser = useMutation({
    mutationFn: async (body) => await updateInfomationUser(body),
  });

  const onAdd = async (values) => {
    queryClient.setQueryData("loader", true);
    if (avatar) {
      var bodyFormData = new FormData();
      console.log(avatar);
      bodyFormData.append("file", avatar);
      bodyFormData.append("upload_preset", "j83n0nkq");
      bodyFormData.append("public_id", avatar.name);
      bodyFormData.append("api_key", "793869286496228");
      bodyFormData.append("folder", "avatar_User");
      axios
        .post(
          `https://api.cloudinary.com/v1_1/dxphlzgvx/image/upload`,
          bodyFormData
        )
        .then(async (res) => {
          values.avatar = res?.data?.secure_url;
          await updateInfomation(values);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      await updateInfomation(values);
    }
  };

  const updateInfomation = async (values) => {
    updateUser.mutate(values, {
      onSuccess: (data) => {
        console.log(data);
        queryClient.setQueryData("loader", false);
        toast.success(data?.data?.message);
        setLocalStorage("user", data.data.data);
        hideModal();
      },
      onError: (error) => {
        console.log(error);
        queryClient.setQueryData("loader", false);
        toast.error(error?.response?.data?.error);
        hideModal();
      },
    });
  };

  const changeAvatar = (image) => {
    setAvatar(image);
  };

  return (
    <div className="wrapper-modal" onClick={hideModal}>
      <div className="form-update" onClick={(e) => stopEventParent(e)}>
        <div className="content">
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title className="title" as="h4">
                  Cập nhật thông tin
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Formik
                  initialValues={initialValues}
                  validationSchema={FormInfoSchema}
                  onSubmit={onAdd}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <Row>
                        <Col md="8">
                          <Row>
                            <Col md="6">
                              <div className="form-group d-block">
                                <p className="title">Họ và tên</p>
                                <FastField
                                  name="hoTen"
                                  className="field-input"
                                  placeholder="Họ và tên"
                                  type="text"
                                ></FastField>
                                {errors.hoTen && touched.hoTen ? (
                                  <div className="formError">
                                    {errors.hoTen}
                                  </div>
                                ) : null}
                              </div>
                            </Col>
                            <Col md="6">
                              <div className="form-group d-block">
                                <p className="title">Giới tính</p>
                                <FastField
                                  name="gioiTinh"
                                  as="select"
                                  className="field-input"
                                  placeholder="Giới tính"
                                >
                                  <option value="nam">Nam</option>
                                  <option value="nữ">Nữ</option>
                                </FastField>
                                {errors.gioiTinh && touched.gioiTinh ? (
                                  <div className="formError">
                                    {errors.gioiTinh}
                                  </div>
                                ) : null}
                              </div>
                            </Col>
                          </Row>
                          <Row className="mt-4">
                            <Col md="6">
                              <div className="form-group d-block">
                                <p className="title">Số điện thoại</p>
                                <FastField
                                  name="soDienThoai"
                                  className="field-input"
                                  placeholder="Số điện thoại"
                                  type="tel"
                                ></FastField>
                                {errors.soDienThoai && touched.soDienThoai ? (
                                  <div className="formError">
                                    {errors.soDienThoai}
                                  </div>
                                ) : null}
                              </div>
                            </Col>
                            <Col md="6">
                              <div className="form-group d-block">
                                <p className="title">Ngày sinh</p>
                                <FastField
                                  type="date"
                                  name="ngaySinh"
                                  className="field-input"
                                  placeholder="Ngày sinh"
                                ></FastField>
                                {errors.ngaySinh && touched.ngaySinh ? (
                                  <div className="formError">
                                    {errors.ngaySinh}
                                  </div>
                                ) : null}
                              </div>
                            </Col>
                          </Row>
                          <Row className="my-4">
                            <Col md="12">
                              <div className="form-group d-block">
                                <p className="title">Địa chỉ</p>
                                <FastField
                                  name="diaChi"
                                  className="field-input"
                                  placeholder="Địa chỉ"
                                  type="text"
                                ></FastField>
                                {errors.diaChi && touched.diaChi ? (
                                  <div className="formError">
                                    {errors.diaChi}
                                  </div>
                                ) : null}
                              </div>
                            </Col>
                          </Row>
                          <Button
                            className="btn-fill pull-right mt-3 mx-2"
                            variant="info"
                            type="submit"
                          >
                            Cập nhật
                          </Button>
                          <Button
                            className="btn-cancel pull-right mt-3 mx-2"
                            variant="dark"
                            onClick={hideModal}
                          >
                            Hủy
                          </Button>
                          <div className="clearfix"></div>
                        </Col>
                        <Col md="4">
                          <Row className="mt-2">
                            <Col md="12">
                              <label>Cập nhật ảnh đại diện</label>
                              <ImageUpload changeAvatar={changeAvatar} />
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Form>
                  )}
                </Formik>
              </Card.Body>
            </Card>
          </Col>
        </div>
      </div>
    </div>
  );
};
