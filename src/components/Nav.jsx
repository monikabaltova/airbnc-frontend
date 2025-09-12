import { Link } from "react-router";
const Nav = () => {
  return (
    <>
      <nav className="menu">
        <Link to="/">HOME</Link>
        <Link to="/about-us">ABOUT US</Link>
        <Link to="/contact-us">CONTACT US</Link>
        <Link to="/my-account">MY ACCAUNT</Link>
      </nav>
    </>
  );
};

export default Nav;
