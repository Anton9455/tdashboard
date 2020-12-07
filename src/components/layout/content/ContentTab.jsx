import React, { useRef, useState } from "react";
import { Col } from "antd";
import Task from "./card/Task";
import ContentTabTitle from "./ContentTabTitle";
import {
  CHANGE_TASK,
  GET_ALL_TAB,
  REMOVE_TAB,
  REMOVE_TASK,
} from "../../../graphql/queries";
import { useMutation } from "@apollo/react-hooks";
import ContentTabRemove from "./ContentTabRemove";

export default ({ id, spanSize, title, cards, selected, selectHandler }) => {
  let move = false;

  const [showRemoveBtn, setShowRemoveBtn] = useState(false);

  const tabRef = useRef();

  const [changeTaskMutation] = useMutation(CHANGE_TASK, {
    refetchQueries: [{ query: GET_ALL_TAB }],
  });

  const [removeTaskMutation] = useMutation(REMOVE_TASK, {
    refetchQueries: [{ query: GET_ALL_TAB }],
  });

  const [removeTabMutation] = useMutation(REMOVE_TAB, {
    refetchQueries: [{ query: GET_ALL_TAB }],
  });

  const changeContent = ({ id, title, description }) => {
    changeTaskMutation({
      variables: { id: id, title: title, description: description },
    });
  };

  const removeTask = (id) => {
    removeTaskMutation({ variables: { id } });
  };

  const btnHandler = () => {
    removeTabMutation({ variables: { id } });
  };

  const onMouseMoveHandler = (e) => {
    if (move) {
      let offset = Math.floor(
        ((e.clientY - 85) * 100) / tabRef.current.offsetHeight
      );
      let offsetPercent = offset * 0.02;
      tabRef.current.setAttribute("style", `top:${offsetPercent}%`);
      if (offsetPercent > 1.5) {
        setShowRemoveBtn(true);
      } else {
        setShowRemoveBtn(false);
      }
    }
  };
  const onMouseLeaveHandler = () => {
    move = false;
    tabRef.current.setAttribute("style", `top:0%`);
    setShowRemoveBtn(false);
  };

  return (
    <Col
      span={spanSize}
      className={`row__col col ${selected ? "selected" : ""}`}
      ref={tabRef}
      onMouseDown={() => (move = true)}
      onMouseMove={onMouseMoveHandler}
      onMouseUp={() => (move = false)}
      onMouseLeave={onMouseLeaveHandler}
      onClick={(e) => {
        selectHandler(id);
      }}
    >
      <ContentTabTitle id={id} title={title} />
      {cards &&
        cards.map((card, index) => {
          return (
            <Task
              id={card.id}
              title={card.title}
              description={card.description}
              key={index}
              changeContent={changeContent}
              removeTask={removeTask}
            />
          );
        })}
      {showRemoveBtn && <ContentTabRemove btnHandler={btnHandler} />}
    </Col>
  );
};
