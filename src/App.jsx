import { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState("");
  const [listTasks, setListTasks] = useState([]);
  const [sortedBy, setSortedBy] = useState("input");

  // 1) handles the task that user add
  function handleTasks(act) {
    setListTasks(() => [
      ...listTasks,
      { activity: act, checked: false, id: Date.now() },
    ]);
  }

  // 2) on Submite Form
  function handleSubmite(e) {
    e.preventDefault();

    handleTasks(tasks);
    setTasks("");
  }

  // 3) Done tasks make line-through
  function handleCheck(id) {
    setListTasks((activ) =>
      activ.map((a) => (a.id === id ? { ...a, checked: !a.checked } : a))
    );
  }

  // 4) Remove task form list

  function removeTask(id) {
    setListTasks((activities) => activities.filter((a) => a.id !== id));
  }

  // 5 ) Clear all tasks

  function handleClear() {
    setListTasks(() => []);
  }

  // 6) sort tasks

  let sortedTask;

  if (sortedBy === "input") sortedTask = listTasks;

  if (sortedBy === "status") {
    sortedTask = listTasks
      .slice()
      .sort((a, b) => Number(a.checked) - Number(b.checked));
  }

  return (
    <div className="app">
      <div></div>
      <Header
        onHandleTasks={handleTasks}
        onSubmiteHandle={handleSubmite}
        task={tasks}
        onSetTask={setTasks}
      />
      <Main
        listTasks={listTasks}
        onCheck={handleCheck}
        onRemoveTask={removeTask}
        sortingTasks={sortedTask}
      />
      <Footer
        onClear={handleClear}
        lists={listTasks}
        onLists={setListTasks}
        sortedBy={sortedBy}
        onSetSortedBy={setSortedBy}
      />
    </div>
  );
}
