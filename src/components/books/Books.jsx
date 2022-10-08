import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from "../navbar/Navbar"
import { BookList } from "./bookList/BookList"

export const Books = () => {
    return <div style={{display:'flex', gap:'30px', backgroundColor:'rgb(240,243,246)'}}>
        <Navbar />
        <Routes>
            <Route path='/book-list' element={<BookList/>}></Route>
        </Routes>
    </div>
}