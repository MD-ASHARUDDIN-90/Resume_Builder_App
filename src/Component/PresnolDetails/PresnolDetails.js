import React from 'react';
import style from './PresnolDetails.module.css'
export default function PresnolDetails(props) {
 
  return (
    <>
     
      <div  className={style.presnol}>
        <div className={style.labelDiv}>
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          onChange={(e) => (props.nameRef.current.innerHTML = e.target.value)}
        />
        </div>
        <div className={style.labelDiv}>
        <label htmlFor="job">Job Title</label>
        <input
          id="job"
          onChange={(e) => (props.jobRef.current.innerHTML = e.target.value)}
        />
        </div>

        <div className={style.labelDiv}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          onChange={(e) => (props.emailRef.current.innerHTML = e.target.value)}
        />
      </div>
      <div className={style.labelDiv}>
        <label htmlFor="cont">Contact No.</label>
        <input
          type="number"
          id="cont"
          onChange={(e) => (props.contRef.current.innerHTML = e.target.value)}
        />
        </div>
      <div className={style.labelDiv}>
        <label htmlFor="address">Address</label>
        <input
          id="address"
          onChange={(e) => (props.addRef.current.innerHTML = e.target.value)}
        />
        </div>
        <div className={style.labelDiv}>

        <label htmlFor="Dob">Date Of Birth</label>
        <input type="date" id="Dob" onChange={(e) => (props.dobRef.current.innerHTML = e.target.value)}/>
        </div>
        <div className={style.labelDiv}>
        <label htmlFor="Dob">Gender</label>
        <input type="text" id="Dob" onChange={(e) => (props.genderRef.current.innerHTML = e.target.value)} />
        </div>
        <div className={style.labelDiv}>
        <label htmlFor="Dob">Nationality</label>
        <input type="text" id="Dob" onChange={(e) => (props.nationRef.current.innerHTML = e.target.value)} />
        </div>
        <div className={style.labelDiv}>
        <label htmlFor="Dob">Marital Status</label>
        <input type="text" id="Dob" onChange={(e) => (props.marryRef.current.innerHTML = e.target.value)} />
        </div>
        <div className={style.labelDiv}>
        <label htmlFor="Dob">Linkedin-ID</label>
        <input type="text" id="Dob" onChange={(e) => (props.linkedinRef.current.innerHTML = e.target.value)} />
        </div>
      </div>
    </>
  );
}
