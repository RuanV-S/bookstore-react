
import { useEffect, useState } from "react"
import Input from "../Input/index"
import styled from "styled-components"
import { livros } from "../LatestBooks/database"
//import { getBook } from "../../service/book"

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
   
`
const BookName = styled.p`
font-size: 16px;   
color: ${props => props.cor || '#A20' } // Utilizando props    
`
function Search() {
    const [textSearch, setTextSearch] = useState([])
   // const [ books, setBooks] = useState([])

    // useEffect(() => {
    //    const booksInApi = getBook()
    //    setBooks(booksInApi)
    // }, [])

    return (
        <SearchContainer>
            <Title>Já sabe por onde começar?</Title>
            <SubTitle>Encontre seu livro em nossa estante</SubTitle>
            <Input placeholder="Escreva sua próxima leitura"
                onBlur={ev => {
                    const userText = ev.target.value
                    const resultSearch = livros.filter(books=> books.nome.includes(userText))
                    setTextSearch(resultSearch)
                }}
            />
            <BookCase>

                {textSearch.map((search) => (
                    <Book>
                        <BookName cor="#000">{search.nome}</BookName>
                        <img src={search.src} alt={search.nome} onMouseEnter={() => console.log('Mouse por cima')}></img>
                    </Book>
                ))}
            </BookCase>

        </SearchContainer>
    )
}

export default Search