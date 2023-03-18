import React, { useRef, useState } from "react";
import style from "./App.module.css";
import PresnolDetails from "./Component/PresnolDetails/PresnolDetails";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiAtSymbol } from "react-icons/hi";
import CarrerObjective from "./Component/CarrerObjective/CarrerObjective";
import ProffExp from "./Component/ProfessionalExprirence/ProffExp";

export default function App() {
  const nameRef = useRef();
  const jobRef = useRef();
  const emailRef = useRef();
  const contRef = useRef();
  const addRef = useRef();
  const dobRef = useRef();
  const genderRef = useRef();
  const nationRef = useRef();
  const linkedinRef = useRef();
  const marryRef = useRef();
  const objectiveRef = useRef();

  const [showPresnolDetails, setShowPresnolDetails] = useState(true);
  const [showCarrerObjective, setShowCarrerObjective] = useState(false);
  const [showProffExp, setShowProffExp] = useState(false);

  function handleShow() {
    setShowPresnolDetails(!showPresnolDetails ? true : false);
  }
  return (
    <div className={style.main}>
      <div className={style.editSec}>
        <h1 onClick={handleShow}>Enter Presnol Details</h1>
        {showPresnolDetails ? (
          <PresnolDetails
            nameRef={nameRef}
            jobRef={jobRef}
            emailRef={emailRef}
            contRef={contRef}
            addRef={addRef}
            dobRef={dobRef}
            genderRef={genderRef}
            nationRef={nationRef}
            linkedinRef={linkedinRef}
            marryRef={marryRef}
          />
        ) : (
          ""
        )}
        <h1
          onClick={() => {
            setShowCarrerObjective(!showCarrerObjective ? true : false);
          }}
        >
          Carrer Objective
        </h1>
        {showCarrerObjective ? (
          <CarrerObjective objectiveRef={objectiveRef} />
        ) : (
          ""
        )}
       
        <h1   onClick={() => {
          setShowProffExp(!showProffExp ? true : false);
        }}>Proffessional Experience</h1>
        {showProffExp ?
        <ProffExp />
        : ""
        }
      </div>

      <div className={style.readSec}>

        <div className={style.topSec}>
          <h1 ref={nameRef}></h1>
          <h2 ref={jobRef}></h2>
          <p ref={emailRef}></p>
          <p ref={contRef}></p>
          <p ref={addRef}></p>
          <div className={style.subSec}>
            <p ref={dobRef}></p>
            <p ref={genderRef}></p>
            <p ref={nationRef}></p>
            <p ref={marryRef}></p>
          </div>
          <p ref={linkedinRef}></p>
          </div>
          
{showCarrerObjective ?
  
        <div className={style.objecDiv}>
        <h3>Carrer Objective</h3>
        <p ref={objectiveRef}></p>
       
        </div>
        : ""
      }

{showProffExp ?
  
        <div className={style.objecDiv}>
        <h3>Proffessional Experience</h3>
        <p></p>
       
        </div>
        : ""
      }
      </div>
    </div>
  );
}
