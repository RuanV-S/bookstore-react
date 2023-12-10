
import styled from 'styled-components';
import Logo from '../Logotipo/index.js';
import HeaderIcons from './icons.js'
import HeaderTextOptions from './options.js';

const HeaderContainer = styled.header`
background-color: #a9a9a9;
display: flex;
justify-content: center;
`
function Header() {
    return (
        <HeaderContainer>
            <Logo></Logo>
            <HeaderTextOptions></HeaderTextOptions>
            <HeaderIcons></HeaderIcons>
        </HeaderContainer>
    )
}

export default Header