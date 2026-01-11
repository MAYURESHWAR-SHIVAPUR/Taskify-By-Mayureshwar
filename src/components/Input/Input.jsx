import React, { useState } from "react";
import Style from "./Input.module.css";
import { useDispatch, useSelector } from "react-redux";
import { ReduxInput } from "../../features/CounterSlice";
import { Tooltip as ReactTooltip } from 'react-tooltip'


import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);


const Input = () => {

    // animation start
    useGSAP(
        () => {

            gsap.from("#input_div", {
                x: -1000,
                delay: 1.7,
                duration: 1,
                ease: "back.out"
            })
        }
    );
    // animation end
    const [input, setInput] = useState("");
    const [message, setMessage] = useState("");



    const dispatch = useDispatch();
    const _ = useSelector((state) => state.counter.list);


    function inputHandle() {
        if (!input) {
            setMessage("Please Enter Valid information");
            return;
        }

        dispatch(ReduxInput(input));


        setInput("");
        setMessage("");
    }


    return (
        <>
            <div id="input_div" className={Style.Input_Outer}>
                <input
                    type="text"
                    placeholder="Add Work"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className={Style.Input}

                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Enter Your Work"
                    top='true'
                />
                <ReactTooltip id="my-tooltip" />
                <button
                    data-tooltip-id="button"
                    data-tooltip-content="Create New Item"
                    onClick={inputHandle}
                >ADD</button>
                <ReactTooltip id="button" />
            </div>
            <p className={Style.Error_Message}>{message}</p>
        </>
    );
};

export default Input;
