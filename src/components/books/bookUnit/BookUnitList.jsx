import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import homeIcon from '../../../assets/home.png';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import dateFormat from "dateformat";
import { useEffect, useState } from "react";
import axios from "axios";
import '../../../styles/master.css';
import { Link, useNavigate } from 'react-router-dom'
import { authorUrl, booksItemsUrl } from "../../../utils/common";
import Pagination from "react-js-pagination";

export const BookUnitList = () => {
    let [bookItemsData, setBookItemsData] = useState();
    const [query, setQuery] = useState("");
    const [activePage, setActivePage] = useState(1);
    const [itemCount, setItemCount] = useState();

    const navigate = useNavigate();

    // const getData = async () => {
    //     await axios.get(`${authorUrl}?page=${activePage}`)
    //         .then((res) => {
    //             setAuthorData(res.data.data)
    //             setItemCount(res?.data?.authorCount)
    //             // console.log(res.data)
    //         })
    // }
    const getData = async () => {
        await axios.get(booksItemsUrl)
            .then((res) => {
                setBookItemsData(res.data)
                // setItemCount(res?.data?.authorCount)
                // console.log(res)
            })
    }
    console.log("data", bookItemsData);

    // authorData = authorData?.filter((el) =>
    //     el?.title?.toLowerCase().includes(query) ||
    //     el?.title?.toUpperCase().includes(query) ||
    //     dateFormat(el.createdAt, "mm-dd-yyyy").toLowerCase().includes(query)
    //     // el.status.toLowerCase().includes(query)
    // )

    const searchAuthor = (e) => {
        setQuery(e.target.value)
    }

    const handleDelete = async (id) => {
        console.log("id", id);
        try {
            await axios.delete(`${booksItemsUrl}/${id}`)
                .then((res) => {
                    console.log("delete response", res)
                    if(res.status === 204) alert("Author Deleted")
                })
            getData() 
        } catch (err) {
            console.log("error", err);
        }
    }

    const handlePageChange = (pageNumber) => {
        // console.log('paginatino pageNumber', pageNumber)
        setActivePage(pageNumber)
        getData(pageNumber)
    }

    useEffect(() => {
        getData()
    }, [])
    return <div className="author-container">
        <h3 className='author-heading'>Books</h3>
        <div className='author-top'>
            <img src={homeIcon} alt='' />
            <p style={{ fontSize: '12px', color: '#777777' }}>Library, Books, Books Unit</p>
        </div>
        <div className="author-cont">
            <div className="author-btnFlex">
                <h3>Books Unit</h3>
            </div>
            <hr />
            <input onChange={searchAuthor} className="author-search-box" type='text' placeholder='Search...' />
            <p style={{ color: '#9EA5B9' }}>Search in all fields</p>
            <TableContainer component={Paper}>
                <Table
                    size="small"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell className="book-item-thead">S.No </TableCell>
                            <TableCell align="center" className="book-item-thead">
                                BUUI
                            </TableCell>
                            <TableCell align="center" className="book-item-thead">
                                Book Name
                            </TableCell>
                            <TableCell align="center" className="book-item-thead">
                                Category
                            </TableCell>
                            <TableCell align="center" className="book-item-thead">
                                Library Location
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
                        {bookItemsData ? bookItemsData?.map((item, i) => (
                            <TableRow key={i}>
                                <TableCell component="th" scope="row" className="book-item-tbody">
                                    {i + 1}
                                </TableCell>
                                <TableCell align="center" className="book-item-tbody">
                                    <strong>{item?.buuid?.slice(-4)}</strong>
                                </TableCell>
                                <TableCell align="center" className="book-item-tbody">
                                <Link to={`/book-unit-details/${item?._id}`} className='link-decoration'>
                                    <strong>{item?.book?.book_title}</strong>
                                    </Link>
                                </TableCell>
                                <TableCell align="center" className="book-item-tbody">
                                    <strong>English</strong>
                                </TableCell>
                                <TableCell align="center" className="book-item-tbody">
                                    <strong>19</strong>
                                </TableCell>
                                <TableCell align="center">
                                    <div className={
                                        item.status === true ? "item-success"
                                            : item.status === false ? "item-progress"
                                                    : "item-rejected"
                                    }>
                                        {
                                        item.status === true ? "In stock"
                                        : item.status === false ? "Borrowed"
                                                : "Scrapped"
                                        }
                                    </div>
                                </TableCell>
                                <TableCell align="center" className="book-item-tbody">
                                    <Link to={`/book-units/editbook-unit/${item._id}`} className='link-decoration'> 
                                        <EditIcon className="author-action-icons"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </Link>     
                                    <DeleteIcon className="author-action-icons" onClick={()=> handleDelete(item._id)}/>    
                                </TableCell>
                            </TableRow>
                        )) : <tr><td className="no-data">No Data Found</td></tr>}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    </div>
}