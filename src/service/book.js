import axios from "axios";

const booksAPI = axios.create({
  baseURL: "http://localhost:8000/books",
});
async function getBook() {
  const response = await booksAPI.get('/')  
  return response.data
}

export { getBook };
