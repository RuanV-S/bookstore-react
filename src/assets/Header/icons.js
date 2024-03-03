import sacola from '../../imagens/sacola.svg'
import perfil from '../../imagens/perfil.svg'
import styled from 'styled-components'

const icones = [sacola, perfil]

const IconsesComponents = styled.ul`
  display: flex;   
`

const Icone = styled.li`
margin-right: 30px;
width: 25px;
list-style: none;
cursor: pointer;
`

function HeaderIcons() {
  return (
    <IconsesComponents>
      {icones.map((img, index) => ( 
       <Icone key={index}><img src={img} alt='icone'></img></Icone>
      ))}
    </IconsesComponents>

  )
}

export default HeaderIcons