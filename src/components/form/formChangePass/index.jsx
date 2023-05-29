import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { Formik, FastField, Form } from "formik";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { FormChangePass } from "./validate";
import { changePassworrd } from "../../../apis/Auth.api";
import { useNavigate } from "react-router-dom";
export const FormChangePassword = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate()
  const initialValues = {
    old_password: "",
    new_password: "",
    confirm_password: "",
  };

  const changePassword = useMutation({
    mutationFn: (body) => changePassworrd(body),
  });

  const onChangePassword = async (values) => {
    queryClient.setQueryData("loader", true);

    changePassword.mutate(values, {
      onSuccess: (data) => {
        queryClient.setQueryData("loader", false);
        toast.success(data?.data?.message);
        navigate("/Study-with-me")
      },
      onError: (error) => {
        console.log(error);
        queryClient.setQueryData("loader", false);
        toast.error(error?.response?.data?.error);
      },
    });
  };

  return (
    <div className="w-100">
      <Formik
        initialValues={initialValues}
        validationSchema={FormChangePass}
        onSubmit={onChangePassword}
      >
        {({ errors, touched }) => (
          <Form>
            <Row>
              <Col md="12">
                <Row>
                  <Col md="12">
                    <div className="form-group d-block">
                      <p className="title">Mật khẩu cũ</p>
                      <FastField
                        name="old_password"
                        className="form-control"
                        placeholder="Mật khẩu cũ"
                        type="password"
                      ></FastField>
                      {errors.old_password && touched.old_password ? (
                        <div className="formError">{errors.old_password}</div>
                      ) : null}
                    </div>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col md="12">
                    <div className="form-group d-block">
                      <p className="title">Mật khẩu mới</p>
                      <FastField
                        name="new_password"
                        className="form-control"
                        placeholder="Mật khẩu mới"
                        type="password"
                      ></FastField>
                      {errors.new_password && touched.new_password ? (
                        <div className="formError">{errors.new_password}</div>
                      ) : null}
                    </div>
                  </Col>
                </Row>
                <Row className="my-4">
                  <Col md="12">
                    <div className="form-group d-block">
                      <p className="title">Nhập lại mật khẩu mới</p>
                      <FastField
                        name="confirm_password"
                        className="form-control"
                        placeholder="Nhập lại mật khẩu mới"
                        type="password"
                      ></FastField>
                      {errors.confirm_password && touched.confirm_password ? (
                        <div className="formError">
                          {errors.confirm_password}
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
                <div className="clearfix"></div>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </div>
  );
};
