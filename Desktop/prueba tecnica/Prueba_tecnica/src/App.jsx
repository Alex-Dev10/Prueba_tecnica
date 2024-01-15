import "./App.css";


import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="container">
      <h1 className="text-center title">To Do List</h1>
      <div>
     
       <TodoList/>
      </div>
    </div>
  );
}

export default App;
