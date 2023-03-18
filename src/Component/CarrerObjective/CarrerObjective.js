import React from 'react';
import style from './CarrerObjective.module.css'
export default function CarrerObjective(props) {
 
  return (
    <>
        <div  className={style.presnol}>
        <div className={style.labelDiv}>
        <textarea cols="100" rows="5"
          id="name"
          onChange={(e) => (props.objectiveRef.current.innerHTML = e.target.value)}
        />
        </div>
        </div>
        </>
  )
}