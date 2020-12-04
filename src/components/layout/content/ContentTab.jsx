import React from "react";
import { Col, Input } from "antd";
import Task from "./card/Task";
import ContentTabTitle from "./ContentTabTitle";

export default ({ id, spanSize, title, cards }) => {
  return (
    <Col span={spanSize} className="row__col col">
      <ContentTabTitle id={id} title={title} />
      {cards &&
        cards.map((card, index) => {
          return (
            <Task
              id={card.id}
              title={card.title}
              description={card.description}
              key={index}
            />
          );
        })}
    </Col>
  );
};
