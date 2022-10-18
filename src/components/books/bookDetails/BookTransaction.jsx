import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { booksUrl } from "../../../utils/common";
import dateFormat from "dateformat";
// import TableContainer from "@material-ui/core/TableContainer";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
// import TableHead from "@material-ui/core/TableHead";
// import TableCell from "@material-ui/core/TableCell";

function formatOurData(columnName, semOneMarks, semTwoMarks, semThreeMarks) {
    return { columnName, semOneMarks, semTwoMarks, semThreeMarks};
}

const SampleData = [
    formatOurData("1", 55, "25-05-2022", "Due"),
    formatOurData("2", 44, "25-05-2022", "Panding"),
    formatOurData("3", 67, "25-05-2022", "Over Due"),
    formatOurData("4", 68, "25-05-2022", "Over Due"),

];

export function BookTransaction({ BookId }) {
    const [bookTransaction, setBookTaransaction] = useState('');
    const getData = () => {
        // let itemData = []
        axios.get(`${booksUrl}/transactions/${BookId}`)
           .then((res) => {
            setBookTaransaction(res.data.data)
               console.log('transaction Data', res)
            })
    }
    console.log('bookTransaction', bookTransaction);

    useEffect(() => {
        getData()
    }, [])
    return (
        <div style={{ display: "block", padding: 0 }}>
            <h4></h4>
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
                                Member Name
                            </TableCell>
                            <TableCell align="center" className="book-item-thead">
                                Book Title
                            </TableCell>

                            <TableCell align="center" className="book-item-thead">
                                Date of Borrowing
                            </TableCell>

                            <TableCell align="center" className="book-item-thead">
                                Due On
                            </TableCell>
                            <TableCell align="center" className="book-item-thead">
                                Status
                            </TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {bookTransaction? bookTransaction.map((item, i) => (
                            <TableRow key={i}>
                                <TableCell component="th" scope="row" className="book-item-tbody">
                                    {i+1}
                                </TableCell>
                                <TableCell align="center" className="book-item-tbody">
                                    <strong>{item.userName}</strong>
                                </TableCell>
                                <TableCell align="center" className="book-item-tbody">
                                    <strong>{item.bookItemUniqeId.slice(-4)}</strong>
                                </TableCell>
                                <TableCell align="center" className="book-item-tbody">
                                    <strong>{item.createdDate}</strong>
                                </TableCell>
                                <TableCell align="center" className="book-item-tbody">
                                    <strong>{item.dueDate}</strong>
                                </TableCell>
                                <TableCell align="center">
                                        <div className={
                                                item.bookStatus==="Due"?"item-due"
                                                :"item-over-due"
                                            }>
                                            {item.bookStatus}
                                        </div>        
                                </TableCell>
                            </TableRow>
                        )) : 'Data not Found'}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}