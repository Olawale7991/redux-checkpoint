// src/App.js
import React from 'react';
import './App.css';
import AddTask from './component/AddTask.jsx';
import ListTask from './component/ListTask.jsx';

function App() {
  return (
    <div className="App">
      <h1>Redux To-Do List</h1>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
