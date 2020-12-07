import React, { useState } from "react";
import { Card } from "antd";

import "../../../../scss/card.scss";
import TaskButtons from "./TaskButtons";
import TaskTitle from "./TaskTitle";
import TaskDescription from "./TaskDescription";

export default ({ id, title, description, changeContent, removeTask }) => {
  const [cardContent, setContent] = useState({
    id: id,
    title: title,
    description: description,
    isEdit: !(title || description),
  });

  const inputTitleHandler = (e) => {
    setContent({ ...cardContent, title: e.currentTarget.value });
  };

  const inputDescriptionHandler = (e) => {
    setContent({ ...cardContent, description: e.currentTarget.value });
  };

  const editContent = () => {
    let isEdit = cardContent.isEdit;

    if (isEdit) {
      changeContent(cardContent);
    }
    isEdit = !isEdit;

    setContent({ ...cardContent, isEdit });
  };

  const removeCard = () => {
    removeTask(id);
  };

  return (
    <Card
      size="small"
      title={
        <TaskTitle
          isEdit={cardContent.isEdit}
          title={cardContent.title}
          inputHandler={inputTitleHandler}
        />
      }
      extra={<TaskButtons editContent={editContent} removeCard={removeCard} />}
      className="card"
    >
      <TaskDescription
        isEdit={cardContent.isEdit}
        description={cardContent.description}
        inputHandler={inputDescriptionHandler}
      />
    </Card>
  );
};
