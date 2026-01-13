import logo from './logo.svg';
import './App.css';
// import ReduxCon from './redux-basic/ReduxCon';
import {Routes, Route} from "react-router-dom"
import IndexPage from './pages/IndexPage';
import ListPage from './pages/ListPage';
import LoginPage from './pages/LoginPage';
import RegPage from './pages/RegPage';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<IndexPage/>}></Route>
      <Route path="/list" element={<ListPage/>}></Route>
      <Route path="/login" element={<LoginPage/>}></Route>
      <Route path="/register" element={<RegPage/>}></Route>
      {/* <Route path="/redux" element={<ReduxCon/>}></Route> */}
    </Routes>
    </>
  );
}

export default App;
