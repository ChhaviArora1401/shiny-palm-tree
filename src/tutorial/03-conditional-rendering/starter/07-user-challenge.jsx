import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null)

  const Login = () => {
    setUser({name: 'Octo'});
  }

  const Logout = () => {
    setUser(null);
  }

  return <div>
    {user ? <div>
      <h4>Hello there, {user.name}</h4>
      <button className="btn" onClick={Logout}>Logout</button></div>: <div><h4>please Login</h4>
      <button className="btn" onClick={Login}>Login</button></div>}
  </div>;
};

export default UserChallenge;
