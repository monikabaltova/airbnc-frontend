import { Link } from "react-router";
const Nav = ({ user }) => {
  return (
    <>
      <nav className="menu">
        <Link to="/">HOME</Link>
        <Link to="/my-account/:userId">MY ACCOUNT</Link>
        <Link to="/log-in">{user?.user_id ? "LOG OUT" : "LOG IN"}</Link>
      </nav>
    </>
  );
};

export default Nav;
