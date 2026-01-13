import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HeaderCon from './containers/common/HeaderCon'
import NotFound from './components/common/NotFound'
import IndexPage from './pages/IndexPage'
import MDeletePage from './pages/member/MDeletePage'
import MListPage from './pages/member/MListPage'
import MOnePage from './pages/member/MOnePage'
import MJoinPage from './pages/join/MJoinPage';
import MModifyPage from './pages/member/MModifyPage';
import MLoginPage from './pages/join/MLoginPage';

function App() {
  return (
    <>
      <Routes>
        <Route element={<HeaderCon />} >
          <Route path='/' element={<IndexPage />} ></Route>
          <Route path='join' element={<MJoinPage />} ></Route>
          <Route path='login' element={<MLoginPage />} ></Route>
          <Route path="member">
            <Route path="list" element={<MListPage />}></Route>
            <Route path="one/:id" element={<MOnePage />}></Route>
            <Route path="delete/:id" element={<MDeletePage />}></Route>
            <Route path="modify/:id" element={<MModifyPage />}></Route>
          </Route>
        </Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
