import {  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import homeIcon from '../../../assets/home.png';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import dateFormat from "dateformat";
import { useEffect, useState } from "react";
import axios from "axios";
import '../../../styles/master.css';
import {Link} from 'react-router-dom'

function formatOurData(columnName, AuthorName, CreationDate, Status) {
    return { columnName, AuthorName, CreationDate, Status };
}

const SampleData = [
    formatOurData("1", "Author Name", "25-05-2022", "Approved"),
    formatOurData("2", "Author Name", "25-05-2022", "In Progress"),
    formatOurData("3", "Author Name", "25-05-2022", "Success"),
    formatOurData("4", "Author Name", "25-05-2022", "Rejected"),
];

export const Author = () => {
    let [authorData, setAuthorData] = useState();
    const [query, setQuery] = useState("");

    const getData = async () => {
        await axios.get('http://192.100.100.52:5000/author')
            .then((res) => {
                setAuthorData(res.data.data)
                console.log(res.data.data)
            })
    }
    // console.log("data", authorData);

    authorData = authorData?.filter((el) =>
        el?.title?.toLowerCase().includes(query) ||
        el?.title?.toUpperCase().includes(query) ||
        dateFormat(el.createdAt, "mm-dd-yyyy").toLowerCase().includes(query)
        // el.status.toLowerCase().includes(query)
    )

    const searchAuthor = (e) => {
        setQuery(e.target.value)
    }
    console.log("query", query);
    console.log("filter data", authorData);

    useEffect(() => {
         getData()
    }, [])
    return <div className="author-container">
        <h3 className='author-heading'>Set Up</h3>
        <div className='author-top'>
            <img src={homeIcon} alt='' />
            <p style={{ fontSize: '12px', color: '#777777' }}>Library, Set Up, Master, Author Master</p>
        </div>
        <div className="author-cont">
            <div className="author-btnFlex">
                <h3>Author Master</h3>
                <Link to='/addauthor'>
                <button className="author-addbtn">ADD AUTHOR</button>
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
                                Author Name
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
                        {authorData? authorData?.map((author, i) => (
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
                                    <EditIcon className="author-action-icons" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <DeleteIcon className="author-action-icons" />
                                </TableCell>
                            </TableRow>
                        )) : <tr><td className="no-data">No Data Found</td></tr>}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    </div>
}