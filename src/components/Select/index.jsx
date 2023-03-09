import React from "react";
import Form from "react-bootstrap/Form";
export const Select = ({ dataSearch }) => {
  const data = dataSearch.data || [];
  return (
    <Form.Select aria-label="Default select example">
        {data.map((item,index) => (
            <option value={item.value} key={index}>{item.title}</option>
        ))}
    </Form.Select>
  );
};
