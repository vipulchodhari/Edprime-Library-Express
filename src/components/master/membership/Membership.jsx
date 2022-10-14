import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import homeIcon from '../../../assets/home.png';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import dateFormat from "dateformat";
import { useEffect, useState } from "react";
import axios from "axios";
import '../../../styles/master.css';
import { Link, useNavigate } from 'react-router-dom'
import { } from "../../../utils/common";
import Pagination from "react-js-pagination";

export const Membership = () => {
    let [authorData, setAuthorData] = useState();
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
        await axios.get(`${""}`)
            .then((res) => {
                setAuthorData(res.data)
                setItemCount(res?.data?.authorCount)
                // console.log(res)
            })
    }
    console.log("data", authorData);

    authorData = authorData?.filter((el) =>
        el?.title?.toLowerCase().includes(query) ||
        el?.title?.toUpperCase().includes(query) ||
        dateFormat(el.createdAt, "mm-dd-yyyy").toLowerCase().includes(query)
        // el.status.toLowerCase().includes(query)
    )

    const searchAuthor = (e) => {
        setQuery(e.target.value)
    }

    const handleDelete = async (id) => {
        console.log("id", id);
        try {
            await axios.delete(`${publisherUrl}/${id}`)
                .then((res) => {
                    console.log("delete response", res)
                    if(res.status === 204)
                     alert("Author Deleted")
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
    }, [activePage])
    return <div className="author-container">
        <h3 className='author-heading'>Set Up</h3>
        <div className='author-top'>
            <img src={homeIcon} alt='' />
            <p style={{ fontSize: '12px', color: '#777777' }}>Library, Set Up, Master, Membership Master</p>
        </div>
        <div className="author-cont">
            <div className="author-btnFlex">
                <h3>Membership Plan</h3>
                <Link to='/membership/addmembership'>
                    <button className="author-addbtn">ADD MEMBERSHIP</button>
                </Link>
            </div>
            <hr />
            <input onChange={searchAuthor} className="author-search-box" type='text' placeholder='Search...' />
            <p style={{ color: '#9EA5B9' }}>Search in all fields</p>
            <TableContainer component={Paper}>
                <Table
                    style={{
                        // width: 1000,
                        // height :  400, 
                    }}
                    size="small"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell className="book-item-thead">S.No </TableCell>
                            <TableCell align="center" className="book-item-thead">
                                Publisher Name
                            </TableCell>
                            <TableCell align="center" className="book-item-thead">
                                Creation Date
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
                        {authorData ? authorData?.map((author, i) => (
                            <TableRow key={i}>
                                <TableCell component="th" scope="row" className="book-item-tbody">
                                    {i + 1}
                                </TableCell>
                                <TableCell align="center" className="book-item-tbody">
                                    <strong>{author.title}</strong>
                                </TableCell>
                                <TableCell align="center" className="book-item-tbody">
                                    <strong>{dateFormat(author.createdAt, "mm-dd-yyyy")}</strong>
                                </TableCell>
                                <TableCell align="center">
                                    <div className={
                                        author.status === "Approved" ? "item-approved"
                                            : author.status === "In Progress" ? "item-progress"
                                                : author.status === "Success" ? "item-success"
                                                    : "item-rejected"
                                    }>
                                        {author.status === true ? "true" : "false"}
                                    </div>
                                </TableCell>
                                <TableCell align="center" className="book-item-tbody">
                                    <Link to={`/membership/editmembership/${author._id}`} className='link-decoration'> 
                                        <EditIcon className="author-action-icons"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </Link>     
                                    <DeleteIcon className="author-action-icons" onClick={()=> handleDelete(author._id)}/>    
                                </TableCell>
                            </TableRow>
                        )) : <tr><td className="no-data">No Data Found</td></tr>}
                    </TableBody>
                </Table>
            </TableContainer>

            <div className="pagination">
                <Pagination
                    activePage={activePage}
                    itemsCountPerPage={5}
                    totalItemsCount={+itemCount}
                    pageRangeDisplayed={3}
                    firstPageText={'Start'}
                    lastPageText={'End'}
                    prevPageText={'<<'}
                    nextPageText={'>>'}
                    onChange={handlePageChange}
                />
            </div>
        </div>
    </div>
}