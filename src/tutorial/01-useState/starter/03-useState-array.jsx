import { data } from "../../../data";
import { useState } from "react";
const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const remove = () => {
    setPeople([]);
  }

  const removesingle = (id) => {
    var peeps = people
    peeps = peeps.filter((items) => items.id !== id)
    console.log(peeps)
    setPeople(peeps)
  }

  return <div>
    <h1>People List</h1>
    {people.map((items) => {
      return <div key={items.name}>{items.name} <span onClick={() => {
        removesingle(items.id)
      }}>X</span></div>
    })}
    <button onClick={remove} className="btn">Remove all</button>
  </div>;
};

export default UseStateArray;
