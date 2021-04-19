import React, { useState } from "react";

const Todo = ({ title }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(title);
  const [tempValue, setTempValue] = useState(title);

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
      setValue(tempValue);
      handleClose();
    }
  };

  const handleValueSubmit = (e) => {
    setValue(tempValue);
    handleClose(); 
  };
  
  const handleReset = () => {
    setTempValue(value);
    handleClose();
  };

  return isEditing ? (
    <div className="row">
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
    </div>
  ) : (
    <div className="row">
      <div className="column five wide">
        <h2>{value}</h2>
      </div>
      <div className="column one wide">
        <button type="" className="ui button circular icon green">
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
        <button type="" className="ui button circular icon red">
          <i className="white remove icon"></i>
        </button>
      </div>
    </div>
  );
};

export default Todo;
