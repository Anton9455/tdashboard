import React, { useRef, useState } from "react";
import { Col } from "antd";
import Task from "./card/Task";
import ContentTabTitle from "./ContentTabTitle";
import {
  CHANGE_TASK,
  CHANGE_TASK_POSITION,
  GET_ALL_TAB,
  REMOVE_TAB,
  REMOVE_TASK,
} from "../../../graphql/queries";
import { useMutation } from "@apollo/react-hooks";
import ContentTabRemove from "./ContentTabRemove";

export default ({
  id,
  spanSize,
  title,
  cards,
  isSelectTab,
  selectHandler,
  currentTask,
  currentTaskHandler,
}) => {
  let move = false;

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const [showRemoveBtn, setShowRemoveBtn] = useState(isMobile ? true : false);

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

  const [changeTaskPositionMutation] = useMutation(CHANGE_TASK_POSITION, {
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
    if (move && e.currentTarget == e.target) {
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

  const onMouseDownHandler = (e) => {
    if (e.currentTarget == e.target) {
      move = true;
    }
    selectHandler(id);
  };

  const dragLeaveHandler = (e) => {
    e.currentTarget.style.border = "none";
  };

  const DnD = function (card) {
    this.card = card;
    this._dnd = {
      draggable: true,
      onDragStart: () => {
        currentTaskHandler(card);
      },
    };
    return this._dnd;
  };

  return (
    <Col
      span={spanSize}
      className={`row__col col ${isSelectTab ? "selected" : ""}`}
      ref={tabRef}
      onMouseDown={onMouseDownHandler}
      onMouseMove={onMouseMoveHandler}
      onMouseUp={() => (move = false)}
      onMouseLeave={onMouseLeaveHandler}
      onDragOver={(e) => {
        e.currentTarget.style.border = "1px solid red";
        e.stopPropagation();
        e.preventDefault();
      }}
      onDragEnd={dragLeaveHandler}
      onDragLeave={dragLeaveHandler}
      onDrop={() => {
        changeTaskPositionMutation({
          variables: { idTask: currentTask.id, idTab: id },
        });
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
              dnd={new DnD(card)}
            />
          );
        })}
      {showRemoveBtn && <ContentTabRemove btnHandler={btnHandler} />}
    </Col>
  );
};
