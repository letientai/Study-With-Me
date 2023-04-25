import DetailCourse from "../pages/detail";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Teacher from "../pages/Teacher";
import Courses from "../pages/Courses";

const publicRoutes = [
    {path: "/Study-With-Me", component: Home},
    {path: "/khoa-hoc-truc-tuyen/:id", component: DetailCourse},
    {path: "/giao-vien", component: Teacher},
    {path: "/loginv2", component: Login},
    {path: "/signupv2", component: Register},
    {path: "/course", component: Courses},
];




const privateRoutes = []

export {publicRoutes, privateRoutes}