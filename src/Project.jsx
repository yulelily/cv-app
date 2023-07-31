/* eslint-disable react/prop-types */
import { v4 as uuid } from 'uuid'
import { useState } from 'react'

function Input({curr, handleEditing, handleRemoveBtn}) {
  return (
    <li>
      <div>
        <input id={curr.id} name="title" placeholder="Project of High Impact" value={curr.title} onChange={handleEditing} />
        &nbsp;:&nbsp;
        <input id={curr.id} name="desc" placeholder="glued together every JavaScript framework together to create the ultimate web application art project." value={curr.desc} onChange={handleEditing} />
      </div>
      <button value={curr.id} onClick={handleRemoveBtn} >🗑</button>
    </li>
  );
}

export default function Project() {

  const [items, setItems] = useState([]);

  function handleAddBtn() {
    const item = {id: uuid(), data: {title: "", desc: ""}};
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
        <h4>Projects</h4>
        <button onClick={handleAddBtn} >+</button>
      </div>
      <ul className="project-list" >
        {items.map(item => <Input key={item.id} curr={item} handleEditing={handleEditing} handleRemoveBtn={handleRemoveBtn} /> )}
      </ul>
    </>
  );
}