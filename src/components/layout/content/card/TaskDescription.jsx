import React from "react";
import { Input } from "antd";

export default ({ description }) => {
  return (
    <div>
      {description ? <p>{description}</p> : <Input.TextArea rows={2} />}
    </div>
  );
};
