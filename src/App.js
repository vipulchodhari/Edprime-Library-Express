import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Member } from './components/member/Member';
import { Navbar } from './components/navbar/Navbar';
import { Publisher } from './components/master/Publisher';
import { AddPublisher } from './components/master/AddPublisher';
 
function App() {
  return (
    <div className="App">
      <div style={{display:'flex', gap:'50px', backgroundColor:'rgb(240,243,246)'}}>
        <Navbar />
        <Routes>
          <Route path='/'></Route>
          <Route path='/member' element={<Member />}></Route>
          <Route path='/publisher' element={<Publisher/>}></Route>
          <Route path='/publisher' element={<Publisher/>}></Route>
          <Route path='/Addpublisher' element={<AddPublisher/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
