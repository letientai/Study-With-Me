import DetailCourse from "../pages/detail";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Teacher from "../pages/Teacher";
import Courses from "../pages/Courses";
import ActorCourses from "../pages/ActorCourses";
import DetailTeacher from "../pages/DetailTeacher";

const publicRoutes = [
    {path: "/Study-With-Me", component: Home},
    {path: "/khoa-hoc-truc-tuyen/:id", component: DetailCourse},
    {path: "/giao-vien", component: Teacher},
    {path: "/giao-vien/:id", component: DetailTeacher},
    {path: "/loginv2", component: Login},
    {path: "/signupv2", component: Register},
    {path: "/course", component: Courses},
    {path: "/actor-courses", component: ActorCourses},
];




const privateRoutes = []

export {publicRoutes, privateRoutes}