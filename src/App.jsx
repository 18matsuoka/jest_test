import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import styled from 'styled-components'
import { Button, TextField } from '@mui/material'


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

const SButton = styled.div`
  background: #D9D9D9;
  border-radius: 20px;
  margin: 0 10px;
  width: 100px;
`

const Body = styled.div`
  width: 1000px;
  min-height: 500px;
`

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

const BodyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
  width:100%;
`

const BodyItem = styled.div`
  width: 30%;
  height: 300px;
  border: 1px solid #000;
  margin: 5px;
  padding:5px;
  text-align: left;
  display: flex;
  flex-direction: column;
`


function App() {
  const [datas, setData] = useState([]);

  const [word, setWord] = useState();

  const arr = ["1", "2", "3","4","5"];


  const search = async () => {

    if (!word) {
      alert("1文字以上入力してください。");
      return true;
    }

    const response = await fetch(
      `https://livlog.xyz/webapi/springWater?q=${word}`
    ).then((res) => res.json())
      .then((cdata) => {
        setData(cdata);
      });
  }

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
          <SButton>HELP</SButton>
          <SButton>LOGIN</SButton>
        </Menu>
      </Header>
      <hr />
      <Body>
        <h2>湧き水検索</h2>
        <MainContainer>
          <TextField id="standard-basic" label="湧き水がある場所を検索する" variant="standard" onChange={(e) => setWord(e.target.value)} />
          <Button onClick={search} variant="outlined" sx={{ marginLeft: "5px" }}>検索する</Button>
        </MainContainer>
        <BodyContainer>
          {!(datas.length ===0) && datas.result.map((item,index)=>(
              <BodyItem key={index}>
                <h3>{item.name}({item.furigana})</h3>
                <p>{item.overview}</p>
                <p style={{marginTop:'auto'}}><a href={"https://www.google.com/search?q="+item.name} target="_blank" rel="noopener noreferrer">Googleで検索する</a></p>
              </BodyItem>
          ))}
        </BodyContainer>
      </Body>
    </div>
  )
}

export default App
