import { FastField, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import InputField from "../../../components/form/formAddEdit/InputField";
import { schemaCategory } from "../../../utils/rules";
import { useMutation, useQueryClient } from "react-query";
import { addCategory } from "../../../apis/Categorys.api";
import { toast } from "react-toastify";


function Category() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const initialValues = {
        tenDanhMuc:"",
        moTa:""
    };  
    const addCategoryMutation = useMutation({
        mutationFn :async (body) => await addCategory(body)
    })
    const handleSubmit = async (values) => {
        console.log(values)
        addCategoryMutation.mutate(values, {
            onSuccess: (data) => {
                queryClient.setQueryData("loader", false);
                toast.success(data.data.message ?? "Đăng kí thành công !");
                navigate(-1);
            },
            onError: (err) => {
                console.log(err)
            }
        })
    }
    return  <>
    <Formik
      initialValues={initialValues}
      validationSchema={schemaCategory}
      onSubmit={handleSubmit}
    >
      {(formikProps) => {
        return (
          <div className="container py-4">
            <div className="container-xl px-4 mt-4">
              <Form>
                <nav className="nav nav-borders">
                  <h3 className="text-start fs-4 align-items-center">
                    <Link to="/Study-With-Me">
                      {" "}
                      <FontAwesomeIcon icon={faHouse} className="icon" />
                    </Link>
                    Trang Chủ &gt; Thêm Danh Mục
                  </h3>
                </nav>
                <hr className="mt-0 mb-4" />
                <div className="row d-flex justify-content-center">
                 
                  <div className="col-xl-8">
                    <div className="card">
                      <div className="card-header">Danh Mục</div>
                      <div className="card-body">
                             <FastField
                              name="tenDanhMuc"
                              component={InputField}
                              label="Tên Danh Mục"
                              type="text"
                              placeholder="Nhập tên danh mục..."
                            />
                            <FastField
                              name="moTa"
                              component={InputField}
                              label="Mô tả"
                              type="textarea"
                              placeholder="Nhập mô tả..."
                            />
                      </div>
                      <div className="card-body">
                        <button className="btn btn-primary" type="submit">
                             Thêm Danh Mục
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        );
      }}
    </Formik> 
</>
}

export default Category;