import moment from "moment";
import logo from "../../../assets/logo.png";
const Header = () => {
  return (
    <div>
      <img src={logo} alt="" />
      <p>Journalism Without Fear or Favour</p>
      <p className="text-xl"> {moment().format("Do MMMM D, YYYY, h:mm a")}</p>
    </div>
  );
};

export default Header;
