import styled from 'styled-components'
import logo from '../../imagens/logo.svg'

const LogoContainer = styled.div`
display: flex;
font-size: 20px;
color: black;  
`

const LogoImage = styled.img`
margin-right: 5px; 
width: 30px;   
`

const LogoText = styled.p`
margin-top: 25px;
text-decoration: none;
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImage src={logo} alt='logotipo-storage-book'></LogoImage>
            <LogoText><strong>Trio Book</strong></LogoText>           
        </LogoContainer>
        
        )
}

export default Logo