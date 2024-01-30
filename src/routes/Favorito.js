import { useEffect, useState } from "react";
import styled from "styled-components";
import { deleteBookmarks, getBookmarks } from "../service/bookmarks";
import ImgBook from "../imagens/livro.png";
const AppContainer = styled.div`
min-height: 100vh;
width: 100%;
background-image: linear-gradient(90deg, #35414b 45%, #8cc4a8);
`;
const ResultContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Title = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
  padding-top: 35px;
`;

const Result = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  cursor: pointer;
  text-align: center;
  padding: 0 100px;
  p {
    width: 200px;
    color: #fff;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;
function Favorito() {
  const [bookmarks, setBookmarks] = useState([]);

  async function fetchBookmarks() {
    const books = await getBookmarks();
    setBookmarks(books);
  } 

  useEffect(() => {
    fetchBookmarks();    
  }, []);
  return (
    <AppContainer>
      <Title>Aqui estão seus livros favoritos:</Title>
      <ResultContainer>
        {bookmarks.length !== 0
          ? bookmarks.map((bookmark) => (
              <Result key={bookmark.id}  onClick={() => deleteBookmarks(bookmark.id)}>  
                <p>{bookmark.name}</p>
                <img src={ImgBook} alt={bookmark.name}/>
              </Result>
            ))
          : null}
      </ResultContainer>
    </AppContainer>
  );
}

export default Favorito;
