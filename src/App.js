import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
/*eslint-disable */



function App() {
  
  let post = '강남 우동 맛집';
  let [ a, a1 ] = useState(['남자 코트 추천', '여자 코트 추천','겨울 코트 추천',' 남자 코트 추천']);
  let [따봉, 따봉변경] = useState(0);



  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color : 'skyblue', fontSize : '16px'}}>백태준 블로그</h4>
      </div>
      <div className="list">
        

        <button>
        <span onClick={ ()=>{
        let copy = [...a];
        copy.sort();
        a1(copy);

          }} >가나다</span>
          </button>


        <button>
          <span onClick={() => {
            let copy = [...a];
            copy[0] = '여자코트 추천';
          a1(copy); 
          }} >글수정</span>
        </button>


        <h4>
          { a[0] } <span onClick={() => { 따봉변경(따봉 + 1)}}>👍</span> {따봉} </h4>
        <p>4월 15일 발행</p>
      </div>

      <div className="list">
        <h4>{ a[1] }</h4>
        <p>4월 15일 발행</p>
      </div>

      <div className="list">
        <h4>{ a[2]}</h4>
        <p>4월 15일 발행</p>
      </div>
    </div>
  );
  
}

export default App;
