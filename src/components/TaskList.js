import { useState } from 'react';
import './TaskList.css';
export default function TaskList({
  tasks,
  onChangeTask,
  onDeleteTask
}) {
  return (
    <div className='div1'>
      {tasks.map(task => (
        <div className='div2' key={task.id}>
          <Task
            task={task}
            onChange={onChangeTask}
            onDelete={onDeleteTask}
          />
        </div>
      ))}
    </div>
  );
}

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={e => {
            onChange({
              ...task,
              text: e.target.value
            });
          }} />
        <button className='savebut' onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button className='editbut' onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <label>
      {/* <input
        type="checkbox"
        checked={task.done}
        onChange={e => {
          onChange({
            ...task,
            done: e.target.checked
          });
        }}
      /> */}
      {taskContent}
      <button className='delbut' onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </label>
  );
}
