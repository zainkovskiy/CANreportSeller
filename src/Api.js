import axios from "axios";

export const getDataObject = async (raw) => {
  return await axios.post("https://hs-01.centralnoe.ru/Project-Selket-Main/Servers/SellerStats/Controller.php", raw)
} 
export const getSimilar = async (raw) => {
  return await axios.get("http://localhost:3000")
} 
