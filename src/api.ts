import axios from "axios";

export async function getPetsType() {
  const data = await axios.get("https://randomuser.me/api/?results=5");
  return data.data.results;
}
