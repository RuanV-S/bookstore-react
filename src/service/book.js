import axios from "axios";

const booksAPI = axios.create({
  baseURL: "http://localhost:8000/books",
});

function getBook() {
  booksAPI.get("/").then((response) => {
    return response.data;
  });
}

export { getBook };
