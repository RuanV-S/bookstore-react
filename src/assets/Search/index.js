
import { useState } from "react"
import Input from "../Input/index"
import styled from "styled-components"
import { livros } from "./dbSearch"


const SearchContainer = styled.section`
//background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
color: #FFF;
text-align: center;
padding: 85px 0;
height: auto;
width: 100%;
`

const Title = styled.h2`
font-size: 36px;
text-align: center;
width: 100%;
`

const SubTitle = styled.h3`
font-size: 16px;
font-weight: 500;
margin-bottom: 40px;
`

const BookCase = styled.div`
background-color: #FFF214;
display: grid;
grid-template-columns: auto auto auto auto;
padding: 10px;
}
`
const Book = styled.div`
background-color: #ffff;
font-weight: 500;
    font-size: 16px;
    align-items: center;
    display: inline;
    width: 100%;
    margin-top: 20px;
    height: 350px;
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