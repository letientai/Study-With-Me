import DetailCourse from "../pages/detail";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const publicRoutes = [
    {path: "/", component: Home},
    {path: "/khoa-hoc-truc-tuyen/:id", component: DetailCourse},
    {path: "/loginv2", component: Login},
    {path: "/signupv2", component: Register},
];




const privateRoutes = []

export {publicRoutes, privateRoutes}