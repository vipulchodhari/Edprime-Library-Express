import homeIcon from '../../../assets/home.png';
import '../../../styles/addmaster.css';
import customerBorder from '../../../assets/upload.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { authorUrl } from '../../../utils/common';

export const AddMembership = () => {
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
                        navigate('/membership')
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
            <p style={{ fontSize: '12px', color: '#777777' }}>Library, Set Up, Master, Author Master</p>
        </div>
        <div className="author-cont">
            <div className="author-btnFlex">
                <h3>Membership Plan</h3>
                <div className='display-flex'>
                    <button className="author-addbtn" onClick={handleSubmit}>Submit</button>
                    <button className="author-addbtn" onClick={() => navigate('/membership')} style={{ backgroundColor: 'rgb(246,78,96)' }}>Cancel</button>
                </div>
            </div>
            <hr />
            <div >
                <div>
                    <label >Plan Name</label><br />
                    <div>
                        <input onChange={handleChange} name='author_image' className="publisher-box add-publisher-input" type='text' />
                    </div><br />
                    <label>Description</label><br />
                    <textarea onChange={handleChange} name='author_image' className="publisher-box membership-description" type='text' /><br /><br />

                    <div className="add-membership-validity">
                        <div>
                            <label>Validity Period</label><br />
                            <input type='text' className="publisher-box add-memeber-box" />
                        </div>
                        <div>
                            <label>No. of Days</label><br />
                            <input type='text' className="publisher-box add-memeber-box" />
                        </div>
                    </div>
                    <div>
                        <input type="radio" id='Reservations' name='Reservation' value="Reservations" />
                        <label htmlFor="Reservations">Allow Reservations</label><br />

                        <input type="radio" id="Charges" name='Charge' value="fine Charges" />
                        <label htmlFor="Charges">Waive fine Charges</label><br />

                        <input id="Renewal" name='renewal' type="radio" value="Renewal" />
                        <label htmlFor="Renewal">Allow Renewal</label><br />
                    </div>
                </div>
            </div>
        </div>
    </div>
}