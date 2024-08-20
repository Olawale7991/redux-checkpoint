// src/ListTask.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTasks, filterTasks } from '../features/taskSlice';
import Task from '../component/Task';

const ListTask = () => {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button onClick={() => dispatch(filterTasks('all'))}>All</button>
        <button onClick={() => dispatch(filterTasks('done'))}>Done</button>
        <button onClick={() => dispatch(filterTasks('not_done'))}>Not Done</button>
      </div>
      <div className="task-list">
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default ListTask;
