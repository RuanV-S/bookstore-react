
import { useEffect, useState } from "react"
import Input from "../Input/index"
import styled from "styled-components"
import { getBook } from "../../service/book"
import imageBook from '../../imagens/livro.png'
import { postBookmarks } from "../../service/bookmarks"
const SearchContainer = styled.section`
text-align: center;
padding: 100px 0;
width: 100%;
height: 100%;
`
const Title = styled.h2`
font-size: 36px;
text-align: center;
`
const SubTitle = styled.h3`
font-size: 16px;
font-weight: 500px;
margin-bottom: 40px;
`
const BookCase = styled.div`
display: grid;
justify-content: center;
grid-template-columns: auto auto auto auto;

`
const Book = styled.div`
cursor: pointer;
margin-top: 10px;
margin-right: 10px;
`

const BookName = styled.p`
font-size: 16px;   
color: ${props => props.cor || '#F2C240' } // Utilizando props    
`
function Search() {
    const [textSearch, setTextSearch] = useState([])
    const [ books, setBooks] = useState([])

    useEffect(() => {
      fetchBooks()
    }, [])

    async function fetchBooks() {
        const booksInApi = await getBook()        
        setBooks(booksInApi)
    }  
  async function insertBookmarks(id) {
    await postBookmarks(id)
    alert(`Livro de id:${id} inserido!`)
}
    return (
        <SearchContainer>
            <Title>Já sabe por onde começar?</Title>
            <SubTitle>Encontre seu livro em nossa estante</SubTitle>
            <Input placeholder="Escreva sua próxima leitura"
                onKeyDown={ev => {
                    const userText = ev.target.value
                    const resultSearch = books.filter(book => book.name.toLocaleLowerCase().includes(userText.toLocaleLowerCase()))
                    setTextSearch(resultSearch)
                }}               
            />
            <BookCase>
                {textSearch.map((search, index) => (              
                    <Book key={index} onClick={() => insertBookmarks(search.id)}>
                        <BookName>{search.name}</BookName>
                        <img src={imageBook} alt={search.name}></img>
                    </Book>
                ))}
            </BookCase>

        </SearchContainer>
    )
}

export default Search