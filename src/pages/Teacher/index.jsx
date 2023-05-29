import React, { useEffect } from "react";
import banner from "../../assets/Images/banner.png";
import { CardTc } from "../../components/Card/CardTc";
import { Select } from "../../components/Select";
import "./Teacher.scss";
import { getListOfTeachers } from "../../apis/Teacher.api";
import { useQuery, useQueryClient } from "react-query";
export default function Teacher() {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["listOfTeacher"],
    queryFn: () => getListOfTeachers(),
    staleTime: 60 * 1000,
  });
  // console.log(isLoading);

  useEffect(() => {
    queryClient.setQueryData("loader", isLoading);
  }, [isLoading]);

  // queryClient.setQueryData("loader", isLoading);
  // const { data, isLoading } = useMemo(() => result);

  return (
    <div>
      <div className="gv-highlight w-100">
        <img
          className="w-100"
          style={{ marginTop: "1px" }}
          src={banner}
          alt=""
        />
      </div>
      <div className="container mt-5">
        <div className="gv-top d-block d-md-flex justify-content-between mb-3">
          <div className="gv-select col-12 col-md-4 row">
            {/* <div className="col ps-0">
              <Select dataSearch={dataSearch} />
            </div>
            <div className="col ps-0">
              <Select dataSearch={dataSearch} />
            </div> */}
          </div>
          <div className="gv-search col-12 col-md-6 position-relative d-flex mt-md-0 mt-2 justify-content-md-end">
            {/* <Select /> */}
            {/* <span className="gv-glass"></span> */}
            <input
              type="text"
              name="search"
              className="gv-search-input"
              placeholder="Tìm kiếm ..."
            />
            <div type="submit" name="submit" className="gv-search-btn">
              Tìm kiếm
            </div>
          </div>
        </div>
        {!isLoading && (
          <div className="gv-list flex-wrap d-flex row">
            {data?.data.map((item, index) => (
              <CardTc key={index} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
