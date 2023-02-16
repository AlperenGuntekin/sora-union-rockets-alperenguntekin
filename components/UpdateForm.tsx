import { setLoader, storeUser } from "@/redux/features/reviews/reviewSlice";
import { useAppDispatch } from "@/redux/hooks";
import {
  getDataFromLocalStorage,
  getUsersFromLocalStorage,
} from "@/utils/getLocalStorage";
import { ItemsProps, RocketProps, UpdateRocketProps } from "@/utils/interface";
import { BASE_URL } from "@/utils/Route";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import makeAnimated from "react-select/animated";
import AsyncSelect from "react-select/async";
import FormHeader from "./FormHeader";
import Loader from "./Loader";

interface IProps {
  data: UpdateRocketProps;
}

const UpdateForm = ({ data }: IProps) => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [rocketName, setRocketName] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [rocketNameError, setRocketNameError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [collabs, setCollabs] = useState<ItemsProps>({} as ItemsProps);
  const [query, setQuery] = useState("Q");
  const [getData, setGetData] = useState([]);
  const [userData, setUserData] = useState([]);
  const dispatch = useAppDispatch();

  //get animated components wrapper
  const animatedComponents = makeAnimated();

  useEffect(() => {
    let data = getDataFromLocalStorage();
    let defaultData = getUsersFromLocalStorage();

    if (data || defaultData) {
      setGetData(data);
      setUserData(defaultData.data);
    }
  }, []);

  const loadOptions = async () => {
    const res = await fetch(`${BASE_URL}/users?q=${query}`);
    const data = await res.json();
    const results = data.items;
    return results;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title) {
      setErrors("This field is required");
      setTitleError(true);
      return;
    }

    if (title) {
      setErrors("");
      setTitleError(false);
    }

    if (!rocketName) {
      setErrors("This field is required");
      setRocketNameError(true);
      return;
    }

    if (rocketName) {
      setErrors("");
      setRocketNameError(false);
    }

    if (!description) {
      setErrors("This field is required");
      setDescriptionError(true);
      return;
    }

    if (description) {
      setErrors("");
      setDescriptionError(false);
    }

    if (Object.keys(collabs as {}).length === 0) {
      return alert("Search for a github user");
    }

    setLoading(true);

    const checkData: RocketProps[] = getData;
    const chosenId = Number(data.id);

    const findIndex = checkData.findIndex((item) => item.id === chosenId);

    let item: RocketProps = {
      id: chosenId,
      title: title,
      description: description,
      rocketName: rocketName,
      githubUser: {
        avatar_url: collabs?.avatar_url,
        login: collabs?.login,
        html_url: collabs?.html_url,
      },
    };

    checkData[findIndex] = item;

    dispatch(storeUser(checkData));
    dispatch(setLoader(true));

    router.back();

    setErrors("");
    setTitle("");
    setDescription("");
    setRocketName("");
  };

  const handleEnterKeyPress = (e: React.KeyboardEvent) => {
    e.preventDefault();
    if (e.key === "Enter" || e.code !== undefined || e.ctrlKey !== undefined) {
      handleSubmit(e);
    }
  };

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setDescription(data.description);
      setRocketName(data.rocketName);
      setCollabs(data.githubUser);
    }
  }, []);

  return (
    <div
      className="vh-100 mt-5 py-5 bg-white"
      style={{ fontFamily: '"Rajdhani", sans-serif' }}
    >
      <div
        className="single-form-container p-3"
        style={{ backgroundColor: "#fff" }}
      >
        <FormHeader title="Update Rocket" />
        <p className="text-danger text-center fw-bold fs-6 mb-2">{errors}</p>
        <form>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title"
              style={{
                border: `${titleError ? "1px solid crimson" : ""}`,
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Rocket Name</label>
            <input
              type="text"
              className="form-control"
              value={rocketName}
              onChange={(e) => setRocketName(e.target.value)}
              placeholder="Enter Rocket Name"
              style={{
                border: `${rocketNameError ? "1px solid crimson" : ""}`,
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
              style={{
                border: `${descriptionError ? "1px solid crimson" : ""}`,
              }}
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Github User</label>
            <AsyncSelect
              cacheOptions
              components={animatedComponents}
              getOptionLabel={(e: any) => e.login}
              getOptionValue={(e) => e.login}
              placeholder={`${collabs.login}`}
              loadOptions={loadOptions}
              onInputChange={(value) => setQuery(value)}
              onChange={(value) => setCollabs(value)}
              defaultOptions={userData}
            />
          </div>
          <div className="pt-1 mb-4">
            <div className="d-flex justify-content-between">
              <div></div>
              <div className="d-flex">
                {loading && (
                  <div className="px-3">
                    <Loader />
                  </div>
                )}
                <button
                  className="btn btn-dark btn-lg btn-block"
                  type="button"
                  onClick={handleSubmit}
                  onKeyDown={handleEnterKeyPress}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateForm;
