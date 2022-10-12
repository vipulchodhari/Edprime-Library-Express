import homeIcon from '../../../assets/home.png';
import '../../../styles/addmaster.css';
import customerBorder from '../../../assets/upload.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { authorUrl } from '../../../utils/common';
import Multiselect from 'multiselect-react-dropdown';

export const AddLocation = () => {
    const [selectionData, setSelectionData] = useState([])
    const [selection, setSelection] = useState([])
    const [text, setText] = useState({
        title: "",
        author_image: ""
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
            axios.post(`${authorUrl}`, {
                title: text.title,
                author_image: text.author_image
            })
                .then((res) => {
                    console.log("post data", res)

                    if (res.status === 201) {
                        alert('Autor created successfully')
                        navigate('/location')
                    }
                })
        } catch (err) {
            console.log("Error", err);
        }
    }

    const removeSelection = () => {

    }

    return <div className="author-container">
        <h3 className='author-heading'>Set Up</h3>
        <div className='author-top'>
            <img src={homeIcon} alt='' />
            <p style={{ fontSize: '12px', color: '#777777' }}>Library, Set Up, Master, Author Master</p>
        </div>
        <div className="author-cont">
            <div className="author-btnFlex">
                <h3>Add Location</h3>
                <div className='display-flex'>
                    <button className="author-addbtn" onClick={handleSubmit}>Submit</button>
                    <button className="author-addbtn" onClick={() => navigate('/location')} style={{ backgroundColor: 'rgb(246,78,96)' }}>Cancel</button>
                </div>
            </div>
            <hr />
            <div className="add-author-container ">
                <div>
                    <div style={{ display: "grid", gridTemplateColumns: '49% 49%' }}>
                        <div>
                            <label >Building</label><br />
                            <input onChange={handleChange} name='title' className="publisher-box add-publisher-input" type='text' placeholder='' />
                        </div>
                        <div>
                            <label >Floor</label><br />
                            <input onChange={handleChange} name='title' className="publisher-box add-publisher-input" type='text' placeholder='' />
                        </div>
                    </div>
                    <label>Rack</label><br />
                    <textarea onChange={handleChange} name='author_image' className="publisher-box add-publisher-input publisher-description" type='text' /><br />
                    <label>Description</label><br />
                    <textarea rea onChange={handleChange} name='author_image' className="publisher-box add-publisher-input publisher-description" type='text' /><br />
                </div>
                <div className='location-selection-cont'>
                    <label>Selection</label>
                    <Multiselect
                        options={selectionData}
                        displayValue="title"
                        // closeIcon="close"
                        onKeyPressFn={function noRefCheck() { }}
                        onRemove={(selectedList, selectedItem) => {
                            removeSelection(selectedList, selectedItem);
                        }}
                        onSearch={function noRefCheck() { }}
                        onSelect={(selectedList, selectedItem) => {
                            let selectionId = [...category, selectedItem.id]
                            setSelection(selectionId);

                            // console.log("author data", selectedItem);
                        }}
                        placeholder={"Selection"}
                    /><br/>
                    <label >Location Image</label><br />
                    <div style={{ display: "flex" }}>
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