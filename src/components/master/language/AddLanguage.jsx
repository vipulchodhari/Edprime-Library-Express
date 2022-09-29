import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import homeIcon from '../../../assets/home.png';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import dateFormat from "dateformat";
import { useEffect, useState } from "react";
import axios from "axios";
import '../../../styles/addmaster.css';


function formatOurData(columnName, AuthorName, CreationDate, Status) {
    return { columnName, AuthorName, CreationDate, Status };
}

const SampleData = [
    formatOurData("1", "Author Name", "25-05-2022", "Approved"),
    formatOurData("2", "Author Name", "25-05-2022", "In Progress"),
    formatOurData("3", "Author Name", "25-05-2022", "Success"),
    formatOurData("4", "Author Name", "25-05-2022", "Rejected"),
];

export const AddLanguage= () => {
    let [authorData, setAuthorData] = useState();
    const [query, setQuery] = useState("");

    const getData = async () => {
        await axios.get('')
            .then((res) => {
                setAuthorData(res.data.data)
                console.log(res.data.data)
            })
    }
    // console.log("data", authorData);

    authorData = authorData?.filter((el) =>
        el.title.toLowerCase().includes(query) ||
        el.title.toUpperCase().includes(query) ||
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
            <p style={{ fontSize: '12px', color: '#777777' }}>Library, Set Up, Master,Subject Master</p>
        </div>
        <div className="author-cont">
            <div className="author-btnFlex">
                <h3>Add Language</h3>
                <div className='display-flex'>
                <button className="author-addbtn">Submit</button>
                <button className="author-addbtn-color">Cancel</button>
                </div>
            </div>
            <hr />
            <div>
            <p>Language Name</p>
            <input className="langauge-add-box" type='text' />
            <p>Description</p>
           
            </div>
            <div>
            <input className="langauge-add-box" type='text' />
            </div>
        </div>
    </div>
}