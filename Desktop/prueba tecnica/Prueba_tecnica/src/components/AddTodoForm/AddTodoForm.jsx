import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../../redux/reducer";
import './AddTodoForm.css';

const AddTodoForm = ({ addTodo }) => {
  const [showModal, setShowModal] = useState(false);
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState("");

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const add = () => {
    if (todo.trim() === "" || date.trim() === "") {
      console.error("Input is Empty");
    } else {
      addTodo({
        item: todo,
        date: date,
        completed: false,
      });
      setTodo("");
      setDate("");
      closeModal();
    }
  };

  return (
    <div className="addTodos">
      <button className="btn btnAdd" onClick={openModal}>
        Add +
      </button>

      <div className={`modal ${showModal ? "show" : ""}`} style={{ display: showModal ? "block" : "none" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Task</h5>
              
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="formTodo">Task</label>
                <input
                  type="text"
                  className="form-control"
                  id="formTodo"
                  placeholder="Enter task name"
                  value={todo}
                  onChange={(e) => setTodo(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="formDate">Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="formDate"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={closeModal}>
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={add}>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      <br />
    </div>
  );
};

export default connect(null, { addTodo: addTask })(AddTodoForm);
