import { useState } from "react";

const ToggleChallenge = () => {
const [isAdd, setIsAdd] = useState(false)

const Adding = () => {
  setIsAdd(!isAdd);
}

  return <div>
    <h2>toggle challenge</h2>
    Hello there
    <br/> 
    {isAdd ? <span>Please Edit</span> : <span>Please Add</span>}
    <br/>
    <button className="btn"
    onClick={Adding}>Add</button>
  </div>;
};

export default ToggleChallenge;
