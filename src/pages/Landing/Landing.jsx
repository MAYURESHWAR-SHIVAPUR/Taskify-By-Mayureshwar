import React from 'react'
import Style from "./Landing.module.css"
import Heading from '../../components/Heading/Heading'
import { Tooltip as ReactTooltip } from 'react-tooltip'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Landing = () => {
  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from("#L_F", {
        x: -1000,
        y: -1000,
        duration: 0.8,
      }).from("#L_R p", {
        y: -25,
        delay: 1,
        opacity: 0,
        stagger: 0.2,
        duration: 0.7,
        ease: "bounce.out"
      }).from("#balls", {
        opacity: 0,
        ease: "back.out"
      })
    }
  );


  return (
    <div className={Style.Landing_Outer}>
      <div id='L_F' className={Style.Landing_first}>
        <p>Turn Your Plans into Progress with Taskify</p>
      </div>
      <div id='L_R' className={Style.Landing_Second}>
        <Heading title="TASKIFY" para="By Mayureshwar" />
        <p>Welcome to Taskify, your simple and efficient task management companion. Taskify helps you organize your daily tasks, track progress, and stay focused without distractions. Whether you’re planning your day or managing ongoing work, Taskify keeps everything clear, fast, and easy so you can move from to-do to done with confidence.</p>
        <a
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Enter to TOdO"
          top='true'
          href='/Home'>GET STARTED</a>
        <ReactTooltip id="my-tooltip" />
      </div>
      <div id='balls' className={Style.balls}>
        <div className={Style.balls_Big}></div>
        <div className={Style.balls_small}></div>
      </div>
    </div>
  )
}

export default Landing
