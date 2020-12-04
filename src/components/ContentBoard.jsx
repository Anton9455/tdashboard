import React from "react";
import { Row } from "antd";
import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
import ContentColumn from "./ContentColumn";
import "../scss/content.scss";

const GetAllTabs = loader("../graphql/GetAllTabs.graphql");

export default () => {
  const { data, loading } = useQuery(GetAllTabs);
  return (
    <div className="content-board">
      <Row className="content-board__row row">
        {loading && <div>Loading...</div>}
        {!loading &&
          data &&
          data.getAllTabs.map((tab, index) => {
            return (
              <ContentColumn
                title={tab.title}
                spanSize={Math.floor(18 / data.getAllTabs.length)}
                key={index}
              />
            );
          })}
      </Row>
    </div>
  );
};
