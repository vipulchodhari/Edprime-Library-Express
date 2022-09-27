import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import homeIcon from '../../assets/home.png';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import '../../styles/master.css';

function formatOurData(columnName, AuthorName, CreationDate, Status) {
    return { columnName, AuthorName, CreationDate, Status};
}

const SampleData = [
    formatOurData("1", "Author Name", "25-05-2022", "Approved"),
    formatOurData("2", "Author Name", "25-05-2022", "In Progress"),
    formatOurData("3", "Author Name", "25-05-2022", "Success"),
    formatOurData("4", "Author Name", "25-05-2022", "Rejected"),
];

export const Author = () => {
    return <div className="author-container">
        <h3 className='author-heading'>Set Up</h3>
        <div className='author-top'>
            <img src={homeIcon} alt=''/>
            <p style={{fontSize:'12px', color:'#777777'}}>Library, Set Up, Master, Author Master</p>
        </div>
        <div className="author-cont">
            <div className="author-btnFlex">
            <h3>Author Master</h3>
            <button className="author-addbtn">ADD AUTHOR</button>
            </div>
            <hr/>
            <input className="author-search-box" type='text' placeholder='Search...'/>
            <p style={{color:'#9EA5B9'}}>Search in all fields</p>
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
                        {SampleData.map((row) => (
                            <TableRow key={row.columnName}>
                                <TableCell component="th" scope="row" className="book-item-tbody">
                                    {row.columnName}
                                </TableCell>
                                <TableCell align="center" className="book-item-tbody">
                                    <strong>{row.AuthorName}</strong>
                                </TableCell>
                                <TableCell align="center" className="book-item-tbody">
                                    <strong>{row.CreationDate}</strong>
                                </TableCell>
                                <TableCell align="center">
                                        <div className={
                                                row.Status==="Approved"?"item-approved"
                                                :row.Status==="In Progress"?"item-progress"
                                                :row.Status==="Success"?"item-success"
                                                :"item-rejected"
                                            }>
                                            {row.Status}
                                        </div>        
                                </TableCell>
                                <TableCell align="center" className="book-item-tbody">
                                    <EditIcon className="author-action-icons"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <DeleteIcon className="author-action-icons"/>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    
                </Table>
            </TableContainer>
        </div>
    </div>
}