import React from "react";
import { Row, Col } from "antd";
import { PlusOutlined, CopyOutlined } from "@ant-design/icons";
import "../scss/sider.scss";
import Btn from "./SiderButton";

export default () => {
  return (
    <div className="side-buttons">
      <Row className="side-buttons__row row">
        <Col span={24} className="row__col col">
          <Btn icon={<PlusOutlined />} />
        </Col>
      </Row>
      <Row className="side-buttons__row row">
        <Col span={24} className="row__col col">
          <Btn icon={<CopyOutlined />} />
        </Col>
      </Row>
    </div>
  );
};
