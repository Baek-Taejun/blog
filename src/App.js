import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
/*eslint-disable */



function App() {
  
  let [ 글제목, 글제목변경 ] = useState(['남자 코트 추천','겨울 코트 추천',' 여자 코트 추천','배고프다']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal,setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값,입력값변경] = useState('');


  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color : 'skyblue', fontSize : '16px'}}>백태준 블로그</h4>
      </div>
          {
            글제목.map(function(a, i){
              return ( 
              <div className="list" key="0">
              <h4 onClick = {()=>{setModal(!modal); setTitle(i)}} >{ 글제목[i] }<span onClick={(e) => { e.stopPropagation();  
                let copy = [...따봉];
                copy[i] = copy[i] + 1;
                따봉변경 (copy)}
              }>👍</span>{따봉[i]}</h4>

              <button onClick={()=>{ 
                let copy = [...글제목];
                copy.splice(i,1); 
                글제목변경(copy)
              }}>삭제</button>
              <p>4월 15일 발행</p>
            </div>
              )
            })
          }

          <input onChange={(e)=>{
            입력값변경(e.target.value)
            console.log(입력값)}}/>
          <button onClick={()=>{
            글제목변경([...글제목, 입력값]);
            }}
          >글발행</button>

          {
            modal == true ? <Modal title={title} 글제목변경={글제목변경} 글제목 = {글제목}/> : null
          }
    </div>
  ); 
  }


function Modal(props){
  return(
    <div className="modal">  
    <h4>{props.글제목[props.title]}</h4>

    <p>날짜</p>
    <p>상세내용</p>
    <button onClick={()=>{ 
      let copy = [...props.글제목];
      copy[0] = '여자 코트 추천';
      props.글제목변경(copy)
    }}>
    글수정</button>
    </div>
  )
}

export default App;
