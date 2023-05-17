import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import InputField from "../../../components/form/formAddEdit/InputField";
import SelectField from "../../../components/form/formAddEdit/SelectField";
import { schemaChapterGV } from "../../../utils/rules";
import './Chapter.scss'
import { FastField, Form, Formik } from "formik";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getProfileFromLS } from "../../../utils/auth";
import { CoursesGVid, addChapter } from "../../../apis/Courses.api";
import { toast } from "react-toastify";
import { isAxiosUnprocessableEntityError } from "../../../utils/utils";
import { useMatch, useParams } from "react-router-dom";
import { getChapterDetail,updateChapter } from "../../../apis/Courses.api";
import { STATUS_CATEGORY_COURSE } from "../../../variable";
function Chapter() {
  const addMatch = useMatch("/actor-chapter/add");
  const isAddMode = Boolean(addMatch);
  const { id } = useParams();
  console.log(id)
  const queryClient = useQueryClient();
  const profile = getProfileFromLS();
  const [loading, setLoading] = useState(true);
  const [dataEdit, setDataEdit] = useState({});
  const initialValues = {
    tenChuongHoc:dataEdit?.tenChuongHoc || "",
    course_id:dataEdit?.course_id|| null,
    trangThai:dataEdit?.trangThai || 1,
  };
  // xét danh mục
  const [category, setCategory] = useState([]);
  if(isAddMode) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useQuery({
      queryKey: ["courses", profile.id],
    queryFn: () => CoursesGVid(profile.id),
      onSuccess: (data) => {
        const filteredData = data?.data?.data.map((courseItem) => ({
          value: courseItem.id,
          label: courseItem.tenKhoaHoc,
        }));
        setCategory(filteredData);
        setLoading(false);
      },
    });
  }
  
  if(!isAddMode){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useQuery({
      queryKey: ["Chapterid",id],
    queryFn: () => getChapterDetail(id),
    enabled: id !== undefined,
      onSuccess: (data) => {
        setDataEdit(data?.data?.data);
        setLoading(false);
      },
    });
  }
  console.log(dataEdit)
    
    const addChapterMutatatiton = useMutation({
      mutationFn: async (body) => await addChapter(body),
    });

    const updateChapterMutation = useMutation({
      mutationFn: async (body) => await updateChapter(id, body),
    });
  
  
    const handleSubmit = async (data) => {
      queryClient.setQueryData("loader", true);
      if(isAddMode){
        addChapterMutatatiton.mutate(data, {
          onSuccess: (data) => {
            queryClient.setQueryData("loader", false);
            toast.success(data?.data?.message || "Đăng chương học thành công");
    
          },
          onError: (error) => {
            queryClient.setQueryData("loader", false);
            if (isAxiosUnprocessableEntityError(error)) {

              console.log(error)
            }
          },
        });
      } else {
        updateChapterMutation.mutate(data, {
          onSuccess: (data) => {
            queryClient.setQueryData("loader", false);
            toast.success(data?.data?.message || "Sửa chương học thành công");
          },
          onError: (error) => {
            queryClient.setQueryData("loader", false);
            if (isAxiosUnprocessableEntityError(error)) {

              console.log(error)
            }
          },
        });
      }
     
    }

   
  return (
      <>
          {(!loading || isAddMode) ? <Formik
            initialValues={initialValues}
            validationSchema={schemaChapterGV}
            onSubmit={handleSubmit}
          >
            {(formikProps) => {
              const { values, errors, touched, isSubmitting } = formikProps;
              console.log(values)
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
                          Trang Chủ &gt; Thêm Chương Học
                        </h3>
                      </nav>
                      <hr className="mt-0 mb-4" />
                      <div className="row">
                        <div className="col-xl-4">
                          <div className="wrapper-mt">
                          </div>
                        </div>
                        <div className="col-xl-8">
                          <div className="card">
                            <div className="card-header">Chi Tiết Chương Học</div>
                            <div className="card-body">
                              <FastField
                              name="tenChuongHoc"
                              component={InputField}
                              label="Tên chương học"
                              type="text"
                              placeholder="Nhập tên chương học..."
                              />
                              
                              {!isAddMode || <FastField
                                name="course_id"
                                component={SelectField}
                                label="Khoá Học"
                                placeholder="Bạn muốn chọn Khoá Học?"
                                options={category}
                              />}
                             {!isAddMode ||
                              <FastField
                                name="trangThai"
                                component={SelectField}
                                label="Trạng Thái"
                                placeholder="Trạng Thái?"
                                options={STATUS_CATEGORY_COURSE}
                              />
                            }
                              
                              
                            </div>
                            <div className="card-body">
                              <button className="btn btn-primary" type="submit">
                              {!isAddMode ? "Sửa ": "Thêm" }
                               Chương Học
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
          </Formik> : ""}
      </>
    );
}

export default Chapter;