import axios from "axios";

export default {
  list: async () => {
    const result = await axios.get("http://database:8004/Planets");
    return result.data;
  },
};
