import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // done fetching data
      setIsLoading(false)
    }, 3000);
  }, []);

  if (isloading) {
    return <h2>Loading...</h2>;
  }

  return <h2>Multiple Returns Basics</h2>;
};
export default MultipleReturnsBasics;
