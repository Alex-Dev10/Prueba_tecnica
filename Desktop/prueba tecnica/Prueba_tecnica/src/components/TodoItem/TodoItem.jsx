import React from "react";
import "./TodoItem.css";

import { connect } from "react-redux";
import { removeTask, completeTask } from "../../redux/reducer";

const TodoItem = ({ item, removeTodo, completeTodo, category }) => {
  const isCompleted = item.completed;
  const isSelected =
    category === "all" ||
    (category === "completed" && isCompleted) ||
    (category === "pending" && !isCompleted);

  return (
    <li key={item.id} className={`card ${isSelected ? "selected" : ""}`}>
      <div className="task-details d-flex">
        <p>
          <span>Task:</span>
          {item.item}
        </p>
        {item.date && (
          <p className="date">
            <span>Date:</span> {item.date}
          </p>
        )}
      </div>

      <div className="btns">
        {!isCompleted && (
          <button
            className="btn btn-success"
            onClick={() => completeTodo(item.id)}
          >
            Done
          </button>
        )}
        <button className="btn btn-danger" onClick={() => removeTodo(item.id)}>
          X
        </button>
      </div>

      {isCompleted && <span className="completed">done</span>}
    </li>
  );
};

const breakDownActions = (dispatch) => {
  return {
    removeTodo: (id) => dispatch(removeTask(id)),
    completeTodo: (id) => dispatch(completeTask(id)),
  };
};

export default connect(null, breakDownActions)(TodoItem);
