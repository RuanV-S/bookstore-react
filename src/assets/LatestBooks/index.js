import styled from 'styled-components'

const Title = styled.h2`    
width: 100%;
padding: 20px 0;
color: #FFF;
font-size: 30px;
text-align: center;
margin: 0;
`

const LastUpdate = styled.section`
    display: flex;   
    align-items: center;
`

function LatestBook () {
    return (
        <LastUpdate>
            <Title>Ultimos lançamentos.</Title>
        </LastUpdate>
    )
}

export default LatestBook