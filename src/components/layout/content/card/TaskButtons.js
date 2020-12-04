import React from "react";
import { EditOutlined, CloseOutlined } from "@ant-design/icons";

export default () => {
  return (
    <div className="card__buttons">
      <EditOutlined className="card__button" />
      <CloseOutlined className="card__button" />
    </div>
  );
};
