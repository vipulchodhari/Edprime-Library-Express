import homeIcon from '../../../assets/home.png';
import '../../../styles/addmaster.css';
import customerBorder from '../../../assets/upload.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { subjectUrl} from '../../../utils/common';

export const AddSubject = () => {
    const [text, setText] = useState({
        title: "",
        // author_image: ""
    })

    const navigate = useNavigate();

    const handleUpload = () => {

    }

    const handleChange = (e) => {
        const { name } = e.target;
        setText({
            ...text,
            [name]: e.target.value
        })
        // console.log("text", text.author_image);
    }

    const handleSubmit = async() => {
        try{
            axios.post(`${subjectUrl}`,{
                title: text.title,
                // author_image: text.author_image
            })
              .then((res) => {
                console.log("post data", res)

                if(res.status === 200){
                    alert('Subject created successfully')
                    navigate('/subject')
                }
            })
        }catch(err){
            console.log("Error", err);
        }
    }

    return <div className="author-container">
        <h3 className='author-heading'>Set Up</h3>
        <div className='author-top'>
            <img src={homeIcon} alt='' />
            <p style={{ fontSize: '12px', color: '#777777' }}>Library, Set Up, Master, Subject Master</p>
        </div>
        <div className="author-cont">
            <div className="author-btnFlex">
                <h3>Add Subject</h3>
                <div className='display-flex'>
                    <button className="author-addbtn" onClick={handleSubmit}>Submit</button>
                    <button className="author-addbtn" onClick={()=> navigate('/subject')} style={{ backgroundColor: 'rgb(246,78,96)' }}>Cancel</button>
                </div>
            </div>
            <hr />
            <div className="add-author-container">
                <div>
                    <label >Subject Name</label><br />
                    <input onChange={handleChange} name='title' className="publisher-box" type='text' placeholder='Subject Name' /><br />
                    <label>Description</label><br />
                    <textarea onChange={handleChange} name='author_image' className="publisher-box publisher-description" type='text' />
                </div>
                <div>
                <label className="add-category-img">Subject Image </label>
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
    </div>
}