import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Member } from './components/member/Member';
import { Navbar } from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <div style={{display:'flex', gap:'50px', backgroundColor:'rgb(240,243,246)'}}>
        <Navbar />
        <Routes>
          <Route path='/'></Route>
          <Route path='/member' element={<Member />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
