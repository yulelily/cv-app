/* eslint-disable react/prop-types */
import { useState } from 'react'
import General from  './components/General.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import Project from './components/Project.jsx'
import html2pdf from 'html2pdf.js'
import Print from './components/Print.jsx'
import './styles/App.css'


export default function App() {

  const [general, setGeneral] = useState({name: "", email: "", url: "", tel: ""});
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

  function toggleVisibility(value) {
    const headers = document.querySelectorAll(`.${value}`);
    headers.forEach(header => {
      console.log(header);
      header.style.display === "none" ? header.style.display = "block" : header.style.display = "none"
    });
  }

  return (
    <>
      <button className="showPDF" onClick={toggleOverlay} >Show as PDF</button>
      <div className="PDF">
        <button className="savePDF" onClick={handlePrinting} >Save as PDF</button>
        <button className="hidePDF" onClick={toggleOverlay} >Hide PDF</button>
      </div>
      <div className="print" >
        <Print general={general} education={education} experiences={experiences} projects={projects} handlePrinting={handlePrinting} />
      </div>
      <div className="resume">
        <General general={general} setGeneral={setGeneral} />
        <Education education={education} setEducation={setEducation} />
        <div className="button" value="eduHeader" >
          <button onClick={(e) => toggleVisibility(e.target.getAttribute("value"))} >&#128065;</button>
        </div>
        <Experience experiences={experiences} setExperiences={setExperiences} />
        <div className="button" value="expHeader" >
          <button onClick={(e) => toggleVisibility(e.target.getAttribute("value"))} >&#128065;</button>
        </div>
        <Project projects={projects} setProjects={setProjects} />
        <div className="button" value="proHeader" >
          <button onClick={(e) => toggleVisibility(e.target.getAttribute("value"))} >&#128065;</button>
        </div>
      </div>
    </>
  );
}