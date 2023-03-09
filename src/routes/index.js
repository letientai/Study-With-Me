import DetailCourse from "../pages/Detail";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Teacher from "../pages/Teacher";

const publicRoutes = [
    {path: "/", component: Home},
    {path: "/khoa-hoc-truc-tuyen/:id", component: DetailCourse},
    {path: "/giao-vien", component: Teacher},
    {path: "/loginv2", component: Login},
    {path: "/signupv2", component: Register},
];




const privateRoutes = []

export {publicRoutes, privateRoutes}