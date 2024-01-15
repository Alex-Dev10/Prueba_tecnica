import React, { useState } from "react";
import { connect } from "react-redux";
import AddTodoForm from "../AddTodoForm/AddTodoForm";
import TodoItem from "../TodoItem/TodoItem";
import { removeTask, completeTask } from "../../redux/reducer";
import "./TodoList.css";

const TodoList = ({ todos, removeTask, completeTask }) => {
  const [classify, setClassify] = useState("all");

  return (
    <div>
      <AddTodoForm />

      <div className="buttons">
        <button
          className={`btn ${classify === "pending" ? "selected" : ""}`}
          onClick={() => setClassify("pending")}
        >
          Pending
        </button>
        <button
          className={`btn ${classify === "completed" ? "selected" : ""}`}
          onClick={() => setClassify("completed")}
        >
          Completed
        </button>
        <button
          className={`btn ${classify === "all" ? "selected" : ""}`}
          onClick={() => setClassify("all")}
        >
          All
        </button>
      </div>

      <ul>
        {todos
          .filter((todo) => {
            switch (classify) {
              case "pending":
                return !todo.completed;
              case "completed":
                return todo.completed;
              default:
                return true;
            }
          })
          .map((item) => (
            <TodoItem
              key={item.id}
              item={item}
              removeTodo={removeTask}
              completeTodo={completeTask}
            />
          ))}
      </ul>
    </div>
  );
};

const breakDownstate = (state) => {
  return {
    todos: state,
  };
};

const breakDownActions = (dispatch) => {
  return {
    removeTask: (id) => dispatch(removeTask(id)),
    completeTask: (id) => dispatch(completeTask(id)),
  };
};

export default connect(breakDownstate, breakDownActions)(TodoList);
