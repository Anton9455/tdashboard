import React from "react";
import { Card } from "antd";

import '../scss/card.scss';
import CardButtons from "./CardButtons";

export default () => {
  return (
    <Card
      size="small"
      title="Small size card"
      extra={<CardButtons/>}
      className="card"
    >
      <p>Card content</p>
    </Card>
  );
};
