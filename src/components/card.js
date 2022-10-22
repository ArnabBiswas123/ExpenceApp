import './card.css'
import React from "react"
export default function card(props){
    const name='card '+props.className;
    return <div className={name}>{props.children}</div>
}