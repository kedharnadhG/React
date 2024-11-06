import React from "react";

import { FamilyContext } from "./FamilyContext";
import { useContext } from "react";

function Grandson() {
    const message=useContext(FamilyContext)
  return (
    <div className="gson">
      <h1>Grandson {message.familyName}</h1>
    </div>
  );
}

export default Grandson;
