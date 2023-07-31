/* eslint-disable react/prop-types */
import { v4 as uuid } from 'uuid'
import { useState } from 'react'

function Input({curr, handleEditing, handleRemoveBtn}) {
  return (
    <li>
      <div>
        <input id={curr.id} name="company" placeholder="Company of Technology and Innovation" value={curr.company} onChange={handleEditing} />
        <input id={curr.id} name="location" placeholder="Somewhere, Somewhen" value={curr.location} onChange={handleEditing} />
      </div>
      <div>
        <input id={curr.id} name="title" placeholder="Software Engineer" value={curr.title} onChange={handleEditing} />
        <input id={curr.id} name="date" placeholder="June. 2025 - June. 2026" value={curr.date} onChange={handleEditing} />
      </div>
      <input id={curr.id} name="desc" placeholder="Description of my work here: accidentally rm -rf'd production database but recovered the lost data." value={curr.desc} onChange={handleEditing} ></input>
      <div className="button"><button value={curr.id} onClick={handleRemoveBtn} >🗑</button></div>
    </li>
  );
}

export default function Experience() {

  const [items, setItems] = useState([]);

  function handleAddBtn() {
    const item = {id: uuid(), data: {company: "", location: "", title: "", date: "", desc: ""}};
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
        <h4>Experience</h4>
        <div className="button"><button onClick={handleAddBtn} >+</button></div>
      </div>
      <ul className="experience-list" >
        {items.map(item => <Input key={item.id} curr={item} handleEditing={handleEditing} handleRemoveBtn={handleRemoveBtn} /> )}
      </ul>
    </>
  );
}