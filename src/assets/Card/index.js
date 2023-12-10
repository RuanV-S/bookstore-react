import styled from "styled-components"


const Card = styled.div`
align-items: center;
text-align: center;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
border-radius: 10px;
display: column;
margin: 0 auto;
max-width: 200px;
margin-top: 50px;
margin-bottom:: 50px;
padding: 55px 50px;
justify-content: center; 
`

const Button = styled.button`
background-color: transparent;
    color: #FFF;
    padding: 10px 10px;
    font-size: 16px;
    margin-top: 10px;
    border: 1px solid;
    border-radius: 50px;
    font-weight: 900;
    display: inline-block;   
    justify-content: center;
    &:hover {
        cursor: pointer;
    }
`
const SubTitle = styled.h4`

color: #ff0000;
font-size: 18px;
font-weight: bold;

margin: 15px 0;
`

const Description = styled.p`
color: #000
`

const Img = styled.img`
width: 150px;
background-color: #2B2300;
`

const Title = styled.h3`

width: 100%;
height: 150px
padding: 500px 0;
color: ${props => props.cor || '#000'};
font-size: ${props => props.tamanhoFonte || '26px;'};
text-align: ${props => props.alinhamento || 'center'};
margin: 0 10px;
`

function CardRecommend({ title, subTitle, description, img }) {
    return (
        <Card>
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
            <Description>{description}</Description>
            <Img src={img} alt="imagem"/>
            <Button>Saiba mais</Button>
        </Card>
        
    )
}

export default CardRecommend