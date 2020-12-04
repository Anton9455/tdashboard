import { useMutation } from "@apollo/react-hooks";
import { Input } from "antd";
import React from "react";
import { ADD_TAB_TITLE, GET_ALL_TAB } from "../../../graphql/queries";

export default ({ id, title }) => {
  const [addTitle, data] = useMutation(ADD_TAB_TITLE, {
    refetchQueries: [{ query: GET_ALL_TAB }],
  });

  const _handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTitle({ variables: { id: id, title: event.currentTarget.value } });
    }
  };

  return (
    <div className="col__title">
      {title ? (
        <p>{title}</p>
      ) : (
        <Input placeholder="Наименование столбца" onKeyDown={_handleKeyDown} />
      )}
    </div>
  );
};
