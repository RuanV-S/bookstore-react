import { Link } from 'react-router-dom';
import styled from 'styled-components';
const textOptions = ["CATEGORIAS", "FAVORITOS", "ESTANTE"]

const OptionsComponent = styled.ul`
font-size: 15px;
display: flex;
margin-left: 15px;
align-items: center;
justify-self: center;
height: 100%;
padding: 0 15px;
cursor: pointer;
text-align: center;
`
const Option = styled.li`
display: flex;
padding: 0 5px;
`
function HeaderTextOptions() {
  return (
    <OptionsComponent>
      {textOptions.map((txt) => (
        <Link to={`/${txt.toLowerCase()}`} ><Option><p>{txt}</p></Option></Link>
        ))}
    </OptionsComponent>
  )
}

export default HeaderTextOptions;