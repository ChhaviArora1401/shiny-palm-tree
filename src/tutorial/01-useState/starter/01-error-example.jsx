const ErrorExample = () => {

  let count = 0;

  const IncreaseValue = () => {
    count = count + 1;
    console.log(count)
  }

  return <div>
    <h2>{count}</h2>
    <button onClick={IncreaseValue} className="btn">Add</button>
  </div>;

};

export default ErrorExample;

 