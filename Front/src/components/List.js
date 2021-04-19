import React from "react";
import Todo from "./Todo";
const List = ({ list, removeTodo }) => {
  const renderList = list.map((item) => (
    <Todo
      title={item.title}
      completed={item.completed}
      key={item.title}
      removeTodo={(e) => removeTodo(item.id)}
    />
  ));

  return <div className="ui grid center aligned">{renderList}</div>;
};

export default List;
