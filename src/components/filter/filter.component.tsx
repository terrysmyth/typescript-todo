
function Filter({setQuery, setStatus, status}: {setQuery:any, setStatus:any, status: string}) {

  const handleChange = (event: any): void => {
    setQuery(event.target.value);
  }

  const handleStatus = (event:any) =>{
    setStatus(event.target.value);
  }

  return (
    <div className="filter">
      <input
      onChange={handleChange}
      type="search" placeholder="search" />
      <button
      value="all"
      onClick={handleStatus}
      className={`${status === "all" ? "selected" : ""}`}
      >All</button>
      <button
      value="not"
      onClick={handleStatus}
      className={`${status === "not" ? "selected" : ""}`}
      >Not Done</button>
      <button
      value="done"
      onClick={handleStatus}
      className={`${status === "done" ? "selected" : ""}`}
      >Done</button>
    </div>
  );
}

export default Filter;
