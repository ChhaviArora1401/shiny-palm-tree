import { useState, useEffect } from "react";

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);
 
  useEffect(() => {
    console.log('hello')
    const fetchdata = async () => {
      try {
        const result = await fetch(url);
        const users = await result.json()
        setUsers(users)
      }
      catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  },[]);

  return <section>
    <h3>Github Users</h3>
    <ul className="users">
      {users.map((i) => {
        return <li key={i.id}>
          <img src={i.avatar_url} alt={i.login}/> 
          <div>
            <h5>{i.login}</h5>
            <a href={i.html_url}>Profile</a>
          </div>
          </li>
      })}
    </ul>
  </section>;
};
export default FetchData;
