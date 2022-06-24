import './App.css';
import {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const StyledDiv = styled.div`
  background-color : black;
  width: 100px;
  height: 100px;
`;

const divStyle={
  backgroundColor:"red",
  width:"100px",
  height:"100px",
  color:"white"
}

function App() {
  const [data,setData] = useState(null);
  const onClick = async () => {
    try{
        const result = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=a8f0d4f98b2f4e60847d990ca71a8503');
      // data.then(function(result){
      //   console.log(result);
      //   setData(result.data);
      // });
      // console.log(result);
      setData(result.data);
    }catch(e){
      console.log(e);
    }
    
  }
  return (
    <div>
      <StyledDiv>
        <button onClick={onClick}>불러오기</button>
      </StyledDiv>
      <div style={divStyle}>
          div style
      </div>
      {
        data && <textarea row={7} cols={30} readOnly={true}
          value={JSON.stringify(data, null , 2)}/>
      }
    </div>
  );
}

export default App;
