import homeIcon from '../../assets/home.png';
import '../../styles/member.css';
import customerBorder from '../../assets/upload.png';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { authorUrl } from '../../utils/common';
import Multiselect from 'multiselect-react-dropdown';
import { getAuthorData, getCategoryData, getClassData, getGenreData, getLanguageData, getPublisherData, getSubjectData } from '../../utils/getApi';

export const AddMember = () => {
    const [categoryData, setCategoryData] = useState([]);
    const [authorData, setAuthorData] = useState([]);
    const [publisherData, setPublisherData] = useState([]);
    const [genreData, setGenreData] = useState([]);
    const [languageData, setLanguageData] = useState([]);
    const [classData, setClassData] = useState([]);
    const [subjectData, setSubjectData] = useState([]);

    const [category, setCategory] = useState([])
    const [author, setAuthor] = useState([]);
    const [publisher, setPublisher] = useState([]);
    const [genre, setGenre] = useState([]);
    const [language, setLanguage] = useState([]);
    const [classs, setClasss] = useState([]);
    const [subject, setSubject] = useState([]);

    const [text, setText] = useState({
        book_title: "",
        author_image: ""
    })
    // console.log("category data", categoryData);
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
        // try{
        //     axios.post(`${authorUrl}`,{
        //         title: text.title,
        //         author_image: text.author_image
        //     })
        //       .then((res) => {
        //         console.log("post data", res)

        //         if(res.status === 201){
        //             alert('Autor created successfully')
        //             navigate('/category')
        //         }
        //     })
        // }catch(err){
        //     console.log("Error", err);
        // }
    }

    useEffect(() => {
        getCategoryData().then((res) => setCategoryData(res))
        getAuthorData().then((res) => setAuthorData(res))
        getPublisherData().then((res) => setPublisherData(res))
        getGenreData().then((res) => setGenreData(res))
        getLanguageData().then((res) => setLanguageData(res))
        getClassData().then((res) => setClassData(res))
        getSubjectData().then((res) => setSubject(res))
    }, [])

    const removeCategory = async (arr, element) => {
        setCategory(arr.filter(chekout))
        function chekout(target) {
            let el = element;
            return target !== el;
        }
        // console.log('seclect author', author); 
    }
    const removeAuthor = async (arr, element) => {
        setAuthor(arr.filter(chekout))
        function chekout(target) {
            let el = element;
            return target !== el;
        }
        // console.log('seclect author', author); 
    }
    const removePublisher = async (arr, element) => {
        setPublisher(arr.filter(chekout))
        function chekout(target) {
            let el = element;
            return target !== el;
        }
        // console.log('seclect author', author); 
    }
    const removeGenre = async (arr, element) => {
        setGenre(arr.filter(chekout))
        function chekout(target) {
            let el = element;
            return target !== el;
        }
        // console.log('seclect author', author); 
    }
    const removeLanguage = async (arr, element) => {
        setLanguage(arr.filter(chekout))
        function chekout(target) {
            let el = element;
            return target !== el;
        }
        // console.log('seclect author', author); 
    }
    const removeclass = async (arr, element) => {
        setClasss(arr.filter(chekout))
        function chekout(target) {
            let el = element;
            return target !== el;
        }
        // console.log('seclect author', author); 
    }
    const removeSubject = async (arr, element) => {
        setSubject(arr.filter(chekout))
        function chekout(target) {
            let el = element;
            return target !== el;
        }
        // console.log('seclect author', author); 
    }

    return <div className="author-container">
        <h3 className='author-heading'>Books</h3>
        <div className='author-top'>
            <img src={homeIcon} alt='' />
            <p style={{ fontSize: '12px', color: '#777777' }}>Library Member, Add Member</p>
        </div>
        <div className="author-cont">
            <div className="author-btnFlex">
                <h3>Add Member</h3>
                <div className='display-flex'>
                    <button className="author-addbtn" onClick={handleSubmit}>Submit</button>
                    <button className="author-addbtn" onClick={() => navigate('/category')} style={{ backgroundColor: 'rgb(246,78,96)' }}>CANCEL</button>
                </div>
            </div>
            <hr />
            <div className="add-book-container">
                <div className='add-book-grid'>
                    <div>
                        <label>Member Name</label><br />
                        <input className='author-search-box addbook-search-box' type='text' name='book_title' placeholder='Member Name' />
                    </div>
                    <div>
                        <label>Email ID</label>
                        <Multiselect
                            options={categoryData}
                            displayValue="title"
                            // closeIcon="close"
                            onKeyPressFn={function noRefCheck() { }}
                            onRemove={(selectedList, selectedItem) => {
                                removeCategory(selectedList, selectedItem);
                            }}
                            onSearch={function noRefCheck() { }}
                            onSelect={(selectedList, selectedItem) => {
                                let catId = [...category, selectedItem.id]
                                setCategory(catId);

                                // console.log("author data", selectedItem);
                            }}
                            placeholder={"Select category"}
                        />
                    </div>
                    <div>
                        <label>Author</label>
                        <Multiselect
                            options={authorData}
                            displayValue="title"
                            // closeIcon="close"
                            onKeyPressFn={function noRefCheck() { }}
                            onRemove={(selectedList, selectedItem) => {
                                removeAuthor(selectedList, selectedItem);
                            }}
                            onSearch={function noRefCheck() { }}
                            onSelect={(selectedList, selectedItem) => {
                                let autId = [...author, selectedItem.id]
                                setAuthor(autId);

                                // console.log("author data", selectedItem);
                            }}
                            placeholder={"Select author"}
                        />
                    </div>
                    <div>
                        <label>Mobile Number</label>
                        <Multiselect
                            options={publisherData}
                            displayValue="title"
                            // closeIcon="close"
                            onKeyPressFn={function noRefCheck() { }}
                            onRemove={(selectedList, selectedItem) => {
                                removePublisher(selectedList, selectedItem);
                            }}
                            onSearch={function noRefCheck() { }}
                            onSelect={(selectedList, selectedItem) => {
                                let pubId = [...publisher, selectedItem._id]
                                setPublisher(pubId);

                                // console.log("author data", selectedItem);
                            }}
                            placeholder={"Select publisher"}
                        />
                    </div>
                    <div>
                        <label>Genre</label>
                        <Multiselect
                            options={genreData}
                            displayValue="title"
                            // closeIcon="close"
                            onKeyPressFn={function noRefCheck() { }}
                            onRemove={(selectedList, selectedItem) => {
                                removeGenre(selectedList, selectedItem);
                            }}
                            onSearch={function noRefCheck() { }}
                            onSelect={(selectedList, selectedItem) => {
                                let genreId = [...genre, selectedItem._id]
                                setGenre(genreId);

                                // console.log("author data", selectedItem);
                            }}
                            placeholder={"Select genre"}
                        />
                    </div>
                    <div>
                        <label>Language</label>
                        <Multiselect
                            options={languageData}
                            displayValue="title"
                            // closeIcon="close"
                            onKeyPressFn={function noRefCheck() { }}
                            onRemove={(selectedList, selectedItem) => {
                                removeLanguage(selectedList, selectedItem);
                            }}
                            onSearch={function noRefCheck() { }}
                            onSelect={(selectedList, selectedItem) => {
                                let lanId = [...language, selectedItem._id]
                                setLanguage(lanId);

                                // console.log("author data", selectedItem);
                            }}
                            placeholder={"Select language"}
                        />
                    </div>
                    <div>
                        <label>Class</label>
                        <Multiselect
                            options={classData}
                            displayValue="title"
                            // closeIcon="close"
                            onKeyPressFn={function noRefCheck() { }}
                            onRemove={(selectedList, selectedItem) => {
                                removeclass(selectedList, selectedItem);
                            }}
                            onSearch={function noRefCheck() { }}no
                            onSelect={(selectedList, selectedItem) => {
                                let classId = [...classs, selectedItem._id]
                                setClasss(classId);

                                // console.log("author data", selectedItem);
                            }}
                            placeholder={"Select class"}
                        />
                    </div>
                    <div>
                        <label>Subject</label>
                        <Multiselect
                            options={subjectData}
                            displayValue="title"
                            // closeIcon="close"
                            onKeyPressFn={function noRefCheck() { }}
                            onRemove={(selectedList, selectedItem) => {
                                removeSubject(selectedList, selectedItem);
                            }}
                            onSearch={function noRefCheck() { }}
                            onSelect={(selectedList, selectedItem) => {
                                let subId = [...subject, selectedItem._id]
                                setSubject(subId);

                                // console.log("author data", selectedItem);
                            }}
                            placeholder={"Select subject"}
                        />
                    </div>
                    <div>
                        <label>ISBN Number</label><br/>
                        <input className='author-search-box addbook-search-box' type='text' placeholder='Enter ISBN' />
                    
                    
                        <div>
                            <p>Member Profile Image</p>
                     
                     <label htmlFor="file-input" className='add-author-img-cont add-book-img-cont'>
                              <img src={customerBorder} alt="upload pic"  />
                              {/* <p style={{ marginTop: '0px', color: 'gray' }}><strong>dummy image</strong></p> */}
                           </label> 
                   </div>
                    </div>       

                </div>

                
                <div>
                    <div style={{ display: "flex" }}>
                 
                        <input
                            style={{ display: 'none', cursor: 'pointer' }}
                            // style={{ marginTop:'25px' }}
                            id="file-input"
                            type='file'
                        // onChange={handleUpload}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
}