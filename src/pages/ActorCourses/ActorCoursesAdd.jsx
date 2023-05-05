import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './ActorCourses.scss'
import {  faFileArrowDown, faHouse } from "@fortawesome/free-solid-svg-icons";
import { useMatch, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { addCourse, getCourse, updateCourse } from "../../apis/Courses.api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaCourseGV } from "../../utils/rules";
import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";
import { isAxiosUnprocessableEntityError } from "../../utils/utils";
function ActorCoursesAdd() {
    const addMatch = useMatch('/actor-courses/add')
    const isAddMode = Boolean(addMatch)
    const navigate = useNavigate();
    const { id } = useParams()
    
    // xử lý form
    const { register,setValue,reset,watch,handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            tenKhoaHoc: "",
            moTa: "",
            linkVideo: "",
            giaCa: 0,
            category_id: 1,
            trangThai: 0,
        },
        resolver: yupResolver(schemaCourseGV)
    });

    const selectedRadioValue = watch("trangThai"); // lấy giá trị của nút radio được chọn
    const selectedOption = watch("category_id"); // lấy giá trị của nút selectedOption được chọn
    const linkVideo = watch("linkVideo"); // lấy giá trị linkVideo
    

    // gọi data để edit
    useQuery({
        queryKey: ['course',id],
        queryFn: () => getCourse(id),
        enabled: id !== undefined,
        onSuccess: (data) => {
            setValue('tenKhoaHoc',data.data.data?.tenKhoaHoc)
            setValue('moTa',data.data.data?.moTa)
            setValue('linkVideo',data.data.data?.linkVideo)
            setValue('giaCa',data.data.data?.giaCa)
            setValue('category_id',data.data.data?.category_id)
            setValue('trangThai',data.data.data?.trangThai)
        }
    })

   // setFile video
    const [file, setFile] = useState('');
    const handleFileChange = (e) => {
      if (e.target.files) {
        setFile(e.target.files[0]);
      }
    };
   //handle video 
    const handleVideo = (e) => {
        // lấy file video
        // random 1 số ngẫu nhiên làm id
        const randomNumber = Math.round(Math.random() * 1000);
        // xử lý file video trả về
        if(file && randomNumber){
            var dataVideo = new FormData();
                dataVideo.append("file", file);
                dataVideo.append("upload_preset", "j83n0nkq");
                dataVideo.append("public_id", randomNumber);
                dataVideo.append("api_key", "793869286496228");
                dataVideo.append("folder", "courses");
            axios.post(
                `https://api.cloudinary.com/v1_1/dxphlzgvx/video/upload`,
                dataVideo
            ).then((data) => {
                setValue("linkVideo",data.data.secure_url)
            })
        }
    }
    //api add Courses
    const addCoursesMutation = useMutation({
        mutationFn: (body) => addCourse(body)
    })

    const updateCourseMutation = useMutation({
        mutationFn: (body) => updateCourse(id,body)
    })

    const onSubmit = handleSubmit((data) => {
        if(isAddMode){
            addCoursesMutation.mutate(data, {
                onSuccess: data => {
                    toast.success(data.data.message ?? "Đăng kí thành công !")
                    reset();
                    navigate('/actor-courses')
                },
                onError: (error) => {
                    if(isAxiosUnprocessableEntityError(error)){
                        console.log(error)
                    }        
                }
            })
        }else {
            updateCourseMutation.mutate(data,{
                onSuccess: (data) => {
                    toast.success(data.data.message ?? "Update thành công !")
                    navigate('/actor-courses')
                }
            })
        }
    })
    return <div className="container py-4">
              <div className="container-xl px-4 mt-4">
              <form noValidate onSubmit={onSubmit} >
                <nav className="nav nav-borders">
                <h3 className="text-start fs-4 align-items-center">
                        <a href="/"> <FontAwesomeIcon icon={faHouse} className="icon"/></a>
                        Trang Chủ &gt; {isAddMode ? 'Thêm ' : 'Sửa'} Khoá Học
                        </h3>
                </nav>
                <hr className="mt-0 mb-4" />
                <div className="row">
                    <div className="col-xl-4">
                        <div className="wrapper-mt">
                            <div className="card mb-4 mb-xl-0">
                            <div className="card-header">Video Khoá Học</div>
                            <div className="card-body text-center">
                            <video controls autoPlay src={linkVideo} className="w-100" />
                                <div className="small font-italic text-muted mb-2">video no larger than 5 MB</div>
                                <div className="small font-italic text-muted">Upload Tại Đây</div>
                                <div className="file-upload">
                                    <input type="file" onChange={handleFileChange} />
                                    <FontAwesomeIcon icon={faFileArrowDown} fontSize={30}/>
                                </div>
                                <button onClick={handleVideo} type="button" className="btn btn-primary mt-3">Thêm Video</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="card mb-4">
                        <div className="card-header">Chi Tiết Khoá Học</div>
                        <div className="card-body">
                            <div>
                                <label className="small mb-1" htmlFor="inputUsername">Mô tả</label>
                                <input className="form-control"  type="text" placeholder="Thêm Mô Tả" {...register('moTa')}  />
                                <div className="errorMs">{errors.moTa?.message}</div>
                            </div>
                            <div className="row gx-1">
                                <div className="col-md-6">
                                <label className="small mb-1">Tên Khoá Học</label>
                                <input className="form-control" type="text" placeholder="Tên Khoá Học"  {...register('tenKhoaHoc')}  />
                                <div className="errorMs">{errors.tenKhoaHoc?.message}</div>
                                </div>
                                <div className="col-md-6 d-flex align-items-end justify-content-center ">
                                    <select value={selectedOption || 0} {...register("category_id")}>
                                        <option value={0}>--Chọn một khoá học--</option>
                                        <option value={1}>Khoá 1</option>
                                        <option value={2}>Khoá 2</option>
                                        <option value={3}>Khoá 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row gx-1">
                                <div className="col-md-6">
                                <label className="small mb-1" >Giá Tiền</label>
                                <input className="form-control" type="number" placeholder="Giá Tiền" {...register('giaCa')} />
                                <div className="errorMs">{errors.giaCa?.message}</div>
                                </div>
                                {isAddMode 
                                ? <></> 
                                : <div className="col-md-6 d-flex align-items-end justify-content-around">
                                    <div className="form-check ">
                                        <input className="form-check-input" type="radio"  checked={selectedRadioValue == 1} value={1} {...register("trangThai")}/>
                                        <label className="form-check-label"> Hoạt Động </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input " type="radio" checked={selectedRadioValue == 0} value={0} {...register("trangThai")}/>
                                        <label className="form-check-label" > Không Hoạt Động </label>
                                    </div>
                                </div>}
                            </div>     
                            <button className="btn btn-primary" >{isAddMode ? 'Thêm ' : 'Sửa'} Khoá Học</button>
                        </div>
                        </div>
                    </div>
                </div>
                </form>
            </div>

        </div>
}

export default ActorCoursesAdd;