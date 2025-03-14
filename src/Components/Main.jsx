import "../Styles/Main.css";

export default function Main({
  onCheck,
  onRemoveTask,
  sortingTasks,
  listTasks
}) {
  return (
    <div className="main__tasks">
      {listTasks.length === 0 ? (
        <div>
          <p>your list of item will show here</p>
        </div>
      ) : (
        <ul>
          {sortingTasks.map((done, index) => (
            <li key={index}>
              <input
                type="checkbox"
                className="check__box"
                checked={done.checked}
                onChange={() => onCheck(done.id)}
              />{" "}
              <p style={done.checked ? { textDecoration: "line-through" } : {}}>
                {done.activity}
              </p>
              <button
                className="remove__btn"
                onClick={() => onRemoveTask(done.id)}
              >
                &times;
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
