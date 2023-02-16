import { Loader } from "@/components";
import { setLoader, storeUser } from "@/redux/features/reviews/reviewSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getDataFromLocalStorage } from "@/utils/getLocalStorage";
import { RocketProps } from "@/utils/interface";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import NextLink from "next/link";

const SinglePage = () => {
  const dispatch = useAppDispatch();
  const [getData, setGetData] = useState<RocketProps>({} as RocketProps);
  const { isLoading } = useAppSelector((state) => state.review);
  const router = useRouter();

  const { id } = router.query;
  const chosenId = Number(id);

  const handleDelete = (id: number) => {
    const findData = getDataFromLocalStorage().filter(
      (item: RocketProps) => item.id !== id
    );

    setGetData(findData);

    dispatch(storeUser(findData));
    router.push("/");
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoader(false));
    }, 900);
  });

  useEffect(() => {
    let data = getDataFromLocalStorage();

    if (data) {
      const filterData = data.find((item: RocketProps) => item.id === chosenId);
      setGetData(filterData);
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className="mt-3">
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <div className="mt-4">
        <div className="container">
          <div className="col-md-12 single-container" key={getData?.id}>
            <div className="p-2 content">
              <div
                className="rounded"
                style={{ backgroundColor: "#f5f3ed" }}
              ></div>
              <div className="content-body">
                <div className="px-2">
                  <div className="d-flex justify-content-between align-items-center">
                    <h2 className="fs-4 text-black">{getData?.title}</h2>
                    <div className="d-flex px-2">
                      <NextLink href={`/update/${getData?.id}`}>
                        <GrEdit
                          className="fs-3 fw-bold"
                          onClick={() => {
                            dispatch(setLoader(true));
                          }}
                        />
                      </NextLink>
                      <MdDelete
                        className="fs-3 text-danger fw-bold"
                        onClick={() => {
                          handleDelete(getData?.id);
                          dispatch(setLoader(true));
                        }}
                      />
                    </div>
                  </div>
                  <h4 className="fs-5 text-secondary">{getData?.rocketName}</h4>
                  <p className="fs-6 py-3">{getData?.description}</p>
                  <div className="d-flex justify-content-between align items-center flex-wrap">
                    <div className="d-flex">
                      <img
                        src={getData?.githubUser?.avatar_url}
                        alt={getData?.githubUser?.login}
                        height="52px"
                        width="52px"
                        className="rounded-circle"
                      />
                      <div className="px-3">
                        <h6 className="fs-7 fw-bold pb-0 mb-0 text-wrap">
                          {getData?.githubUser?.login}
                        </h6>
                        <a
                          href={getData?.githubUser?.html_url}
                          className="text-capitalize"
                          target="_blank"
                        >
                          Github link
                        </a>
                      </div>
                    </div>
                    <div>
                      <NextLink
                        href={`/`}
                        className="btn btn-secondary btn-sm back-btn"
                        onClick={() => {
                          dispatch(setLoader(true));
                        }}
                      >
                        Go back
                      </NextLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
