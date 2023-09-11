import styled from "styled-components";
import Menu from "./Components/Menu";
import Navbar from "./Components/Navbar";
import {createGlobalStyle} from "styled-components";
const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Roboto', sans-serif;
  }
`
const Container = styled.div`
  display: flex;
`
const Content = styled.div`
  flex: 7;
`
const Wrapper = styled.div``
function App() {
  return <div>
    <GlobalStyle/>
    <Container>
      {/* <Hamburger Menu/> */}
      <Menu/>
      <Content>
        <Navbar/>
        <Wrapper>
          video cards
        </Wrapper>
      </Content>  
    </Container> 
  </div>
}

export default App;
