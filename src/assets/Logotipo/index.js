import styled from 'styled-components'
import logo from '../../imagens/logo.svg'

const LogoContainer = styled.div`
display: flex;
font-size: 20px;
text-decoration: none;
  color: black;
  
`

const LogoImage = styled.img`
    margin-right: 5px;    
`

const LogoText = styled.p`
margin-top: 30px;
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImage src={logo} alt='logotipo-storage-book'></LogoImage>
            <LogoText><strong>Trio</strong>Book</LogoText>           
        </LogoContainer>
        
        )
}

export default Logo