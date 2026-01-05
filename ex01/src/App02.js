import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Child from './Child'

function App() {
  const num = 10;
  const click = () => { 
    alert('클릭됨');
  }
  const str1="내용1"
  const str2="내용2"
  return ( 
    <div>
      <Child n="n전달">{"내용전달"}{str1}{str2}</Child> <hr></hr>
      <Header test="연습중" number={num}/>
      <hr/>
      <Nav name="홍길동" addr='서울'/>
      <hr/>
      <Main tel='010-1234-5678' nick='둘리' myClick={click}/>
    </div>
  );
}

export default App;
