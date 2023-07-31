/* eslint-disable react/prop-types */
import { useState } from 'react'
import Education from './Education.jsx'
import Experience from './Experience.jsx'
import Project from './Project.jsx'
import html2pdf from 'html2pdf.js'
import Print from './Print.jsx'
import './App.css'

function Input({label, value}) {
  const [text, setText] = useState(value);

  return (
    <input type="text" placeholder={label} value={text} onChange={(e) => setText(e.target.value)}></input>
  );
}

export default function App() {

  const [education, setEducation] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [projects, setProjects] = useState([]);

  function toggleOverlay() {
    const print = document.querySelector(".print");
    const resume = document.querySelector(".resume");
    const showPDF = document.querySelector(".showPDF");
    const pdf = document.querySelector(".PDF");

    if (print.style.display === "block") {
      print.style.display = "none";
      pdf.style.display = "none"
      showPDF.style.display = "block"
      resume.style.display = "block";
    } else {
      print.style.display = "block";
      pdf.style.display = "block";
      showPDF.style.display = "none";
      resume.style.display = "none";
    }
  }

  function handlePrinting() {
    const print = document.querySelector(".print");
    const opt = {
      margin: 0,
      filename: "my-resume.pdf",
      image: {type: "jpeg", quality: 0.98},
      enableLinks: true,
      html2canvas: {scale: 1},
      jsPDF: {unit: "in", format: "letter", orientation: "portrait"}
    }
    html2pdf().from(print).set(opt).save();
  }

  return (
    <>
      <button className="showPDF" onClick={toggleOverlay} >Show as PDF</button>
      <div className="PDF">
        <button className="savePDF" onClick={handlePrinting} >Save as PDF</button>
        <button className="hidePDF" onClick={toggleOverlay} >Hide PDF</button>
      </div>
      <div className="print" >
        <Print education={education} experiences={experiences} projects={projects} handlePrinting={handlePrinting} />
      </div>
      <div className="resume">
        <div>
          <Input label="Name" value="Jane Doe" />
          <label> Email: <Input label="Email" value="janedoe@gmail.com" /> </label>
        </div>
        <div>
          <Input label="URL" value="https://www.janedoe.com" />
          <label> Mobile: <Input label="TEL" value="+1-123-456-7890" /> </label>
        </div>
        <Education education={education} setEducation={setEducation} />
        <Experience experiences={experiences} setExperiences={setExperiences} />
        <Project projects={projects} setProjects={setProjects} />
      </div>
    </>
  );
}