import React, { useContext, useState } from 'react';
import { samplecontext } from './App';
import { useNavigate } from 'react-router-dom';

function Array4() {
  const { value, setvalue } = useContext(samplecontext);
  const [add, setAdd] = useState({ name: '', age: null, mark: null });
  const navigate = useNavigate();

  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAdd({ ...add, [name]: value });
  };

  const handleclick = () => {
    // Update the context value without losing previous data
    setvalue([...value, add]); // Add the new 'add' object to the array
    console.log(add);
    navigate(-1);
  };

  return (
    <div>
      <label htmlFor="name">Name</label><br />
      <input type='text' name="name" id="name" value={add.name} onChange={handlechange} /><br />
      <label htmlFor="age">Age</label><br />
      <input type='number' name="age" id="age" value={add.age} onChange={handlechange} /><br />
      <label htmlFor="mark">Mark</label><br />
      <input type='number' name="mark" id="mark" value={add.mark} onChange={handlechange} />
      <button onClick={handleclick}>Submit</button>
    </div>
  );
}

export default Array4;
