import { useState } from "react";

const UseStateGotcha = () => {

  const [count, setCount] = useState(0);

  const handleClick = () => {
    // setCount((currState) => {
    //   const newState = currState + 1;
    //   console.log(newState)
    //   return newState
    // })

  //   setTimeout(() => {
  // console.log('clicked the button');
  //   setCount(count + 1);
  // }, 3000);

  setTimeout(() => {
    console.log('clicked the button');
    setCount((currentState) => {
      return currentState + 1;
    });
  }, 3000);

  }

  return <div>
    <h2>useState "gotcha"</h2>
    <h4>{count}</h4>
    <button type="button" className="btn" onClick={handleClick}>Click me</button>
  </div>
};

export default UseStateGotcha;

