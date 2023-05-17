
import DetailCourse from "../pages/Detail";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Teacher from "../pages/Teacher";
import Courses from "../pages/Courses";
import {ActorCourses, ActorLesson,ActorChapter,ListChapterAndLesson} from '../pages/ActorCourses' 
import DetailTeacher from "../pages/DetailTeacher";
import ActorStudents from "../pages/ActorStudents";
import { ChangPassword } from "../pages/ChangPassword";
import { ActorCoursesAdd} from "../pages/ActorCourses";
import { Lesson } from "../pages/Lesson";

const publicRoutes = [
    { path: "/Study-With-Me", component: Home },
    { path: "/khoa-hoc-truc-tuyen/:id", component: DetailCourse },
    { path: "/giao-vien", component: Teacher },
    { path: "/giao-vien/:id", component: DetailTeacher },
    { path: "/trang-ca-nhan", component: ActorStudents },
    { path: "/doi-mat-khau", component: ChangPassword },
    { path: "/dang-nhap", component: Login },
    { path: "/dang-ky", component: Register },
    { path: "/course", component: Courses },
    { path: "/bai-hoc/:id", component: Lesson },
    { path: "/add-lesson", component: ActorLesson },
    { path: "/search/:type", component: Courses },
    { path: "/actor-courses", component: ActorCourses },
    { path: "/actor-courses/:id", component: ActorCoursesAdd},
    { path: "/actor-chapter/:id", component:ActorChapter },
    { path: "/listCourse/:id", component:ListChapterAndLesson },
];




const privateRoutes = []

export { publicRoutes, privateRoutes }