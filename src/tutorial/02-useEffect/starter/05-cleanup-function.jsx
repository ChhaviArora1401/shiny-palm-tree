import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false)
  console.log('render')
  return <div>
    <button className="btn" onClick={() => { setToggle(!toggle) }}>Toggle</button>
    {toggle ? <RandomComponent/> : ""}
  </div>;
};

const RandomComponent = () => {
  useEffect(() => {
    console.log('hm, this is interesting')
    const intID = setInterval(() => {
      console.log("hello from interval")
    }, 1000)
    return () => {
      clearInterval(intID)
      console.log('clean up')
    }
  }, [])
  return <h1>Hello there</h1>
}

export default CleanupFunction;
