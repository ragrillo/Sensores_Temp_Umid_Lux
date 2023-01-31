import styled from 'styled-components';


const HeaderContainer = styled.header `
    text-align: center;
    padding: 0.5em;
    text-transform: uppercase;
    font-size: 50px; 

`

const TituloContainer = styled.p`
    text-transform: uppercase;
`

function Header(){
    return (
        <HeaderContainer>
            <TituloContainer>Sensores</TituloContainer>
        </HeaderContainer>
    )
}


export default Header