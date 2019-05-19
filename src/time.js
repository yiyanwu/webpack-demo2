import React, {Component} from 'react';
import './time.css'

export default function time (){
    let myDate = new Date()
    return(
        <div className="time">
            <a>{myDate.toLocaleDateString()}</a>
        </div>
    )
}