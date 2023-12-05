import "./SearchBar.css";

function SearchBar({ onMerge }) {
  return (
    <>
      <div className="header">
        <p className="merge-table">Merge Table</p>
        <div className="search-bar">
          <input
            className="main-input"
            type="search"
            name=""
            id=""
            placeholder="EX: 1,2,3"
          />
          <button className="merge-button" type="button" onClick={onMerge}>
            Merge
          </button>
        </div>
      </div>
    </>
  );
}
export default SearchBar;
