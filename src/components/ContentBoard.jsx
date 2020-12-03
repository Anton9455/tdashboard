import { Divider } from "antd";
import React from "react";
import { Row } from "antd";
import ContentColumn from "./ContentColumn";
import '../scss/content.scss';

const mapColumns = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 3 }, { id: 3 }];

export default () => {
  return (
    <div className="content-board">
      <Row className="content-board__row row">
        {mapColumns &&
          mapColumns.map((column, index) => {
            return (
              <ContentColumn spanSize={Math.floor(18 / mapColumns.length)} key={index} >
                  
              </ContentColumn>
            );
          })}
      </Row>
    </div>
  );
};
