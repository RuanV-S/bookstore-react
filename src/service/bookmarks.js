import axios from "axios";

const booksmarksAPI = axios.create({ baseURL: "http://localhost:8000/favoritos" });

async function getBookmarks() {
  const response = await booksmarksAPI.get("/");
  return response.data;
}

async function postBookmarks(id) { 
    await booksmarksAPI.post(`/${id}`).then((a) => console.log(a))
    alert(`Livro de id:${id} adicionado!`)
}

async function deleteBookmarks(id) {
    await booksmarksAPI.delete(`/${id}`)
    alert(`Livro de id:${id} deletado!`)
}
export { getBookmarks, postBookmarks, deleteBookmarks };
