import React, { useState } from "react";

const Todo = ({ title, completed, removeTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(title);
  const [tempValue, setTempValue] = useState(title);
  const [done, setDone] = useState(completed);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleClose = () => {
    setIsEditing(false);
  };

  const handleValueChange = (e) => {
    e.preventDefault();
    setTempValue(e.target.value);
  };

  const handleClick = (e) => {
    const key = e.keyCode;
    if (key === 27) {
      handleReset();
    } else if (key === 13) {
      handleValueSubmit();
    }
  };

  const handleValueSubmit = async () => {
    setValue(tempValue);
    editTodo({ title: tempValue });
    handleClose();
  };

  const handleReset = () => {
    setTempValue(value);
    handleClose();
  };

  const handleDone = () => {
    setDone((oldDone) => {
      const newState = !oldDone;
      editTodo({ completed: newState });
      return newState;
    });
  };

  return (
    <div className="row">
      {isEditing ? (
        <>
          <div className="column seven wide">
            <div className="ui input fluid">
              <input
                autoFocus
                onChange={handleValueChange}
                value={tempValue}
                onKeyDown={handleClick}
              />
            </div>
          </div>
          <div className="column one wide">
            <button
              type=""
              className="ui button circular icon green"
              onClick={() => handleValueSubmit()}
            >
              <i className="white check icon"></i>
            </button>
          </div>

          <div className="column one wide">
            <button
              type=""
              className="ui button circular icon red"
              onClick={() => handleReset()}
            >
              <i className="white remove icon"></i>
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="column five wide">
            <h2 className={"ui header " + (done ? "green" : "")}>{value}</h2>
          </div>
          <div className="column one wide">
            <button
              type=""
              className={"ui button circular icon " + (done ? "blue" : "green")}
              onClick={handleDone}
            >
              <i className="white check icon"></i>
            </button>
          </div>
          <div className="column one wide">
            <button
              type=""
              className="ui button circular icon yellow"
              onClick={() => handleEdit()}
            >
              <i className="white edit icon"></i>
            </button>
          </div>
          <div className="column one wide">
            <button
              type=""
              className="ui button circular icon red"
              onClick={removeTodo}
            >
              <i className="white remove icon"></i>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Todo;
