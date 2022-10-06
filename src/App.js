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
import { EditAuthor } from './components/master/author/EditAuthor';
import { LibrarySettings } from './components/librarySettings/LibrarySettings';
import { EditPublisher } from './components/master/publisher/EditPublisher';
import { EditCategory } from './components/master/category/EditCategory';
import { EditClass } from './components/master/class/EditClass';
import { Editgenre } from './components/master/genre/Editgenre';
import { Editlanguage } from './components/master/language/Editlanguage';
import { Editlocation } from './components/master/location/Editlocation';
import { EditSubject } from './components/master/subject/EditSubject';
import { GeneralSetting } from './components/librarySettings/generalSetting/GeneralSetting';
import { CheckoutBorrowing } from './components/librarySettings/ceckoutBorrowing/CheckoutBorrowing';
import { Renew } from './components/librarySettings/renew/Renew';


function App() {
  return (
    <div className="App">
      <div style={{display:'flex', gap:'30px', backgroundColor:'rgb(240,243,246)'}}>
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
          {/* <Route path='/library-settings' element={<LibrarySettings/>}></Route> */}

           {/* addmaster Routes */}

          <Route path='/category/addcategory' element={<AddCategory/>}></Route>
          <Route path='/publisher/addpublisher' element={<AddPublisher/>}></Route>
          <Route path='/author/addauthor' element={<AddAuthor/>}></Route>
          <Route path='/genre/addgenre' element={<AddGenre/>}></Route>
          <Route path='/language/addlanguage' element={<AddLanguage/>}></Route>
          <Route path='/location/addlocation' element={<AddLocation/>}></Route>
          <Route path='/class/addclass' element={<AddClass/>}></Route>
          <Route path='/subject/addsubject' element={<AddSubject/>}></Route>
          <Route path='/membership/addmembership' element={<AddMembership/>}></Route>

          {/* ---------edit master Routes-------- */}

          <Route path='/author/editauthor/:id' element={<EditAuthor/>}></Route>
          <Route path='/publisher/editpublisher/:id' element={<EditPublisher/>}></Route>
          <Route path='/category/editcategory/:id' element={<EditCategory/>}></Route>
          <Route path='/class/editclass/:id' element={<EditClass/>}></Route>
          <Route path='/genre/editgenre/:id' element={<Editgenre/>}></Route>
          <Route path='/language/editlanguage/:id' element={<Editlanguage/>}></Route>
          <Route path='/location/editlocation/:id' element={<Editlocation/>}></Route>
          <Route path='/subject/editsubject/:id' element={<EditSubject/>}></Route>

          {/* -----------library settings routes -------------*/}

          <Route path='/general-settings' element={<GeneralSetting/>}></Route>
          <Route path='/checkout-borrowings' element={<CheckoutBorrowing/>}></Route>
          <Route path='/renew' element={<Renew/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
