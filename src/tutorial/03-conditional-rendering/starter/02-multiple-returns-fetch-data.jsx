import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  const fetchData = async () => {
    try {
      const result = await fetch(url);
      if (!result.ok) {
        setIsError(true)
        setIsLoading(false)
        return;
      }
      console.log(result)
      const user = await result.json();
      setUser(user)
    } catch (error) {
      setIsError(true)
      console.log(error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, []) 

  if(isLoading) {
    return <h2>Loading....</h2>
  }

  if(isError) {
    return <h2>There was some error....</h2>
  }

  const {avatar_url, name, company, bio} = user;
  return <div>
    <img style={{width: "150px", borderRadius: "50px"}} src={avatar_url} alt={name} />
    <h2>{name}</h2>
    <h4>works at {company}</h4>
    <p>{bio}</p>
  </div>;
};
export default MultipleReturnsFetchData;
