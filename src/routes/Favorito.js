import styled from 'styled-components'
import Search from '../assets/Search';

const AppContainer = styled.div`
height: 100%;
width: 100%;
background-image: linear-gradient(90deg, #35414b 45%, #8cc4a8);    
`
function Favorito() {
  return (
    <AppContainer>    
      <Search />     
    </AppContainer>    
  );
}

export default Favorito;
