import React, { useState } from "react";
import Style from "./Input.module.css";
import { useDispatch, useSelector } from "react-redux";
import { ReduxInput } from "../../features/CounterSlice";


const Input = () => {
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
            <div className={Style.Input_Outer}>
                <input
                    type="text"
                    placeholder="Add Work"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className={Style.Input}
                />
                <button onClick={inputHandle}>ADD</button>
            </div>

            <p className={Style.Error_Message}>{message}</p>
        </>
    );
};

export default Input;
