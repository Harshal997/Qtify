import axios from "axios";

export const getData = async (url) => {
    try {
      const response = await axios.get(url);
      console.log(response.data);
      return response.data;
      // setData([...data, response.data])
    } catch (e) {
      console.error("error fetching data...", e);
    }
  };
  getData();