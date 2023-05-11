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
    // console.log('hmm, this is interesting');
    const someFunc = () => {
      // some logic here
    };
    window.addEventListener('scroll', someFunc);
    return () => window.removeEventListener('scroll', someFunc);
  }, []);
  return <h1>Hello there</h1>
}

export default CleanupFunction;
