import homeIcon from '../../../assets/home.png';
import '../../../styles/addmaster.css';
import customerBorder from '../../../assets/upload.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { categoryUrl } from '../../../utils/common';

export const AddCategory = () => {
    const [text, setText] = useState({
        title: "",
        category_image: ""
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
            axios.post(`${categoryUrl}`,{
                title: text.title,
                // author_image: text.author_image
                category_image : text.category_image
            })
              .then((res) => {
                console.log("post data", res)

                if(res.status === 200){
                    alert('Category created successfully')
                    navigate('/category')
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
            <p style={{ fontSize: '12px', color: '#777777' }}>Library, Set Up, Master, Category Master</p>
        </div>
        <div className="author-cont">
            <div className="author-btnFlex">
                <h3>Add Category</h3>
                <div className='display-flex'>
                    <button className="author-addbtn" onClick={handleSubmit}>Submit</button>
                    <button className="author-addbtn" onClick={()=> navigate('/category')} style={{ backgroundColor: 'rgb(246,78,96)' }}>Cancel</button>
                </div>
            </div>
            <hr />
            <div className="add-author-container">
                <div>
                    <label >Category Name</label><br />
                    <input onChange={handleChange} name='title' className="publisher-box" type='text' placeholder='Category Name' /><br />
                    <label>Description</label><br />
                    <textarea onChange={handleChange} name='category_image' className="publisher-box publisher-description" type='text' />
                </div>
                <div>
                <label className="add-category-img">Category Image </label>
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