import React, { useState } from "react";
import Style from "./Home.module.css";
import Heading from "../../components/Heading/Heading";
import Input from "../../components/Input/Input";

import { useSelector, useDispatch } from "react-redux";
import { toggleEdit, updateText, toggleComplete, deleteTodo } from "../../features/CounterSlice";


const Home = () => {
  const [name] = useState();
  const time = new Date().getHours();

  // const [todo, setTodo] = useState([]);
  const [sort, setSort] = useState("recent");

  const dispatch = useDispatch();
  const todo = useSelector((state) => state.counter.list);

  const toggleEditHandler = (id) => {
    dispatch(toggleEdit(id));
  };

  const updateTextHandler = (id, value) => {
    dispatch(updateText({ id, value }));
  };

  const toggleCompleteHandler = (id) => {
    dispatch(toggleComplete(id));
  };

  const deleteTodoHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const filteredTodo = todo.filter((t) => {
    if (sort === "completed") return t.completed;
    if (sort === "pending") return !t.completed;
    return true;
  });

  return (
    <div className={Style.Home_Outer}>
      <div className={Style.Home_Nav}>
        <Heading
          title="TASKIFY"
          para={`${time < 12 ? "Good Morning" : "Good Evening"} ${name || "User"},`}
        />

        <form className={Style.Home_Nav_Content}>
          <h3>Sort By</h3>

          <input
            type="radio"
            name="sort"
            value="recent"
            checked={sort === "recent"}
            onChange={(e) => setSort(e.target.value)}
            id="recent"
          />
          <label htmlFor="recent">Recent Task</label>
          <br />

          <input
            type="radio"
            name="sort"
            value="completed"
            checked={sort === "completed"}
            onChange={(e) => setSort(e.target.value)}
            id="completed"
          />
          <label htmlFor="completed">Completed Task</label>
          <br />

          <input
            type="radio"
            name="sort"
            value="pending"
            checked={sort === "pending"}
            onChange={(e) => setSort(e.target.value)}
            id="pending"
          />
          <label htmlFor="pending">Pending Task</label>
        </form>
        <button className={Style.Night}></button>
      </div>

      <div className={Style.Home_Content}>
        <Input />

        <div className={Style.Contents}>
          {filteredTodo.length === 0 ? (
            <div className={Style.Items}>
              <input type="text" value="No Task Added" readOnly />
            </div>
          ) : (
            filteredTodo.map((t) => (
              <div key={t.id} className={Style.Items}>
                <input
                  value={t.text}
                  readOnly={!t.editable}
                  onChange={(e) => updateTextHandler(t.id, e.target.value)}
                  style={{
                    textDecoration: t.completed ? "line-through" : "none",
                    color: t.editable ? "green" : "black",
                  }}
                />
                <div className={Style.Home_Oper}>
                  <i
                    onClick={() => toggleEditHandler(t.id)}
                    className={
                      !t.editable
                        ? "fa-solid fa-pen-to-square"
                        : "fa-solid fa-floppy-disk"
                    }
                  ></i>
                  <i
                    onClick={() => toggleCompleteHandler(t.id)}
                    className="fa-solid fa-circle-check"
                  ></i>
                  <i
                    onClick={() => deleteTodoHandler(t.id)}
                    className="fa-solid fa-trash"
                  ></i>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
