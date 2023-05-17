import {  useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Loader } from "../../../components/until/loader"
import "./ActorCourses.scss";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useMatch, useNavigate, useParams } from "react-router-dom";
import { ImageUpload } from "../../../components/form/formUpdateInfomation/imageUpload/imageUpload";
import { FastField, Form, Formik } from "formik";
import { schemaCourseGV } from "../../../utils/rules";
import InputField from "../../../components/form/formAddEdit/InputField";
import SelectField from "../../../components/form/formAddEdit/SelectField";
import {  STATUS_CATEGORY_COURSE } from "../../../variable";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { addCourse, getCourse, updateCourse } from "../../../apis/Courses.api";
import { toast } from "react-toastify";
import { getAllcategory } from "../../../apis/Categorys.api";

function ActorCoursesAdd() {
  const queryClient = useQueryClient();
  const [image, setImage] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const addMatch = useMatch("/actor-courses/add");
  const isAddMode = Boolean(addMatch);
  const [dataEdit, setDataEdit] = useState({});
  const [loading, setLoading] = useState(true);
  
  
  
  const initialValues = {
    tenKhoaHoc: dataEdit?.tenKhoaHoc || "",
    moTa:dataEdit?.moTa || "",
    giaCa:dataEdit?.giaCa || +"",
    category_id:dataEdit?.category_id || null,
    trangThai:dataEdit?.trangThai || 1,
  };
  // xét danh mục
  const [category, setCategory] = useState();
  useQuery({
    queryKey: ["category"],
    queryFn: () => getAllcategory(),
    onSuccess: (data) => {
      const filteredData = data?.data?.data.map((categoryItem) => ({
        value: categoryItem.id,
        label: categoryItem.tenDanhMuc,
      }));
      setCategory(filteredData);
    },
  });
  if(!isAddMode){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useQuery({
      queryKey: ["course", id],
      queryFn: () => getCourse(id),
      enabled: id !== undefined,
      onSuccess: (data) => {
        setDataEdit(data?.data?.data);
        setLoading(false);
      },
    });
  }
  const addCourses = useMutation({
    mutationFn: async (body) => await addCourse(body),
  });

  const updateCourses = useMutation({
    mutationFn: async (body) => await updateCourse(id, body),
  });

  const handleSubmit = async (values) => {
    queryClient.setQueryData("loader", true);
    var bodyFormData = new FormData();
    if (image && isAddMode) {
      console.log(image);
      bodyFormData.append("file", image);
      bodyFormData.append("upload_preset", "j83n0nkq");
      bodyFormData.append("public_id", image.name);
      bodyFormData.append("api_key", "793869286496228");
      bodyFormData.append("folder", "avatar_User");
      axios
        .post(
          `https://api.cloudinary.com/v1_1/dxphlzgvx/image/upload`,
          bodyFormData
        )
        .then(async (res) => {
          values.linkVideo = res?.data?.secure_url;
          await addCoursesMutation(values);
        })
        .catch((err) => {
          console.log(err?.response?.data);
          toast.error("Lưu ý phải có ảnh !");
          queryClient.setQueryData("loader", false);
        });
    } else {
      console.log(image);
      bodyFormData.append("file", image);
      bodyFormData.append("upload_preset", "j83n0nkq");
      bodyFormData.append("public_id", image.name);
      bodyFormData.append("api_key", "793869286496228");
      bodyFormData.append("folder", "avatar_User");
      axios
        .post(
          `https://api.cloudinary.com/v1_1/dxphlzgvx/image/upload`,
          bodyFormData
        )
        .then(async (res) => {
          values.linkVideo = res?.data?.secure_url;
          await updateCoursesMutation(values);
        })
        .catch((err) => {
          toast.error("Lưu ý phải có ảnh !");
          queryClient.setQueryData("loader", false);
        });
    }
  };
  const addCoursesMutation = async (values) => {
    addCourses.mutate(values, {
      onSuccess: (data) => {
        queryClient.setQueryData("loader", false);
        toast.success(data.data.message ?? "Đăng kí thành công !");
        navigate("/actor-courses");
      },
      onError: (error) => {
        console.log(error);
        queryClient.setQueryData("loader", false);
        toast.error(error?.response);
      },
    });
  };

  const updateCoursesMutation = async (values) => {
    updateCourses.mutate(values, {
      onSuccess: (data) => {
        queryClient.setQueryData("loader", false);
        toast.success(data.data.message ?? "Update thành công !");
        navigate("/actor-courses");
      },
      onError: (error) => {
        console.log(values);
        queryClient.setQueryData("loader", false);
        toast.error(error?.response?.data?.error);
      },
    });
  };

  const changImage = (image) => {
    setImage(image);
  };
  return (
    <>
      {(!loading || isAddMode) ? 
        <Formik
          initialValues={initialValues}
          validationSchema={schemaCourseGV}
          onSubmit={handleSubmit}
        >
          {(formikProps) => {
            return (
              <div className="container py-4">
                <div className="container-xl px-4 mt-4">
                  <Form>
                    <nav className="nav nav-borders">
                      <h3 className="text-start fs-4 align-items-center">
                        <a href="/Study-With-Me">
                          {" "}
                          <FontAwesomeIcon icon={faHouse} className="icon" />
                        </a>
                        Trang Chủ &gt; {isAddMode ? "Thêm " : "Sửa"} Khoá Học
                      </h3>
                    </nav>
                    <hr className="mt-0 mb-4" />
                    <div className="row">
                      <div className="col-xl-4">
                        <div className="wrapper-mt">
                          <div className="card mb-4 mb-xl-0">
                            <div className="card-header">Ảnh Khoá Học</div>
                            <div className="card-body text-center">
                              <label>Cập nhật ảnh</label>
                              <ImageUpload changeAvatar={changImage} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-8">
                        <div className="card">
                          <div className="card-header">Chi Tiết Khoá Học</div>
                          <div className="card-body">
                            <FastField
                              name="tenKhoaHoc"
                              component={InputField}
                              label="Tên khoá học"
                              type="text"
                              placeholder="Nhập tên khoá học..."
                            />
                            <FastField
                              name="moTa"
                              component={InputField}
                              label="Mô tả"
                              type="textarea"
                              placeholder="Nhập mô tả..."
                            />
                            <FastField
                              name="giaCa"
                              component={InputField}
                              type="number"
                              label="Giá"
                              placeholder="Nhập Giá..."
                            />
                            {category && <FastField
                              name="category_id"
                              component={SelectField}
                              label="Danh Mục"
                              placeholder="Bạn muốn chọn Danh Mục?"
                              options={category}
                            />}

                            {isAddMode ? (
                              ""
                            ) : (
                              <FastField
                                name="trangThai"
                                component={SelectField}
                                label="Trạng Thái"
                                placeholder="Trạng Thái?"
                                options={STATUS_CATEGORY_COURSE}
                              />
                            )}
                          </div>
                          <div className="card-body">
                            <button className="btn btn-primary" type="submit">
                              {isAddMode ? "Thêm " : "Sửa"} Khoá Học
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
      : <Loader />}
    </>
  );
}

export default ActorCoursesAdd;
