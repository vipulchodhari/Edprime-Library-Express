import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from "../navbar/Navbar"
import { AddBooks } from "./addBook/AddBooks"
import { BookDetails } from "./bookDetails/BookDetails"
import { BookImport } from "./bookImport/BookImport"
import { BookList } from "./bookList/BookList"
import { BookUnitDetails } from "./bookUnit/bookUnitDetails/BookUnitDetails"
import { BookUnitList } from "./bookUnit/BookUnitList"
import { IssueBook } from "./issueBook/IssueBook"

export const Books = () => {
    return <div style={{display:'flex', gap:'30px', backgroundColor:'rgb(240,243,246)'}}>
        <Navbar />
        <Routes>
            <Route path='/book-list' element={<BookList/>}></Route>
            <Route path='/books/add-book' element={<AddBooks/>}></Route>
            <Route path='/book-details/:id' element={<BookDetails/>}></Route>
            <Route path='/issue-book' element={<IssueBook/>}></Route>
            <Route path='/import-books' element={<BookImport/>}></Route>
            <Route path='/book-units' element={<BookUnitList/>}></Route>
            <Route path='/book-unit-details/:id' element={<BookUnitDetails/>}></Route>
        </Routes>
    </div>
}