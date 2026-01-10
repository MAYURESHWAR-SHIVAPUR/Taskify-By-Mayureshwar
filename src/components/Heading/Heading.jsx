import React from 'react'
import Style from "./Heading.module.css"

const Heading = ({ title, para }) => {
    return (
        <div className={Style.Heading}>
            <h1>{title}</h1>
            <h4>{para}</h4>
        </div>
    )
}

export default Heading
