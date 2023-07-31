/* eslint-disable react/prop-types */
import { useState } from 'react'
import Education from './Education.jsx'
import Experience from './Experience.jsx'
import './App.css'

function Input({label, value}) {
  const [text, setText] = useState(value);

  return (
    <input type="text" placeholder={label} value={text} onChange={(e) => setText(e.target.value)}></input>
  );
}

export default function App() {
  return (
    <>
      <div>
        <Input label="Name" value="Jane Doe" />
        <label> Email: <Input label="Email" value="janedoe@gmail.com" /> </label>
      </div>
      <div>
        <Input label="URL" value="https://www.janedoe.com" />
        <label> Mobile: <Input label="TEL" value="+1-123-456-7890" /> </label>
      </div>
      <Education />
      <Experience />
    </>
  );
}