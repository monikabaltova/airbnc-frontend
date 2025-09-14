import { Link, useNavigate } from "react-router";

const LogIn = ({ userId, setUserId }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    const value = document.getElementById("user-id").value;
    setUserId(value);
    navigate(`/my-account/${value}`);
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
