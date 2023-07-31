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
      <div className="button"><button value={curr.id} onClick={handleRemoveBtn} >🗑</button></div>
    </li>
  );
}

export default function Education({education, setEducation}) {

  function handleAddBtn() {
    const edu = {id: uuid(), data: {school: "", location: "", degree: "", date: ""}};
    setEducation([...education, edu]);
  }

  function handleEditing(e) {
    setEducation(education.map(edu => {
      if (edu.id === e.target.id) {
        edu.data[e.target.name] = e.target.value;
      }
      return edu;
    }));
  }

  function handleRemoveBtn(e) {
    const key = e.target.value;
    setEducation(education.filter(edu => edu.id !== key));
  }

  return (
    <>
      <div>
        <h4>Education</h4>
        <div className="button"><button onClick={handleAddBtn} >+</button></div>
      </div>
      <ul className="education-list" >
        {education.map(edu => <Input key={edu.id} curr={edu} handleEditing={handleEditing} handleRemoveBtn={handleRemoveBtn} /> )}
      </ul>
    </>
  );
}