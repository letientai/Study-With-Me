import React from "react";
import "./ChangePassword.scss";
import { FormChangePassword } from "../../components/form/formChangePass";
import { useQueryClient } from "react-query";
export const ChangPassword = () => {
  return (
    <div className="wrapper-detail">
      <div className="container w-100">
        <div className="wrapper-form">
          <div className="form-change-password">
            <FormChangePassword />
          </div>
        </div>
      </div>
    </div>
  );
};
