import { useState } from 'react';
import './TaskList.css';
export default function AddTask({ onAddTask }) {
  const [text, setText] = useState('');
  return (
    <>
      <input
        placeholder="Add Your Activity here..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button className='addbut' onClick={() => {
        setText('');
        onAddTask(text);
       
      }}>Add</button>
    </>
  )
}
