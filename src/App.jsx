import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import styled from 'styled-components'


function App() {
  const [count, setCount] = useState(0)

  const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

  const Logo = styled.div`
  width: 200px;
`;
  const Header = styled.div`
  width: 1000px;
  display: flex;
  // background: pink;
  justify-content: space-between;
`;

  const Button = styled.div`
  background: #D9D9D9;
  border-radius: 20px;
  margin: 0 10px;
  width: 100px;
`

  const Body = styled.div`
  width: 1000px;
  height: 500px;
`

  return (
    <div className="App">
      <Header>
        {/* Logo */}
        <Logo>
          らくらくたび
        </Logo>

        {/* Menu */}
        <Menu>
          {/* MenuItem */}
          <Button>HELP</Button>
          <Button>LOGIN</Button>
        </Menu>
      </Header>
      <hr />
      <Body>コンテンツ</Body>
    </div>
  )
}

export default App
