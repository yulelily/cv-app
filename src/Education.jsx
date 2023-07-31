/* eslint-disable react/prop-types */
import { v4 as uuid } from 'uuid'
import { useState } from 'react'

function Input({curr, handleEditing, handleRemoveBtn}) {
  return (
    <li>
      <div>
        <input id={curr.id} name="school" placeholder="School of Technology and Science" value={curr.school} onChange={handleEditing} />
        <input id={curr.id} name="location" placeholder="Somewhere, Somewhen" value={curr.location} onChange={handleEditing} />
      </div>
      <div>
        <input id={curr.id} name="degree" placeholder="Bachelor of Science in Computer Science; GPA: 4.00" value={curr.degree} onChange={handleEditing} />
        <input id={curr.id} name="date" placeholder="Aug. 2021 - June. 2025" value={curr.date} onChange={handleEditing} />
      </div>
      <button value={curr.id} onClick={handleRemoveBtn} >🗑</button>
    </li>
  );
}

export default function Education() {

  const [items, setItems] = useState([]);

  function handleAddBtn() {
    const item = {id: uuid(), data: {school: "", location: "", degree: "", date: ""}};
    setItems([...items, item]);
  }

  function handleEditing(e) {
    setItems(items.map(item => {
      if (item.id === e.target.id) {
        item.data[e.target.name] = e.target.value;
      }
      return item;
    }));
    console.log(items);
  }

  function handleRemoveBtn(e) {
    const key = e.target.value;
    setItems(items.filter(item => item.id !== key));
  }

  return (
    <>
      <div>
        <h1>Education</h1>
        <button onClick={handleAddBtn} >+</button>
      </div>
        <ul className="education-list" >
          {items.map(item => <Input key={item.id} curr={item} handleEditing={handleEditing} handleRemoveBtn={handleRemoveBtn} /> )}
        </ul>
    </>
  );
}