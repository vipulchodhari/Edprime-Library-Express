import homeIcon from '../../../assets/home.png';
import '../../../styles/addmaster.css';
import customerBorder from '../../../assets/upload.png';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { authorUrl } from '../../../utils/common';

export const EditMembership = () => {
    const params = useParams();
    const navigate = useNavigate();
    const authorId  = params.id;
    console.log("params", authorId);

    const [editMembershipData, setEditMembershipData] = useState();
    console.log("editMembershipData", editMembershipData);

    const getData = () => {
        axios.get(`${authorUrl}/${authorId}`)
          .then((res) => {
            console.log("edit data", res)
            setEditMembershipData(res.data)
        })
    }
    const handleUpload = () => {

    }

    const handleChange = (e) => {
        const { name } = e.target;
        setEditMembershipData({
            ...editMembershipData,
            [name]: e.target.value
        })
    }

    const handleSubmit = () => {
        axios.put(`${authorUrl}/${authorId}`, {
            title: editMembershipData?.title,
            author_image: editMembershipData?.author_image
        })
          .then((res) => {
            console.log("edit data", res)
            if(res.status === 200){
                alert('Author Update Successfully')

                navigate('/membership')
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
                    <button className="author-addbtn" onClick={() => navigate('/membership')} style={{ backgroundColor: 'rgb(246,78,96)' }}>Cancel</button>
                </div>
            </div>
            <hr />
            <div className="add-author-container">
                <div>
                    <label >Author Name</label><br />
                    <input 
                        className="publisher-box"
                        value={editMembershipData?.title ?? ''}
                        onChange={handleChange} 
                        name='title'  
                        type='text'
                        placeholder='Publisher Name' /><br />
                    <label>Description</label><br />
                    <textarea value={editMembershipData?.author_image ?? ''} onChange={handleChange} name='author_image' className="publisher-box publisher-description" type='text' />
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