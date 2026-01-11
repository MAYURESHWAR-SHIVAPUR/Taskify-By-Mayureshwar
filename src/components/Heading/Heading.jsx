import React from 'react'
import Style from "./Heading.module.css"

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Heading = ({ title, para }) => {
    useGSAP(
        () => {
            gsap.from("#heading h1, #heading h4", {
                y: -50,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                delay:1,
                ease:"bounce.out"
            })
        }
    );
    return (
        <div id='heading' className={Style.Heading}>
            <h1>{title}</h1>
            <h4>{para}</h4>
        </div>
    )
}

export default Heading
