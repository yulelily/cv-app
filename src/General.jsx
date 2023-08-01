/* eslint-disable react/prop-types */

export default function General({general, setGeneral}) {

  function handleEditing(e) {
    const newGeneral = structuredClone(general);
    newGeneral[e.target.name] = e.target.value;
    setGeneral(newGeneral);
  }

  return (
    <div className="rGen">
      <div>
        <input name="name" placeholder="Jane Doe" value={general.name} onChange={handleEditing} />
        <label> Email: <input name="email" placeholder="janedoe@gmail.com" value={general.email} onChange={handleEditing} /> </label>
      </div>
      <div>
        <input name="url" placeholder="https://www.janedoe.com" value={general.url} onChange={handleEditing} />
        <label> Mobile: <input name="tel" placeholder="+1-123-456-7890" value={general.tel} onChange={handleEditing} /> </label>
      </div>
    </div>
  );
}