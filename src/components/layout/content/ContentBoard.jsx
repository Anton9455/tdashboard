import React from "react";
import { Row } from "antd";
import { useQuery } from "@apollo/react-hooks";
import ContentColumn from "./ContentColumn";
import "../../../scss/content.scss";
import { GET_ALL_TAB } from "../../../graphql/queries";

export default () => {
  const { data, loading } = useQuery(GET_ALL_TAB);
  return (
    <div className="content-board">
      <Row className="content-board__row row">
        {loading && <div>Loading...</div>}
        {!loading &&
          data &&
          data.getAllTabs.map((tab, index) => {
            return (
              <ContentColumn
                id={tab.id}
                title={tab.title}
                spanSize={Math.floor(18 / data.getAllTabs.length)}
                cards={tab.tasks}
                key={index}
              />
            );
          })}
      </Row>
    </div>
  );
};
