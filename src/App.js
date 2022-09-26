import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Dashboard } from './components/dashboard/Dashboard';
import { Author } from './components/master/Author';
import { Category } from './components/master/Category';
import { Genre } from './components/master/Genre';
import { Language } from './components/master/Language';
import { Member } from './components/member/Member';
import { Navbar } from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <div style={{display:'flex', gap:'50px', backgroundColor:'rgb(240,243,246)'}}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard/>}></Route>
          <Route path='/member' element={<Member />}></Route>
          <Route path='/category' element={<Category/>}></Route>
          <Route path='/genre' element={<Genre/>}></Route>
          <Route path='/author' element={<Author/>}></Route>
          <Route path='/language' element={<Language/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
