import React from "react";
import Botones from "./Botones";

const studentName = "Facundo Fernández";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

let skills = techSkills.map((elemento, index) =>(
  <li key={index}>{elemento}</li>
))

export default function Bienvenido() {
  return(
    <div>
      <h1>soy Henry!</h1>
      <h3>{studentName}</h3>
      <ul>{skills}</ul>
      <Botones props= {alerts}></Botones>
    </div>
  )
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
