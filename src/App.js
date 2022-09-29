import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Dashboard } from './components/dashboard/Dashboard';
import { Author } from './components/master/author/Author';
import { Category } from './components/master/category/Category';
import { Genre } from './components/master/genre/Genre';
import { Member } from './components/member/Member';
import { Navbar } from './components/navbar/Navbar';
import { Publisher } from './components/master/publisher/Publisher';
import { Language } from './components/master/language/Language';
import { Class } from './components/master/class/Class';
import { Subject } from './components/master/subject/Subject';
import { Membership } from './components/master/membership/Membership';
import { Location } from './components/master/location/Location';
import { AddCategory } from './components/master/category/AddCategory';
import { AddPublisher } from './components/master/publisher/AddPublisher';
import { AddAuthor } from './components/master/author/AddAuthor';
import { AddGenre } from './components/master/genre/AddGenre';
import { AddLanguage } from './components/master/language/AddLanguage';
import { AddClass } from './components/master/class/AddClass';
import { AddLocation } from './components/master/location/AddLocation';
import { AddSubject } from './components/master/subject/AddSubject';
import { AddMembership } from './components/master/membership/AddMembership';


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
          <Route path='/publisher' element={<Publisher/>}></Route>
          <Route path='/author' element={<Author/>}></Route>
          <Route path='/language' element={<Language/>}></Route>
          <Route path='/class' element={<Class/>}></Route>
          <Route path='/subject' element={<Subject/>}></Route>
          <Route path='/membership' element={<Membership/>}></Route>
          <Route path='/location' element={<Location/>}></Route>

           {/* addmaster Routes */}

          <Route path='/addclass' element={<AddCategory/>}></Route>
          <Route path='/addpublisher' element={<AddPublisher/>}></Route>
          <Route path='/addauthor' element={<AddAuthor/>}></Route>
          <Route path='/addgenre' element={<AddGenre/>}></Route>
          <Route path='/addlanguage' element={<AddLanguage/>}></Route>
          <Route path='/addlocation' element={<AddLocation/>}></Route>
          <Route path='/addclass' element={<AddClass/>}></Route>
          <Route path='/addsubject' element={<AddSubject/>}></Route>
          <Route path='/addmembership' element={<AddMembership/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
