import Header from './assets/Header';
import styled from 'styled-components'
import Search from './assets/Search';
import LatestBook from './assets/LatestBooks';

const AppContainer = styled.div`
height: 100wh;
width: 100vw;
background-image: linear-gradient(90deg, #35414b 45%, #8cc4a8);   
  
`
function App() {
  return (
    <AppContainer>
      <Header />
      <Search />
      <LatestBook />
    </AppContainer>
    
  );
}

export default App;
