import { IoRocketSharp } from "react-icons/io5";
import { BsStars } from "react-icons/bs";

interface IProps {
  title: string
}

const FormHeader = ({ title }: IProps) => {
  return (
    <div
      className="d-flex justify-content-start"
    >
      <h3 className="fs-2 text-black fw-semibold">{title}</h3>
      <div className="d-flex justify-content-start align-items-center px-3">
        <BsStars className="fs-2 fw-bold" style={{ color: "gold" }} />
        <IoRocketSharp className="fs-2 text-danger fw-bold" />
        <BsStars className="fs-2 fw-bold" style={{ color: "gold" }} />
      </div>
    </div>
  );
};

export default FormHeader;
