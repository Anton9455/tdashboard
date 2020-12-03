import React from "react";
import { Col } from "antd";
import Card from './Card';

export default ({ spanSize }) => {
  return <Col span={spanSize} className="row__col col">
            <p className="col__title">Title</p>
            <Card/>
        </Col>;
};
