import homeIcon from '../../../assets/home.png';
import '../../../styles/addmaster.css';
import customerBorder from '../../../assets/upload.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { authorUrl } from '../../../utils/common';
import { SelectMember } from './SelectMember';
import { SelectBook } from './SelectBook';

export const IssueBook = () => {
    const [text, setText] = useState({
        title: "",
        author_image: ""
    })
    const [member, setMember] = useState()
    const receiveMember = (memerId) => {
        setMember(memerId)
    }
    console.log('receive member id',  member);

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
            axios.post(`${authorUrl}`,{
                title: text.title,
                author_image: text.author_image
            })
              .then((res) => {
                console.log("post data", res)

                if(res.status === 201){
                    alert('Autor created successfully')
                    navigate('/author')
                }
            })
        }catch(err){
            console.log("Error", err);
        }
    }

    

    return <div className="author-container">
        <h3 className='author-heading'>Issue a Book</h3>
        <div className='author-top'>
            <img src={homeIcon} alt='' />
            <p style={{ fontSize: '12px', color: '#777777' }}>Library, Books, Issue a Book</p>
        </div>
        <div className="author-cont">
            <div className="author-btnFlex">
                <h3>Issue a Book</h3>
                <div className='display-flex'>
                    <button className="author-addbtn" onClick={handleSubmit}>ISSUE</button>
                    <button className="author-addbtn" onClick={()=> navigate('/author')} style={{ backgroundColor: 'rgb(246,78,96)' }}>CANCEL</button>
                </div>
            </div>
            <hr />
            <div className="issue-book-container">
                <div className='add-membership-validity' style={{gap:'10px'}}>
                    <div>
                        <SelectMember receiveMember={receiveMember}/>
                    </div>
                    <div>
                        <SelectBook/>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    </div>
}