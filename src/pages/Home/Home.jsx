import React, { useRef, useState } from "react";
import Style from "./Home.module.css";
import Heading from "../../components/Heading/Heading";
import Input from "../../components/Input/Input";
import { Tooltip as ReactTooltip } from 'react-tooltip'
import useThemeToggle from "../../features/useTheme";


import { useSelector, useDispatch } from "react-redux";
import { toggleEdit, updateText, toggleComplete, deleteTodo } from "../../features/CounterSlice";


import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Home = () => {
  const { toggleTheme } = useThemeToggle();
  const menu = useRef();


  // animation start
  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from("#form h3,#form label, #form input", {
        delay: 1,
        x: -50,
        opacity: 0,
        ease: "bounce.out",
        stagger: 0.2,
      }).from("#items", {
        x: -1000,
        opacity: 0,
        duration: 1,
        ease: "back.out"
      });
    }
  );

  // animation end
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


  // toggle show / hide (recommended)
  const toggleMenu = () => {
    menu.current.style.display =
      menu.current.style.display === "block" ? "none" : "block";
  };



  const filteredTodo = todo.filter((t) => {
    if (sort === "completed") return t.completed;
    if (sort === "pending") return !t.completed;
    return true;
  });

  return (
    <div className={Style.Home_Outer}>
      {window.innerWidth < 768 &&
        <>
          <i
            id={Style.menu}
            onClick={toggleMenu} className="fa-solid fa-bars"

            data-tooltip-id="menu"
            data-tooltip-content="click to hide and show Menu"
          ></i>
          <ReactTooltip
            place="left"
            id="menu" />
        </>
      }
      <div ref={menu} className={Style.Home_Nav}>
        <Heading
          title="TASKIFY"
          para={`${time < 12 ? "Good Morning" : "Good Evening"} ${name || "User"},`}
        />

        <form id="form" className={Style.Home_Nav_Content}>
          <h3>Sort By</h3>

          <input
            type="radio"
            name="sort"
            value="recent"
            checked={sort === "recent"}
            onChange={(e) => setSort(e.target.value)}
            id="recent"
          />
          <label
            data-tooltip-id="recent"
            data-tooltip-content="Select to get Recently added tasks"
            htmlFor="recent"
          >Recent Task</label>
          <ReactTooltip
            place="right"
            id="recent" />
          <br />

          <input
            type="radio"
            name="sort"
            value="completed"
            checked={sort === "completed"}
            onChange={(e) => setSort(e.target.value)}
            id="completed"
          />
          <label
            data-tooltip-id="completed"
            data-tooltip-content="Select to get completed tasks"
            htmlFor="completed"
          >Completed Task</label>
          <ReactTooltip
            place="right"
            id="completed" />
          <br />

          <input
            type="radio"
            name="sort"
            value="pending"
            checked={sort === "pending"}
            onChange={(e) => setSort(e.target.value)}
            id="pending"
          />
          <label
            htmlFor="pending"
            data-tooltip-id="pending"
            data-tooltip-content="Select to get Pending tasks"
          >Pending Task</label>
          <ReactTooltip
            place="right"
            id="pending" />
        </form>
        <button
          data-tooltip-id="night"
          data-tooltip-content="Click to switch themes (Dark/Light)"
          onClick={toggleTheme} className={Style.Night}><i class="fa-solid fa-circle-half-stroke"></i>
        </button>
        <ReactTooltip
          place="right"
          id="night" />
      </div>

      <div className={Style.Home_Content}>
        <Input />

        <div className={Style.Contents}>
          {filteredTodo.length === 0 ? (
            <div id="items" className={Style.Items}>
              <input type="text" value="No Task Added" readOnly />
            </div>
          ) : (
            filteredTodo.map((t) => (
              <div id="items" key={t.id} className={Style.Items}>
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
