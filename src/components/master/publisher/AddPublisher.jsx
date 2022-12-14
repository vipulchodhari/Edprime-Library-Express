import homeIcon from '../../../assets/home.png';
import '../../../styles/addmaster.css';
import customerBorder from '../../../assets/upload.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { publisherUrl } from '../../../utils/common';

export const AddPublisher = () => {
    const [text, setText] = useState({
        title: "",
        publisher_image: ""
       

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
            axios.post(`${publisherUrl}`,{
                // publisher_name: text.publisher_name,
                publisherTitle: text.title,
                publisher_image: text.publisher_image
            })
              .then((res) => {
                console.log("post data", res)

                if(res.status === 200){
                    alert('Publisher created successfully')
                    navigate('/publisher')
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
            <p style={{ fontSize: '12px', color: '#777777' }}>Library, Set Up, Master, Publisher Master</p>
        </div>
        <div className="author-cont">
            <div className="author-btnFlex">
                <h3>Add Publisher</h3>
                <div className='display-flex'>
                    <button className="author-addbtn" onClick={handleSubmit}>Submit</button>
                    <button className="author-addbtn" onClick={()=> navigate('/publisher')} style={{ backgroundColor: 'rgb(246,78,96)' }}>Cancel</button>
                </div>
            </div>
            <hr />
            <div className="add-author-container add-publisher-container">
                <div>

                    <label >Publisher Name</label><br />
                    <input onChange={handleChange} name='title' className="publisher-box add-publisher-input" type='text' placeholder='Publisher Name...' /><br />
                    <label> Publisher Address</label><br />
                    <textarea onChange={handleChange} name='publisher_image' className="publisher-box add-publisher-input publisher-description" type='text' /><br />
                    <label>Description</label><br />
                    <textarea rea onChange={handleChange} name='author_image' className="publisher-box add-publisher-input publisher-description" type='text' /><br />
                </div>
                <div>
                    <label >Publisher Website</label><br />
                    <input onChange={handleChange} name='' className="publisher-box add-publisher-input" type='text' placeholder='Publisher Website...' /><br />
                    <label >Publisher Image</label><br />
                    <div style={{display: "flex"}}>
                    <label htmlFor="file-input" className='add-author-img-cont add-publisher-img-cont' >
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