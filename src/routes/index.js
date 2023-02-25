import DetailCourse from "../pages/detail";
import Home from "../pages/Home";

const publicRoutes = [
    {path: "/", component: Home},
    {path: "/khoa-hoc-truc-tuyen/:id", component: DetailCourse}
];




const privateRoutes = []

export {publicRoutes, privateRoutes}