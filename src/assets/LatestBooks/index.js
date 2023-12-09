import styled from 'styled-components'
import { livros } from "./dblastUpdates"
const Title = styled.h2`    
padding: 10px 0;
color: #FFF;
font-size: 36px;
text-align: center;
`


const LastUpdate = styled.section`
    display: flex;   
    align-items: center;
    flex-direction: column;
    background-color: #cf2; 
`

const LastUpdateConteiner = styled.div`
display: grid;
grid-template-columns: auto auto auto;
width: 100%;
justify-content: center;
`

const LastUpdateImage = styled.img`
cursor: pointer;
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
        </LastUpdate>
    )
}

export default LatestBook