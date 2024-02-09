const Header = ({ filter, setFilter }) => {
  return (
    <div>
      <h1>Product List</h1>
      <form>
        <label>
          Enter Category:
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </label>
        <button type="button" onClick={() => setFilter("")}>
          Show All
        </button>
      </form>
    </div>
  );
};

export default Header;
