import React from "react";
import { Input } from "antd";

export default ({ isEdit, description, inputHandler }) => {
  return (
    <div>
      {isEdit ? (
        <Input.TextArea
          value={description}
          rows={2}
          onChange={(e) => inputHandler(e)}
        />
      ) : (
        <p>{description}</p>
      )}
    </div>
  );
};
