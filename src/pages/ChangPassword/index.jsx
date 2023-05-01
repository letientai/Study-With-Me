import React from 'react'
import "./ChangePassword.scss"
import { FormChangePassword } from '../../components/form/formChangePass'
export const ChangPassword = () => {
  return (
    <div className="wrapper-detail bg-white">
    <div className="container bg-white w-100 pt-5">
        <div className="form-change-password">
            <FormChangePassword/>
        </div>
    </div>
  </div>
  )
}
