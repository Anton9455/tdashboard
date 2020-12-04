import React from "react";
import { Col } from "antd";
import Card from "./Card";

export default ({ spanSize, title }) => {
  return (
    <Col span={spanSize} className="row__col col">
      <p className="col__title">{title}</p>
      <Card />
    </Col>
  );
};
