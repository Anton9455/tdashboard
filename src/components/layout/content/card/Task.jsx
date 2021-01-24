import React, { useState } from "react";
import { Card } from "antd";

import "../../../../scss/card.scss";
import TaskButtons from "./TaskButtons";
import TaskTitle from "./TaskTitle";
import TaskDescription from "./TaskDescription";

export default ({ id, title, description, changeContent, removeTask, dnd }) => {
  const [cardContent, setContent] = useState({
    id,
    title,
    description,
    isEdit: !(title || description),
  });

  const inputTitleHandler = (e) => {
    setContent({ ...cardContent, title: e.currentTarget.value });
  };

  const inputDescriptionHandler = (e) => {
    setContent({ ...cardContent, description: e.currentTarget.value });
  };

  const editContent = () => {
    let {isEdit} = cardContent;

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
      draggable={dnd.draggable}
      onDragStart={dnd.onDragStart}
    >
      <TaskDescription
        isEdit={cardContent.isEdit}
        description={cardContent.description}
        inputHandler={inputDescriptionHandler}
      />
    </Card>
  );
};
