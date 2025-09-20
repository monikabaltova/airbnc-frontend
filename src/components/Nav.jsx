import { Link } from "react-router";
const Nav = ({ user }) => {
  return (
    <>
      <nav className="menu">
        <Link to="/">HOME</Link>
        <Link to="/about-us">ABOUT US</Link>
        <Link to="/my-account/:userId">MY ACCAOUNT</Link>
        <Link to="/log-in">{user?.user_id ? "LOG OUT" : "LOG IN"}</Link>
      </nav>
    </>
  );
};

export default Nav;
