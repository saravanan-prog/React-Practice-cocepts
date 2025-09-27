export function SearchEmployee({ setSearchText, handleSearch }) {
  return (
    <div>
      <input
        type="text"
        onChange={(event) => setSearchText(event?.target?.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
