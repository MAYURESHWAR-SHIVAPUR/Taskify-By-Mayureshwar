import React from 'react'
import Style from "./Landing.module.css"
import Heading from '../../components/Heading/Heading'

const Landing = () => {
  return (
    <div className={Style.Landing_Outer}>
      <div className={Style.Landing_first}>
        <p>Turn Your Plans into Progress with Taskify</p>
      </div>
      <div className={Style.Landing_Second}>
        <Heading title="TASKIFY" para="By Mayureshwar" />
        <p>Welcome to Taskify, your simple and efficient task management companion. Taskify helps you organize your daily tasks, track progress, and stay focused without distractions. Whether you’re planning your day or managing ongoing work, Taskify keeps everything clear, fast, and easy so you can move from to-do to done with confidence.</p>
        <a href='/Home'>GET STARTED</a>
      </div>
      <div className={Style.balls}>
        <div className={Style.balls_Big}></div>
        <div className={Style.balls_small}></div>
      </div>
    </div>
  )
}

export default Landing
