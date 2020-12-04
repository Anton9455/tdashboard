import React from "react";
import { Row, Col } from "antd";
import { PlusOutlined, CopyOutlined } from "@ant-design/icons";
import "../../../scss/sider.scss";
import Btn from "./SiderButton";
import { useMutation } from "@apollo/react-hooks";
import { ADD_TAB, ADD_TASK, GET_ALL_TAB } from "../../../graphql/queries";

export default () => {
  const [addTab] = useMutation(ADD_TAB, {
    refetchQueries: [{ query: GET_ALL_TAB }],
  });
  const [addTask] = useMutation(ADD_TASK, {
    refetchQueries: [{ query: GET_ALL_TAB }],
  });
  return (
    <div className="side-buttons">
      <Row className="side-buttons__row row">
        <Col span={24} className="row__col col">
          <Btn
            icon={<PlusOutlined />}
            onClick={() => {
              addTask({ variables: { id: 1 } });
            }}
          />
        </Col>
      </Row>
      <Row className="side-buttons__row row">
        <Col span={24} className="row__col col">
          <Btn
            icon={<CopyOutlined />}
            onClick={() => {
              addTab({ variables: { id: new Date().getTime() } });
            }}
          />
        </Col>
      </Row>
    </div>
  );
};
