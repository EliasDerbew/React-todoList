import "../Styles/Header.css";

export default function Header({
  task,
  onSetTask,
  onSubmiteHandle,
}) {
  return (
    <form className="header" onSubmit={onSubmiteHandle}>
      <div>
        <h1>Your Daily Activity Manager</h1>
        <p>Make a plane and do your task</p>
      </div>

      <div className="input__and__btn">
        <input
          type="text"
          className="input__task"
          placeholder="your activity . . ."
          value={task}
          onChange={(e) => onSetTask(e.target.value)}
        />
        <button className="add__btn">Add to task</button>
      </div>
    </form>
  );
}
