/* eslint-disable react/prop-types */

function EduText({curr}) {
  return (
    <div>
      <div>
        <p>{curr.data.school} </p>
        <p>{curr.data.location} </p>
      </div>
      <div>
        <p>{curr.data.degree} </p>
        <p>{curr.data.date} </p>
      </div>
    </div>
  );
}

function ExpText({curr}) {
  return (
    <div>
      <div>
        <p>{curr.data.company} </p>
        <p>{curr.data.location} </p>
      </div>
      <div>
        <p>{curr.data.title} </p>
        <p>{curr.data.date} </p>
      </div>
      <p className="expText" >{curr.data.desc} </p>
    </div>
  );
}

function ProText({curr}) {
  return (
    <div>
      <p className="proText" ><strong>{curr.data.title} : </strong>{curr.data.desc}</p>
    </div>
  );
}

export default function Print({general, education, experiences, projects}) {
  return (
    <>
      <div className="general" >
        <div>
          <p>{general.name} </p>
          <p>{general.email} </p>
        </div>
        <div>
          <p>{general.url} </p>
          <p>{general.tel} </p>
        </div>
      </div>

      <div className="education section eduHeader" >
        <p>Education</p>
        <div className="list">
          {education.map(edu => <EduText key={edu.id + 1} curr={edu} /> )}
        </div>
      </div>

      <div className="experience section expHeader" >
        <p>Experience</p>
        <div className="list">
          {experiences.map(experience => <ExpText key={experience.id + 1} curr={experience} />)}
        </div>
      </div>

      <div className="project section proHeader" >
        <p>Projects</p>
        <div className="list">
          {projects.map(project => <ProText key={project.id + 1} curr={project} /> )}
        </div>
      </div>
    </>
  );
}