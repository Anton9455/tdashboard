import React from "react";
import { Card } from "antd";

import "../../../../scss/card.scss";
import CardButtons from "./TaskButtons";
import TaskTitle from "./TaskTitle";
import TaskDescription from "./TaskDescription";

export default ({ id, title, description }) => {
  return (
    <Card
      size="small"
      title={<TaskTitle title={title} />}
      extra={<CardButtons />}
      className="card"
    >
      <TaskDescription description={description} />
    </Card>
  );
};
