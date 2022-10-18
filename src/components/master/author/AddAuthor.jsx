import homeIcon from '../../../assets/home.png';
import '../../../styles/addmaster.css';
import customerBorder from '../../../assets/upload.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { authorUrl } from '../../../utils/common';

export const AddAuthor = () => {
    const [text, setText] = useState({
        title: "",
        author_image: "",
        show_img: "",
        authorDiscription: ""
    })

    const navigate = useNavigate();

    const handleUpload = (e) => {
        let files = e.target.files;
        // setFile(URL.createObjectURL(e.target.files[0]));
        console.log("image", files[0])

        setText({
            ...text,
            show_img: URL.createObjectURL(files[0]),
            author_image: files[0]
        })
    }
    console.log("author image", text.author_image);
    // console.log("show_img ", text.show_img);

    const handleChange = (e) => {
        const { name } = e.target;
        setText({
            ...text,
            [name]: e.target.value
        })
        // console.log("text", text.author_image);
    }

    const handleSubmit = async() => {
        const formData = new FormData()
        formData.append("file", text.author_image)
        try{
            const res = await axios({
                method: "post",
                url: 'http://192.100.100.54:3000/files',
                data: formData
            })
            console.log("response", res);
            axios.post(`${authorUrl}`,{
                authorTitle: text.title,
                authorImage: res.data,
                authorDiscription: text.authorDiscription
            })
              .then((res) => {
                console.log("post data", res)

                if(res.status === 200){
                    alert('Autor created successfully')
                    navigate('/author')
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
            <p style={{ fontSize: '12px', color: '#777777' }}>Library, Set Up, Master, Author Master</p>
        </div>
        <div className="author-cont">
            <div className="author-btnFlex">
                <h3>Add Author</h3>
                <div className='display-flex'>
                    <button className="author-addbtn" onClick={handleSubmit}>Submit</button>
                    <button className="author-addbtn" onClick={()=> navigate('/author')} style={{ backgroundColor: 'rgb(246,78,96)' }}>Cancel</button>
                </div>
            </div>
            <hr />
            <div className="add-author-container">
                <div>
                    <label >Author Name</label><br />
                    <input onChange={handleChange} name='title' className="publisher-box" type='text' placeholder='Author Name' /><br />
                    <label>Description</label><br />
                    <textarea onChange={handleChange} name='authorDiscription' className="publisher-box publisher-description" type='text' />
                </div>
                <div>
                <label className="add-category-img">Author Image </label>
                <div style={{display: "flex"}}>
                    <label htmlFor="file-input" className='add-author-img-cont'>
                        <img src={text.author_image? text.show_img : customerBorder} alt="upload pic" />
                        {/* <img src={text.show_img} alt="upload pic" /> */}
                        <p style={{ marginTop: '-5px', color: 'gray' }}><strong>{text?.author_image?.name}</strong></p>
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