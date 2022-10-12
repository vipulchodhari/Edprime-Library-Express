import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import homeIcon from '../../../assets/home.png';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from "react";
import axios from "axios";
import '../../../styles/books.css';
import { Link, useNavigate } from 'react-router-dom'
import { booksUrl } from "../../../utils/common";

export const BookImport = () => {
    let [booksData, setBooksData] = useState();

    const navigate = useNavigate();

    const getData = async () => {
        await axios.get(`${booksUrl}`)
            .then((res) => {
                setBooksData(res.data)
               
            })
    }
    console.log("data", booksData);

    const searchBooks = (e) => {
       
    }

    const handleDelete = async (id) => {
      
    }

    useEffect(() => {
        getData()
    }, [])
    return <div className="author-container">
        <h3 className='author-heading'>Books Import</h3>
        <div className='author-top'>
            <img src={homeIcon} alt='' />
            <p style={{ fontSize: '12px', color: '#777777' }}>Library Books , Book Import</p>
        </div>
        <div className="author-cont">
            <div className="author-btnFlex">
                <h4>CSV Templates for Book Import</h4>
                <div >
              
                <Link to='/category/addcategory' style={{marginRight:'15px'}}>
                    <button className="author-addbtn">Import</button>
                </Link>
                </div>
               
            </div>
             
            <hr />
             <div>
            <p>File</p>  
            <button>Choose File</button>
            </div>
           <p>Books Sample CSV</p>
              
                   
        </div>
    </div>
}