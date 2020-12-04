import React from "react";
import { Col, Input } from "antd";
import Card from "./card/Card";
import ContentColumnTitle from "./ContentColumnTitle";

export default ({ id, spanSize, title, cards }) => {
  return (
    <Col span={spanSize} className="row__col col">
      <ContentColumnTitle id={id} title={title} />
      {cards &&
        cards.map((card, index) => {
          return (
            <Card
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
