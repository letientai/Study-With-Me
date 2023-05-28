// import React, { useState } from "react";
// import Chart from "react-apexcharts";

// export const Statistical = () => {
//   const [option, setOption] = useState("1");
//   const [options, setOptions] = useState({
//     chart: {
//       id: "basic-bar",
//     },
//     xaxis: {
//       categories: [
//         "Tháng 1",
//         "Tháng 2",
//         "Tháng 3",
//         "Tháng 4",
//         "Tháng 5",
//         "Tháng 6",
//         "Tháng 7",
//         "Tháng 8",
//         "Tháng 9",
//         "Tháng 10",
//         "Tháng 11",
//         "Tháng 12",
//       ],
//     },
//   });
//   const series =
//     option === "1"
//       ? [
//           {
//             name: "series-1",
//             data: [
//               9000000, 10000000, 15000000, 20000000, 7000000, 6000000, 20000000,
//               19000000, 17000000, 7000000, 15000000, 10000000,
//             ],
//           },
//         ]
//       : [
//           {
//             name: "series-1",
//             data: [42, 25, 47, 56, 38, 49, 43, 37, 39, 20, 27, 35],
//           },
//         ];
//   return (
//     <div className="container">
//       <div className="title-statistical py-4">
//         <h4>Thống kê doanh thu</h4>
//       </div>
//       <div className="content">
//         <div className="optionChart w-25">
//           <select
//             className="form-select"
//             aria-label="select example"
//             onChange={(e) => {
//               console.log(e.target.value);
//               setOption(e.target.value);
//             }}
//           >
//             <option value="1">Doanh thu</option>
//             <option value="2">Lượt mua</option>
//           </select>
//         </div>
//         <Chart
//           options={options}
//           series={series}
//           type="area"
//           width="100%"
//           height="380"
//         />
//         {/* <TableOrder sendItemDetailOrder={sendItemDetailOrder} /> */}
//       </div>
//     </div>
//   );
// };
