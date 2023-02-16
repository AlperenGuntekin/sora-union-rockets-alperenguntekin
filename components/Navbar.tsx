import NextLink from "next/link";
import Image from "next/image";
import { imageLogo } from "@/utils/imageLogo";
import { useAppDispatch } from "@/redux/hooks";
import { setLoader } from "@/redux/features/reviews/reviewSlice";

const Navbar = () => {
  const dispatch = useAppDispatch();
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="text-center">Sora Union</h1>
      </div>
    </nav>
  );
};

export default Navbar;
