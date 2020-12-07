import React from "react";
import { EditOutlined, CloseOutlined } from "@ant-design/icons";

export default ({ editContent, removeCard }) => {
  return (
    <div className="card__buttons">
      <EditOutlined
        className="card__button"
        onClick={() => {
          editContent();
        }}
      />
      <CloseOutlined
        className="card__button"
        onClick={() => {
          removeCard();
        }}
      />
    </div>
  );
};
