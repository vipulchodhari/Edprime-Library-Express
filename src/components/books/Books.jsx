import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from "../navbar/Navbar"
import { AddBooks } from "./addBook/AddBooks"
import { BookDetails } from "./bookDetails/BookDetails"
import { BookList } from "./bookList/BookList"
import { IssueBook } from "./issueBook/IssueBook"

export const Books = () => {
    return <div style={{display:'flex', gap:'30px', backgroundColor:'rgb(240,243,246)'}}>
        <Navbar />
        <Routes>
            <Route path='/book-list' element={<BookList/>}></Route>
            <Route path='/books/add-book' element={<AddBooks/>}></Route>
            <Route path='/book-details/:id' element={<BookDetails/>}></Route>
            <Route path='/issue-book' element={<IssueBook/>}></Route>
        </Routes>
    </div>
}