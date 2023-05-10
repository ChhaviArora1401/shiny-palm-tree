import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter', 
    age: 24, 
    hobby: "read books"
  })
  // const [name, setName] = useState("Peter");
  // const [age, setAge] = useState(24);
  // const [hobby, setHobby] = useState("Read Books");

  const changePerson = () => {
    // setName("John")
    // setAge(28)
    // setHobby("Screams at the computer")
    setPerson({name: 'john', age: '28', hobby: 'Screams at the computer'})
    // setPerson({...person, name: 'susan'})
  }

  return <div>
    <h2>useState object example</h2>
    {/* <h3>{name}</h3>
    <h3>{age}</h3>
    <h3>Enjoys: {hobby}</h3> */}
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>Enjoys: {person.hobby}</h3>
    <button onClick={changePerson} className='btn'>Show John</button>
  </div>;
};

export default UseStateObject;
