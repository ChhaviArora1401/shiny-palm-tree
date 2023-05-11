import { useState } from 'react';

const ShortCircuitOverview = () => {
  //falsy
  const [first, setFirst] = useState('')

  //truthy
  const [second, setSecond] = useState('octo')

  const codeExample = first || 'hello world';

  return <div>
    <h2>short circuit overview</h2>
    {/* {if(someConditon) {"wont work"}} */}
    <h4>Falsy OR: {first || 'hello world'}</h4>
    <h4>Falsy AND: {first && 'hello world'}</h4>
    <h4>Truthy OR: {second || 'hello world'}</h4>
    <h4>Truthy AND: {second || 'hello world'}</h4>
    {codeExample}
  </div>;
};
export default ShortCircuitOverview;
