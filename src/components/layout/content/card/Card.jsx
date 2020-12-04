import React from "react";
import { Card } from "antd";

import "../../../../scss/card.scss";
import CardButtons from "./CardButtons";

export default ({ id, title, description }) => {
  return (
    <Card size="small" title={title} extra={<CardButtons />} className="card">
      <p>{description}</p>
    </Card>
  );
};
