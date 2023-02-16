import { Loader, UpdateForm } from "@/components";
import { useAppSelector } from "@/redux/hooks";
import { getDataFromLocalStorage } from "@/utils/getLocalStorage";
import { RocketProps, UpdateRocketProps } from "@/utils/interface";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Update = () => {
  const [getData, setGetData] = useState({});
  const { isLoading } = useAppSelector((state) => state.review);
  const router = useRouter();

  const { id } = router.query;
  const chosenId = Number(id);

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
      <UpdateForm data={getData as UpdateRocketProps} />
    </div>
  );
};

export default Update;
