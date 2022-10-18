import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { booksUrl } from "../../../utils/common";

function formatOurData(columnName, semOneMarks, semTwoMarks) {
  return { columnName, semOneMarks, semTwoMarks };
}

const SampleData = [
  formatOurData("1", 55, 66),
  formatOurData("2", 44, 94),
  formatOurData("3", 67, 85),
  formatOurData("4", 68, 95),
  formatOurData("5", 56, 85),
];

export function BookUnitItem({ BookId }) {
  const [bookItemData, setBookItemData] = useState();
  const getData = () => {
    axios.get(`${booksUrl}/${BookId}/book-items`)
      .then((res) => {
        setBookItemData(res.data)
        console.log('book unit item Data', res)
      })
  }
  console.log('bookItemData', bookItemData);

  useEffect(() => {
    getData()
  }, [])
  return (
    <div style={{ display: "block", padding: 0 }}>
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
              <TableCell className="book-item-thead">S.No</TableCell>
              <TableCell align="center" className="book-item-thead">
                Book Unit item identifier
              </TableCell>
              <TableCell align="center" className="book-item-thead">
                Location identifier
              </TableCell>
              <TableCell align="center" className="book-item-thead">
                Health Condition
              </TableCell>
              <TableCell align="center" className="book-item-thead">
                No of Issue
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookItemData ? bookItemData?.map((item, i) => (
              <TableRow key={i}>
                <TableCell component="th" scope="row" className="book-item-tbody">
                  {i+1}
                </TableCell>
                <TableCell align="center" className="book-item-tbody">
                  <strong>{item?._id.slice(-6)}</strong>
                </TableCell>
                <TableCell align="center" className="book-item-tbody">
                  <strong>Rack {item.locationMaster.rack}</strong>
                </TableCell>
                <TableCell align="center" className="book-item-tbody">
                  <strong>{item?.bookHealths}</strong>
                </TableCell>
                <TableCell align="center" className="book-item-tbody">
                  {item?.bookLendings>0 ? item?.bookLendings : 0}
                </TableCell>
              </TableRow>
            )) : 'kjklj'}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}