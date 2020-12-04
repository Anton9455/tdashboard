import React from "react";
import { Input } from "antd";

export default ({ title }) => {
  return (
    <div>
      {title ? <p>{title}</p> : <Input placeholder="Наименование задачи" />}
    </div>
  );
};
