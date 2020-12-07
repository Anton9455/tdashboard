import React from "react";
import { Input } from "antd";

export default ({ isEdit, title, inputHandler }) => {
  return (
    <div>
      {isEdit ? (
        <Input
          placeholder="Наименование задачи"
          value={title}
          onChange={(e) => inputHandler(e)}
        />
      ) : (
        <p>{title}</p>
      )}
    </div>
  );
};
