import React, { useState } from "react";
import { Row } from "antd";
import { useQuery } from "@apollo/react-hooks";
import ContentTab from "./ContentTab";
import "../../../scss/content.scss";
import { GET_ALL_TAB } from "../../../graphql/queries";

export default ({ selectedId, setSelected }) => {
  const { data, loading } = useQuery(GET_ALL_TAB);
  const [currentTask, setCurrentTask] = useState();

  return (
    <div className="content-board">
      <Row className="content-board__row row">
        {loading && <div>Loading...</div>}
        {!loading &&
          data &&
          data.getAllTabs.map((tab, index) => {
            return (
              <ContentTab
                id={tab.id}
                title={tab.title}
                spanSize={Math.floor(18 / data.getAllTabs.length)}
                cards={tab.tasks}
                key={index}
                isSelectTab={selectedId === tab.id}
                selectHandler={(id) => setSelected(id)}
                currentTask={currentTask}
                currentTaskHandler={setCurrentTask}
              />
            );
          })}
      </Row>
    </div>
  );
};
