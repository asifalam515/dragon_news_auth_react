import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl font-bold">Log in with </h2>
        <button className="btn btn-outline w-full">
          <FaGoogle />
          Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub />
          Github
        </button>
      </div>
      {/* next section */}
      <div className="p-4  mb-6">
        <h2 className="text-3xl mb-4 font-bold">Find Us On </h2>
        <a
          href=""
          className="p-4 flex text-lg items-center border rounded-t-lg"
        >
          {" "}
          <CiFacebook className="mr-3" />
          Facebook
        </a>
        <a
          href=""
          className="p-4 flex text-lg items-center border rounded-b-lg"
        >
          {" "}
          <FaXTwitter className="mr-3" />
          Twitter
        </a>
        <a
          href=""
          className="p-4 flex text-lg items-center border rounded-t-lg"
        >
          {" "}
          <FaInstagram className="mr-3" />
          Instagram
        </a>
      </div>

      {/* Q zone */}
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl font-bold">Q Zone </h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
