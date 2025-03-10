import "../Styles/Footer.css";

export default function Footer({ onClear, sortedBy, onSetSortedBy }) {
  return (
    <div className="footer">
      <div>
        <select
          value={sortedBy}
          onChange={(e) => onSetSortedBy(e.target.value)}
        >
          <option value="input">Sort By Input</option>
          <option value="status">Sort By Status</option>
        </select>
      </div>

      <div>
        <button className="clear__all" onClick={onClear}>
          Clear All
        </button>
      </div>
    </div>
  );
}
