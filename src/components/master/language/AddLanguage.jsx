import homeIcon from '../../../assets/home.png';
import '../../../styles/addmaster.css';
import customerBorder from '../../../assets/upload.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { languageUrl} from '../../../utils/common';

export const AddLanguage = () => {
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

    const handleSubmit = async () => {
        try {
            axios.post(`${languageUrl}`, {
                title: text.title
                // author_image: text.author_image
            })
                .then((res) => {
                    console.log("post data", res)

                    if (res.status === 200) {
                        alert('Language created successfully')
                        navigate('/language')
                    }
                })
        } catch (err) {
            console.log("Error", err);
        }
    }

    return <div className="author-container">
        <h3 className='author-heading'>Set Up</h3>
        <div className='author-top'>
            <img src={homeIcon} alt='' />
            <p style={{ fontSize: '12px', color: '#777777' }}>Library, Set Up, Master, Language Master</p>
        </div>
        <div className="author-cont">
            <div className="author-btnFlex">
                <h3>Add Language</h3>
                <div className='display-flex'>
                    <button className="author-addbtn" onClick={handleSubmit}>Submit</button>
                    <button className="author-addbtn" onClick={() => navigate('/language')} style={{ backgroundColor: 'rgb(246,78,96)' }}>Cancel</button>
                </div>
            </div>
            <hr />
            <div className="add-author-container">
                <div>
                    <label >Langauge Name</label><br />
                    <div>
                    
                    <input onChange={handleChange} className="publisher-box add-language-box" name='title' type='text' />
                    </div>
                    <label>Description</label><br />
                    <textarea onChange={handleChange} name='' className="publisher-box language-description" type='text' />
                </div>
            </div>
        </div>
    </div>
}