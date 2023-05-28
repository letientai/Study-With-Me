import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";
import { DefaultLayout } from "./components/Layout";
import { Fragment, useMemo } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from "./components/until/loader";
import { useQuery, useQueryClient } from "react-query";
import { getMyCourses } from "./apis/Courses.api";
import { setLocalStorage } from "./utils/auth";
function App() {
  const queryClient = useQueryClient();
  const access_token = localStorage.getItem("access_token")
  // const getCourses = useMutation({
  //   mutationFn: (a) => getMyCourses(),
  // });

  useMemo(() => {
    queryClient.setQueryData('loader', () => false);
  }, [queryClient])
  const loader = useQuery({
    queryKey: ["loader"],
    queryFn: () => queryClient.getQueryData('loader'),
  })

  useMemo(() => {
    if (access_token) {
      getMyCourses()
        .then((res) => {
          queryClient.setQueryData('myCourses', () => res.data.data);
          setLocalStorage("myCourses", res.data.data)
        }).catch((err) => {
          console.log(err);
        })
    }
  }, [access_token])

  // const cloudinaryConfig = {
  //   cloud_name: cloudinaryCloudName,
  //   api_key: cloudinaryApiKey,
  //   api_secret: cloudinaryApiSecret
  // };

  return (
    <Router>
      <div className="App">
        {/* <Loader/> */}
        {loader?.data && <Loader />}
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;

            if (route.layout) {
              Layout = route.layout
            } else if (route.layout === null) {
              Layout = Fragment
            }
            return (
              <Route
                path={route.path}
                key={index}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
