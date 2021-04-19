import React from "react";
import Todo from "./Todo";
const List = ({ list, removeTodo, editTodo }) => {
  const renderList = list.map((item) => (
    <Todo
      title={item.title}
      completed={item.completed}
      key={item._id}
      removeTodo={(e) => removeTodo(item._id)}
      editTodo={(updatedItem) => editTodo(item._id, updatedItem)}
    />
  ));

  return <div className="ui grid center aligned">{renderList}</div>;
};

export default List;
