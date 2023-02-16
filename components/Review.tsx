import { setLoader, storeUser } from "@/redux/features/reviews/reviewSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getDataFromLocalStorage } from "@/utils/getLocalStorage";
import { RocketProps } from "@/utils/interface";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaExternalLinkAlt } from "react-icons/fa";
import Loader from "./Loader";
import NextLink from "next/link";

const Review = () => {
  const [getData, setGetData] = useState([]);

  const { isLoading } = useAppSelector((state) => state.review);
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoader(false));
    }, 900);
  });

  useEffect(() => {
    let data = getDataFromLocalStorage();

    if (data) {
      setGetData(data);
    }
  }, []);

  const handleDelete = (id: number) => {
    const findData = getDataFromLocalStorage().filter(
      (item: RocketProps) => item.id !== id
    );

    setGetData(findData);

    dispatch(storeUser(findData));
    router.push("/");
  };

  if (isLoading) {
    return (
      <div className="mt-2">
        <Loader />
      </div>
    );
  }

  if (getData.length === 0) {
    return (
      <div className="mt-4">
        <h3 className="text-center">
        There is no review card available here! Add now!
        </h3>
      </div>
    );
  }

  return (
<div className="mt-4">
  <div className="review-container">
    {getData.map((item: RocketProps) => (
      <div className="review-container-form" key={item.id}>
        <div className="content">
          <div
            className="rounded"
            style={{ backgroundColor: "rgb(230 230 230);" }}
          ></div>
          <div className="content-body">
            <div className="px-2">
              <div className="d-flex justify-content-between align-items-center">
                <h2 className="fs-4 text-black">{item.title}</h2>
                <div className="d-flex px-2">
                  <NextLink href={`/update/${item.id}`}>
                    <AiFillEdit
                      className="mt-3 text-success"
                      onClick={() => {
                        dispatch(setLoader(true));
                      }}
                      fontSize="30px"
                    />
                  </NextLink>
                  <RiDeleteBin5Line
                    className="mt-3 text-danger"
                    onClick={() => handleDelete(item.id)}
                    fontSize="30px"
                  />
                </div>
              </div>
              <h4 className="mt-4 text-danger">{item.rocketName}</h4>
              <div className="mt-4 py-3">
                {item.description}
                <span className="btn btn-outline-danger btn-sm mx-2">
                  <NextLink
                    href={`/single/${item.id}`}
                    onClick={() => dispatch(setLoader(true))}
                  >
                    <FaExternalLinkAlt className="fw-bold text-black"/>
                  </NextLink>
                </span>
              </div>
              <div className="d-flex align-items-center">
                <img
                  src={item.githubUser.avatar_url}
                  alt={item.githubUser.login}
                  height="60px"
                  width="auto"
                  className="rounded-circle"
                />
                <div className="px-3">
                  <h6 className="mt-4 fw-bold text-wrap">
                    {item.githubUser.login}
                  </h6>
                  <a
                    href={item.githubUser.html_url}
                    className="text-capitalize"
                    target="_blank"
                  >
                    Github link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default Review;
