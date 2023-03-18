import React, { useState } from "react";
import style from "./ProffExp.module.css";
import { useRecoilState } from "recoil";
import { profExpState } from "../../RecoilState/RecoilState";
export default function ProffExp() {
  const [compName, setCompName] = useState("");
  const [title, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [number, setNumber] = useState("");
  const [expList, setExpList] = useRecoilState(profExpState);

  function handleAddExp() {
    const newExp = {
      id: Math.random(),
      compName,
      title,
      location,
      number,
    };
    const _expList = expList;
    setExpList([..._expList, newExp]);
  }

  function handleDelete(item){
    const newList = expList.filter(elem => elem.id != item.id)
    setExpList(newList)
  }
  return (
    <>
      <div>
        {expList.map((item) => (
          <div key={item.id}>
            <p>Company Name : {item.compName}</p>
            <p>Job Title : {item.title}</p>
            <p>Job Location : {item.location}</p>
            <p>Job Duration : {item.number}</p>
            <button onClick={()=>handleDelete(item)}>Delete</button>
          </div>
        ))}
      </div>

      <div className={style.sub}>
        <div className={style.labelDiv}>
          <label htmlFor="compName">Company Name</label>
          <input
            id="compName"
            value={compName}
            onChange={(e) => setCompName(e.target.value)}
          />
        </div>
        <div className={style.labelDiv}>
          <label htmlFor="jobtitle">Job Title</label>
          <input
            id="jobtitle"
            value={title}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>

        <div className={style.labelDiv}>
          <label htmlFor="location">Loaction</label>
          <input
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className={style.labelDiv}>
          <label htmlFor="duration">Job Duration in Years</label>
          <input
            id="duration"
            value={number}
            type="number"
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <button onClick={handleAddExp}>Add</button>
      </div>
    </>
  );
}
