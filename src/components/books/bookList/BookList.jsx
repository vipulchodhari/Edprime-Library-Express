import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import homeIcon from '../../../assets/home.png';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from "react";
import axios from "axios";
import '../../../styles/books.css';
import { Link, useNavigate } from 'react-router-dom'
import { booksUrl } from "../../../utils/common";

export const BookList = () => {
    let [booksData, setBooksData] = useState();

    const navigate = useNavigate();

    const getData = async () => {
        await axios.get(`${booksUrl}`)
            .then((res) => {
                let newArr =[] 
                res.data.data1.forEach((item,index)=>{
                   item.totalBooks = res.data.TotalBook[index]
                   item.availableBooks = res.data.TotalAvailableBook[index]
                   item.issueBooks = res.data.TotalIssuesBook[index]
                   item.scrappedBooks = res.data.TotalScrapbook[index]
                   newArr.push(item)
                })
                setBooksData(newArr)
                console.log(res.data)
            })
    }
    console.log("data", booksData);

    // booksData = booksData?.filter((el) =>
    //     el?.title?.toLowerCase().includes(query) ||
    //     el?.title?.toUpperCase().includes(query) ||
    //     dateFormat(el.createdAt, "mm-dd-yyyy").toLowerCase().includes(query)
    //     // el.status.toLowerCase().includes(query)
    // )

    const searchBooks = (e) => {
        // setQuery(e.target.value)
    }

    const handleDelete = async (id) => {
        // console.log("id", id);
        // try {
        //     await axios.delete(`${booksUrl}/${id}`)
        //         .then((res) => {
        //             console.log("delete response", res)
        //             if(res.status === 200) alert("Author Deleted")
        //         })
        //     getData() 
        // } catch (err) {
        //     console.log("error", err);
        // }
    }

    useEffect(() => {
        getData()
    }, [])
    return <div className="author-container">
        <h3 className='author-heading'>Books</h3>
        <div className='author-top'>
            <img src={homeIcon} alt='' />
            <p style={{ fontSize: '12px', color: '#777777' }}>Library, Books</p>
        </div>
        <div className="author-cont">
            <div className="author-btnFlex">
                <h3>Books Manager</h3>
                <div >
                <Link to='/books/add-book' style={{marginRight:'5px'}}>
                    <button className="author-addbtn">Aquire Book</button>
                </Link>
                <Link to='/books/add-book' style={{marginRight:'5px'}}>
                    <button className="author-addbtn">Add Book</button>
                </Link>
                <Link to='/import-books' style={{marginRight:'5px'}}>
                    <button className="author-addbtn">Book Import</button>
                </Link>
                <Link to='/issue-book' style={{marginRight:'5px'}}>
                    <button className="author-addbtn">Issue Book</button>
                </Link>
                <Link to='/category/addcategory' style={{marginRight:'5px'}}>
                    <button className="author-addbtn">Deposit Book</button>
                </Link>
                </div>
            </div>
            <hr />
            <input onChange={searchBooks} className="author-search-box" type='text' placeholder='Search...' />
            <p style={{ color: '#9EA5B9' }}>Search in all fields</p>
            <TableContainer component={Paper}>
                <Table
                    size="small"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell className="book-item-thead">S.No </TableCell>
                            <TableCell align="center" className="book-item-thead">
                                Category
                            </TableCell>
                            <TableCell align="center" className="book-item-thead">
                                Book Name
                            </TableCell>
                            <TableCell align="center" className="book-item-thead">
                                Publisher
                            </TableCell>
                            <TableCell align="center" className="book-item-thead">
                                Total
                            </TableCell>
                            <TableCell align="center" className="book-item-thead">
                                Issued
                            </TableCell>
                            <TableCell align="center" className="book-item-thead">
                                Available
                            </TableCell>
                            <TableCell align="center" className="book-item-thead">
                                Status
                            </TableCell>
                            <TableCell align="center" className="book-item-thead">
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {booksData ? booksData?.map((book, i) => (
                            <TableRow key={i}>
                                <TableCell component="th" scope="row" className="book-item-tbody">
                                    {i + 1}
                                </TableCell>
                                <TableCell align="center" className="book-item-tbody">
                                    <strong>{book?.bookCategory?.cotegoryTitle}</strong>
                                </TableCell>
                                <TableCell align="center" className="book-item-tbody">
                                <Link to={`/book-details/${book?._id}`} className='link-decoration'>
                                    <strong>{book?.book_title}</strong>
                                </Link>
                                </TableCell>
                                <TableCell align="center" className="book-item-tbody">
                                    <strong>{book?.publisher?.publisherTitle}</strong>
                                </TableCell>
                                <TableCell align="center" className="book-item-tbody">
                                    <strong>{book.totalBooks}</strong>
                                </TableCell>
                                <TableCell align="center" className="book-item-tbody">
                                    <strong>{book.issueBooks}</strong>
                                </TableCell>
                                <TableCell align="center" className="book-item-tbody">
                                    <strong>{book.availableBooks}</strong>
                                </TableCell>
                                <TableCell align="center">
                                    <div className={
                                        book.status === true ? "item-success": "item-rejected"
                                    }>
                                        {book.status === true ? "true" : "false"}
                                    </div>
                                </TableCell>
                                <TableCell align="center" className="book-item-tbody">
                                    {/* <Link to={`/category/editcategory/${book._id}`} className='link-decoration'>  */}
                                        <EditIcon className="author-action-icons"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    {/* </Link>      */}
                                    <DeleteIcon className="author-action-icons" onClick={()=> handleDelete(book._id)}/>
                                    <label className="bookswitch">
                                        <input type="checkbox" />
                                        <span className="bookslider bookround"></span>
                                    </label>    
                                </TableCell>
                            </TableRow>
                        )) : <tr><td className="no-data">No Data Found</td></tr>}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    </div>
}