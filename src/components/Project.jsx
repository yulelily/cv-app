/* eslint-disable react/prop-types */
import { v4 as uuid } from 'uuid'

function Input({curr, handleEditing, handleRemoveBtn}) {
  return (
    <div>
      <div>
        <input id={curr.id} name="title" placeholder="Project of High Impact" value={curr.title} onChange={handleEditing} />
        &nbsp;:&nbsp;
        <textarea id={curr.id} name="desc" placeholder="glued together every JavaScript framework together to create the ultimate web application art project." value={curr.desc} onChange={handleEditing}> </textarea>      
      </div>
      <div className="button"><button value={curr.id} onClick={handleRemoveBtn} >🗑</button></div>
    </div>
  );
}

export default function Project({projects, setProjects}) {

  function handleAddBtn() {
    const project = {id: uuid(), data: {title: "", desc: ""}};
    setProjects([...projects, project]);
  }

  function handleEditing(e) {
    setProjects(projects.map(project => {
      if (project.id === e.target.id) {
        project.data[e.target.name] = e.target.value;
      }
      return project;
    }));
  }

  function handleRemoveBtn(e) {
    const key = e.target.value;
    setProjects(projects.filter(project => project.id !== key));
  }

  return (
    <>
      <div className="proHeader" >
        <h4>Projects</h4>
        <div className="button"><button onClick={() => handleAddBtn()} >+</button></div>
      </div>
      <div className="list proHeader" >
        {projects.map(project => <Input key={project.id} curr={project} handleEditing={(e) => handleEditing(e)} handleRemoveBtn={(e) => handleRemoveBtn(e)} /> )}
      </div>
    </>
  );
}