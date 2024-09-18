import moment from "moment";
import logo from "../../../assets/logo.png";
const Header = () => {
  return (
    <div className="text-center">
      <img className="mx-auto" src={logo} alt="" />
      <p>Journalism Without Fear or Favour</p>
      <p className="text-xl"> {moment().format("Do MMMM D, YYYY, h:mm a")}</p>
    </div>
  );
};

export default Header;
