import axios from "axios";
import "babel-polyfill";

export const getData = async (path) => {
  try {
    const data = await axios.get(`${process.env.DBURL}${path}`);

    return data;
  } catch (error) {
    console.error(error);
    window.location.reload(true);
  }
};
