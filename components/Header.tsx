import NextLink from "next/link";
import { IoRocketSharp, IoAddSharp } from "react-icons/io5";

const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="d-flex justify-content-start align-items-center">
        <IoRocketSharp className="fs-2 text-danger fw-bold" />
        <h2 className="px-3 fw-semibold">
          Lists of Rocket
        </h2>
      </div>
      <NextLink href="/create">
        <IoAddSharp className="create-icon fs-1 fw-bold" />
      </NextLink>
    </div>
  );
};

export default Header;
