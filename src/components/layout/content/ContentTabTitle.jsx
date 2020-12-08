import { useMutation } from "@apollo/react-hooks";
import { Input } from "antd";
import React, { useRef, useState } from "react";
import { ADD_TAB_TITLE, GET_ALL_TAB } from "../../../graphql/queries";

export default ({ id, title }) => {

  const inputRef = useRef();
  const [change, setChange] = useState(!title);

  const [addTitle] = useMutation(ADD_TAB_TITLE, {
    refetchQueries: [{ query: GET_ALL_TAB }],
  });

  const _handleKeyDown = (event) => {
    if (event.key === "Enter" && event.currentTarget.value) {
      addTitle({ variables: { id: id, title: event.currentTarget.value } });
      setChange(!change);
    }
  };

  const _changeInputValue = (val) =>{
    inputRef.current.input.value = val;
  }

  return (
    <div
      className="col__title"
      onDoubleClick={() => {
        setChange(!change);
        if(change){
          _changeInputValue(title);
        }
      }}
    >
      {change ? (
        <Input
          placeholder="Press Enter"
          defaultValue={title}
          onKeyDown={_handleKeyDown}
          ref={inputRef}
          onChange={(e)=>{
            _changeInputValue(e.currentTarget.value);
          }}
        />
      ) : (
        <p>
          {title}
        </p>
      )}
    </div>
  );
};
