import { Header, Review } from "@/components";
import { defaultUser } from "@/redux/features/reviews/reviewSlice";
import { useAppDispatch } from "@/redux/hooks";
import { getUsersFromLocalStorage } from "@/utils/getLocalStorage";
import { GithubProps } from "@/utils/interface";
import { BASE_URL } from "@/utils/Route";
import axios from "axios";
import { useEffect } from "react";

const Home = ({ githubUsers }: GithubProps) => {
  const dispatch = useAppDispatch();
  const data = githubUsers?.items;

  useEffect(() => {
    let defaultData = getUsersFromLocalStorage().data;

    if (defaultData) {
      dispatch(defaultUser(defaultData));
    } else {
      dispatch(defaultUser(data));
    }
  }, []);
  return (
    <div className="container">
      <Header />
      <Review />
    </div>
  );
};

export const getServerSideProps = async () => {
  let response = null;

  response = await axios.get(`${BASE_URL}/users?q=Q`);

  if (!response.data) {
    return {
      msg: "Data not fetched",
    };
  }

  return {
    props: {
      githubUsers: response.data,
    },
  };
};

export default Home;
