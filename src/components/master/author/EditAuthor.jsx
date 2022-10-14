import homeIcon from '../../../assets/home.png';
import '../../../styles/addmaster.css';
import customerBorder from '../../../assets/upload.png';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { authorUrl } from '../../../utils/common';

export const EditAuthor = () => {
    const params = useParams();
    const navigate = useNavigate();
    const authorId  = params.id;
    console.log("params", authorId);

    const [editAuthorData, setEditAuthorData] = useState();
    console.log("editAuthorData", editAuthorData);

    const getData = () => {
        axios.get(`${authorUrl}/${authorId}`)
          .then((res) => {
            console.log("edit data", res)
            setEditAuthorData(res.data.data)
        })
    }
    const handleUpload = () => {

    }

    const handleChange = (e) => {
        const { name } = e.target;
        setEditAuthorData({
            ...editAuthorData,
            [name]: e.target.value
        })
    }

    const handleSubmit = () => {
        axios.put(`${authorUrl}/${authorId}`, {
            title: editAuthorData?.title,
            author_image: editAuthorData?.author_image
        })
          .then((res) => {
            console.log("edit data", res)
            if(res.status === 204){
                alert('Author Update Successfully')

                navigate('/author')
            }
          })
    }

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
                <h3>Edit Author</h3>
                <div className='display-flex'>
                    <button className="author-addbtn" onClick={handleSubmit}>Submit</button>
                    <button className="author-addbtn" onClick={() => navigate('/author')} style={{ backgroundColor: 'rgb(246,78,96)' }}>Cancel</button>
                </div>
            </div>
            <hr />
            <div className="add-author-container">
                <div>
                    <label >Author Name</label><br />
                    <input 
                        className="publisher-box"
                        value={editAuthorData?.title ?? ''}
                        onChange={handleChange} 
                        name='title'  
                        type='text'
                        placeholder='Author Name' /><br />
                    <label>Description</label><br />
                    <textarea value={editAuthorData?.author_image ?? ''} onChange={handleChange} name='author_image' className="publisher-box publisher-description" type='text' />
                </div>
                <div style={{display: "flex"}}>
                    <label htmlFor="file-input" className='add-author-img-cont'>
                        <img src={customerBorder} alt="upload pic" />
                        {/* <p style={{ marginTop: '0px', color: 'gray' }}><strong>dummy image</strong></p> */}
                    </label>
                    <input
                        style={{ display: 'none', cursor: 'pointer' }}
                        // style={{ marginTop:'25px' }}
                        id="file-input"
                        type='file'
                        onChange={handleUpload}
                    />
                </div>
            </div>
        </div>
    </div>
}