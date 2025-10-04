export function SearchEmployee({ setSearchText, handleSearch }) {
  return (
    <div>
      <input
        className = "form-input rounded w-75"
        type="text"
        onChange={(event) => setSearchText(event?.target?.value)}
      />
      <button onClick={handleSearch} className="btn btn-secondary ms-3">Search</button>
    </div>
  );
}
