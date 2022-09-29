

import homeIcon from '../../../assets/home.png';
import '../../../styles/addmaster.css';
import customerBorder from '../../../assets/upload.png';

export const EditSubject = () => {
    const handleUpload = () => {

    }

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
                    <button className="author-addbtn">Submit</button>
                    <button className="author-addbtn" style={{ backgroundColor: 'rgb(246,78,96)' }}>Cancel</button>
                </div>
            </div>
            <hr />
            <div className="add-author-container">
                <div>
                    <label >Author Name</label><br />
                    <input className="publisher-box" type='text' placeholder='Publisher Name' /><br />
                    <label>Description</label><br />
                    <input className="publisher-box publisher-description" type='text' />
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