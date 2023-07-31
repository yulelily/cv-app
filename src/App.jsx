/* eslint-disable react/prop-types */
import { useState } from 'react'
import Education from './Education.jsx'
import Experience from './Experience.jsx'
import Project from './Project.jsx'
import html2pdf from 'html2pdf.js'
import './App.css'

function Input({label, value}) {
  const [text, setText] = useState(value);

  return (
    <input type="text" placeholder={label} value={text} onChange={(e) => setText(e.target.value)}></input>
  );
}

export default function App() {

  function handlePrinting() {
    const resume = document.querySelector(".resume");
    const opt = {
      margin: 0,
      filename: "my-resume.pdf",
      image: {type: "jpeg", quality: 0.98},
      enableLinks: true,
      html2canvas: {scale: 1},
      jsPDF: {unit: "in", format: "letter", orientation: "portrait"}
    }
    html2pdf().from(resume).set(opt).save();
  }

  return (
    <>
      <button className="html2pdf" onClick={handlePrinting} >Save as PDF</button>
      <div className="resume">
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
        <Project />
      </div>
    </>
  );
}