import { ItemsProps, RocketProps } from "./interface";

export const randy = () => Math.floor(Math.random() * 1000000);

export const saveLayoutDataLocalStorage = (data: RocketProps[]) => {
  localStorage.setItem("reviewData", JSON.stringify({ data }));
};

export const saveUserDataLocalStorage = (data: ItemsProps) => {
  localStorage.setItem("users", JSON.stringify({ data }));
};


export const getDataFromLocalStorage = () => {
  let item: RocketProps[] = [];
  if (typeof window !== "undefined") {
    const dataInfo = JSON.parse(localStorage.getItem("reviewData") as any);

    if (dataInfo === null || dataInfo === undefined || !dataInfo) {
      return item;
    }

    if (
      dataInfo.data === null ||
      dataInfo.data === undefined ||
      dataInfo.data.length === 0
    ) {
      return item;
    }

    return dataInfo.data;
  }
};


export const getUsersFromLocalStorage = () => {
  let users = {
    data: [],
  };

  if (typeof window !== "undefined") {
    users = JSON.parse(localStorage.getItem("users") || "{}");
  }
  return users;
};