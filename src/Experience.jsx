/* eslint-disable react/prop-types */
import { v4 as uuid } from 'uuid'

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
      <textarea id={curr.id} name="desc" placeholder="Description of my work here: accidentally rm -rf'd production database but recovered the lost data." value={curr.desc} onChange={handleEditing} ></textarea>
      <div className="button"><button value={curr.id} onClick={handleRemoveBtn} >🗑</button></div>
    </li>
  );
}

export default function Experience({experiences, setExperiences}) {

  function handleAddBtn() {
    const experience = {id: uuid(), data: {company: "", location: "", title: "", date: "", desc: ""}};
    setExperiences([...experiences, experience]);
  }

  function handleEditing(e) {
    setExperiences(experiences.map(experience => {
      if (experience.id === e.target.id) {
        experience.data[e.target.name] = e.target.value;
      }
      return experience;
    }));
  }

  function handleRemoveBtn(e) {
    const key = e.target.value;
    setExperiences(experiences.filter(experience => experience.id !== key));
  }

  return (
    <>
      <div>
        <h4>Experience</h4>
        <div className="button"><button onClick={handleAddBtn} >+</button></div>
      </div>
      <ul className="experience-list" >
        {experiences.map(experience => <Input key={experience.id} curr={experience} handleEditing={handleEditing} handleRemoveBtn={handleRemoveBtn} /> )}
      </ul>
    </>
  );
}