// src/Task.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask, toggleTask } from '../features/taskSlice';

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (isEditing) {
      dispatch(editTask({ id: task.id, description }));
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className={`task ${task.isDone ? 'done' : ''}`}>
      {isEditing ? (
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      ) : (
        <span onClick={() => dispatch(toggleTask(task.id))}>
          {task.description}
        </span>
      )}
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
    </div>
  );
};

export default Task;
