
import { useState } from "react"
import Input from "../Input/index"
import styled from "styled-components"
import { livros } from "./dbSearch"


const SearchContainer = styled.section`
text-align: center;
padding: 85px 0;
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
grid-template-columns: auto auto auto;

`
const Book = styled.div`
    font-size: 16px;
          
   
`

function Search() {
    const [textSearch, setTextSearch] = useState([])

    return (
        <SearchContainer>
            <Title>Já sabe por onde começar?</Title>
            <SubTitle>Encontre seu livro em nossa estante</SubTitle>
            <Input placeholder="Escreva sua próxima leitura"
                onBlur={ev => {
                    const userText = ev.target.value
                    const resultSearch = livros.filter(livro => livro.nome.includes(userText))
                    setTextSearch(resultSearch)
                }}
            />
            <BookCase>

                {textSearch.map((search) => (
                    <Book><p>{search.nome}</p>

                        <img src={search.src} alt={search.nome}></img></Book>
                ))}
            </BookCase>

        </SearchContainer>
    )
}

export default Search