import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setdesc] = useState("");
  // const addTodo=props.AddTodo;

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be blank")
    }
    else {
      addTodo(title, desc);
      setTitle("");
      setdesc("");
    }
  }
  return (
    <div className='container my-3'>
      <h3>Add a AddTodo</h3>
      <form onSubmit={submit}>
        <div className="form-group">
          <label htmlFor="Title">Todo Title</label>
          <input type="Text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter Todo title" />

        </div>
        <div className="form-group">
          <label htmlFor="desc" >Todo Description</label>
          <input type="text" value={desc} onChange={(e) => { setdesc(e.target.value) }} className="form-control" id="desc" placeholder="Write a description" />
        </div>

        <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
      </form>
    </div>
  )
}

export default AddTodo
