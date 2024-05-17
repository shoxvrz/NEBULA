import TuneIcon from "@mui/icons-material/Tune";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
      <TuneIcon className="icon" />
      <h1 className="navbar__logo">NEBULE</h1>
      <div className="navbar__right">
        <ShoppingCartIcon className="icon" />
        {/* <span></span> */}
        <AccountCircleIcon className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
