import { useEffect, useState } from "react";
import { BookDetailsTab } from "./BookDetailsTab"
import { BookStock } from "./BookStock";
import { BookTransaction } from "./BookTransaction";
import { BookUnitItem } from "./BookUnitItem";
import "../../../styles/bookDetails.css";
import { Link, useParams } from "react-router-dom";
import homeIcon from '../../../assets/home.png';
import axios from "axios";

export const BookDetails = () => {
    const [toggle, setToggle] = useState(1);
    const [bookDetails, setBookDetails] = useState();
    const [authorDetails, setAuthorDetails] = useState();
    const [genreDetails, setGenreDetails] = useState([]);
    const [classDetails, setClassDetails] = useState([]);
    const [subjectDetails, setSubjectDetails] = useState([]);
    const params = useParams();
    // const navigate = useNavigate();
    const BookId = params.id;
    console.log("params", BookId);

    const toggleTab = (index) => {
        setToggle(index);
    };

    const mydata = () => {
        axios.get(`http://192.100.100.111:1000/books/${BookId}`)
            .then((res) => {
                setBookDetails(res.data)
                setAuthorDetails(res.data.authors)
                setGenreDetails(res.data.genres)
                setClassDetails(res.data.edClasss)
                setSubjectDetails(res.data.subjects)

                console.log("get DAta", res.data)
            });
    }
    console.log("edit books params", bookDetails);

    useEffect(() => {
        mydata()
    }, [])
    return <div className="author-container">
        <h3 className='author-heading'>Books</h3>
        <div className='author-top'>
            <img src={homeIcon} alt='' />
            <p style={{ fontSize: '12px', color: '#777777' }}>Library, Books</p>
        </div>
        <div className="author-cont">
            <div className="author-btnFlex">
                <h3>Book Details</h3>
            </div>
            <hr />
            <div className="book-tab">
                <button
                    className={toggle === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                >
                    Basic Details
                </button>
                <button
                    className={toggle === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >
                    Stock insights
                </button>
                <button
                    className={toggle === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                >
                    Transactions
                </button>
                <button
                    className={toggle === 4 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(4)}
                >
                    Book Unit Item
                </button>
            </div>
            <div className="book-details-tab-cont">
                <div className={toggle === 1 ? "content  active-content" : "content"}>
                    <BookDetailsTab bookDetails={bookDetails} authorDetails={authorDetails} genreDetails={genreDetails} classDetails={classDetails} subjectDetails={subjectDetails} />
                </div>
                <div className={toggle === 2 ? "content  active-content" : "content"}>
                    <BookStock />
                </div>
                <div className={toggle === 3 ? "content  active-content" : "content"}>
                    <BookTransaction />
                </div>
                <div className={toggle === 4 ? "content  active-content" : "content"}>
                    <BookUnitItem />
                </div>
            </div>
        </div>
    </div>
}