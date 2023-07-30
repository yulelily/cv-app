/* eslint-disable react/prop-types */
import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import './App.css'

function Input({label, value}) {
  const [text, setText] = useState(value);

  return (
    <input type="text" placeholder={label} value={text} onChange={(e) => setText(e.target.value)}></input>
  );
}

function Card({children}) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

function Education() {

  const [items, setItems] = useState([]);

  function handleAddBtn() {
    const item = uuid();
    setItems([...items, item]);
  }

  function handleRemoveBtn(e) {
    const key = e.target.value;
    setItems(items.filter(item => item !== key));
  }

  return (
    <div>
      <div>
        <h1>Education</h1>
        <button onClick={handleAddBtn} >+</button>
      </div>
        <ul className="education-list" >
          {items.map(item => <AddEducation key={item} value={item} />)}
        </ul>
    </div>
  );

  function AddEducation({value}) {
    return (
      <li>
        <Card>
          <Input label="School" value="School of Technology and Science" />
          <Input label="Location" value="Somewhere, Somewhen" />
        </Card>
        <Card>
          <Input label="Degree/GPA" value="Bachelor of Science in Computer Science; GPA: 4.00" />
          <Input label="Date" value="Aug. 2021 - June. 2025" />
        </Card>
        <button value={value} onClick={handleRemoveBtn} >🗑</button>
      </li>
    );
  }
}

export default function App() {
  return (
    <>
      <Card>
        <Input label="Name" value="Jane Doe" />
        <label> Email: <Input label="Email" value="janedoe@gmail.com" /> </label>
      </Card>
      <Card>
        <Input label="URL" value="https://www.janedoe.com" />
        <label> Mobile: <Input label="TEL" value="+1-123-456-7890" /> </label>
      </Card>
      <Education />
    </>
  );
}