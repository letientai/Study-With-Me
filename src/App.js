import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";
import { DefaultLayout } from "./components/Layout";
import { Fragment, useEffect, useMemo, useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from "./components/until/loader";
import { useQuery, useQueryClient } from "react-query";
function App() {
  const queryClient = useQueryClient();

  useMemo(() => {
    queryClient.setQueryData('loader', () => false);
    
  }, [])
  const loader = useQuery("loader");

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
