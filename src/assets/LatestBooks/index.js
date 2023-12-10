import styled from 'styled-components'
import { livros } from "./database"
import livroTwo from "../../imagens/livro2.png"
import CardRecommend from '../Card'
const Title = styled.h2`    
color: #000;
font-size: 36px;
text-align: center;
`

const LastUpdate = styled.section`
 display: block;   
`

const LastUpdateConteiner = styled.div`
display: grid;
grid-template-columns: auto auto auto;
justify-content: center;
`

const LastUpdateImage = styled.img`
cursor: pointer;
padding: 0 10px 10px;
`
const Cards = styled.div`
display: grid;
grid-template-columns: auto auto auto;
justify-content: center;
`

function LatestBook() {
    return (
        <LastUpdate>
            <Title>Últimos Lançamentos.</Title>
            <LastUpdateConteiner>
                {
                    livros.map((l) => (
                        <LastUpdateImage src={l.src} alt={l.name}></LastUpdateImage>
                    ))
                }
            </LastUpdateConteiner>
            <Cards>
                <CardRecommend
                    title="Talvez voce se interesse por"
                    subTitle="Angular 11"
                    description="Construindo uma aplicação da Google."
                    img={livroTwo}
                />
                <CardRecommend
                    title="Talvez voce se interesse por"
                    subTitle="Angular 10"
                    description="Construindo uma aplicação da Google."
                    img={livroTwo}
                />              
                
            </Cards>
        </LastUpdate>
    )
}

export default LatestBook