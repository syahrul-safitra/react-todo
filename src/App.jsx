import Navbar from "./components/Navbar.jsx";
import Form from "./components/Form.jsx";
import ListItem from "./components/ListItem.jsx";

import { useEffect, useRef, useState } from "react";

export default function App() {
  // untuk mengambil inputan dari form gunakan useRef() :
  const newTask = useRef("");

  const [taskCompleted, setTaskCompleted] = useState(0);

  // use State bisa digunakan untuk menyimpan data, selain itu juga bisa diguankan untuk memanipulasi data :
  const STORAGE = "TODOLIST_APP";
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem(STORAGE)) || [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE, JSON.stringify(tasks));

    const completed = tasks.filter((item) => item.completed == true).length;

    setTaskCompleted(completed);
  }, [tasks]);
  function setId() {
    if (tasks == "") {
      return 1;
    } else {
      return tasks[0].id + 1;
    }
  }

  function addTask(event) {
    event.preventDefault();

    if (newTask.current.value == "") {
      alert("silahkan  + item.idmasukan data!");
      return false;
    }

    // ketika data di input maka kita akan membuat objek dan menyimpan input value didalam objeknya :
    const data = {
      id: setId(),
      task: newTask.current.value,
      completed: false,
    };

    newTask.current.value = "";

    setTasks([...tasks, data]);
  }

  function setCompleted(id) {
    // container data baru :
    let updateTask = [];

    tasks.map((item, index) => {
      // jika data ditemukan maka atur ulang datanya :
      if (item.id == id) {
        updateTask[index] = { ...item, completed: !item.completed };
      } else {
        updateTask[index] = item;
      }
    });
    setTasks(updateTask);
  }

  function move(currentIndex, updateIndex) {
    const currentData = tasks[currentIndex];
    const updateData = tasks[updateIndex];

    tasks[currentIndex] = { ...currentData, id: updateData.id };
    tasks[updateIndex] = { ...updateData, id: currentData.id };

    const newData = [...tasks];

    setTasks(newData);
  }

  function remove(id) {
    setTasks(tasks.filter((item) => item.id != id));
  }

  function taskHasCompleted() {}

  return (
    <>
      <Navbar taskCompleted={taskCompleted} tasks={tasks} />
      <Form addTask={addTask} newTask={newTask} />
      <ListItem
        tasks={tasks}
        setCompleted={setCompleted}
        move={move}
        remove={remove}
      />
    </>
  );
}
