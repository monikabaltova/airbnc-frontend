import { Link } from "react-router";

const LogIn = ({ userId, setUserId }) => {
  const handleLogin = () => {
    const value = document.getElementById("user-id").value;
    setUserId(value);
  };

  return (
    <div>
      <label htmlFor="user-id">
        User ID
        <input id="user-id"></input>
        <Link key={userId} to={`/my-account/${userId}`}>
          <button onClick={handleLogin}> Log In</button>
        </Link>
      </label>
    </div>
  );
};

export default LogIn;
