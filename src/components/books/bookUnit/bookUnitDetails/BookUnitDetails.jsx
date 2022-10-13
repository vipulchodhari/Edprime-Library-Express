import { useEffect, useState } from "react";
import "../../../../styles/bookDetails.css";
import '../../../../styles/bookUnitDetails.css';
import { Link, useParams } from "react-router-dom";
import homeIcon from '../../../../assets/home.png';
import axios from "axios";
import { BookUnitDetailsTab } from "./BookUnitDetailsTab";
import { BookItemInsight } from "./BookItemInsight";
import { booksItemsUrl } from "../../../../utils/common";

export const BookUnitDetails = () => {
    const [toggle, setToggle] = useState(1);
    const [bookItemDetails, setBookItemDetails] = useState();
    const [book, setBook] = useState([]);
    const [bookCategory, setBookCategory] = useState([])
    const params = useParams();
    // const navigate = useNavigate();
    const BookKUnitId = params.id;
    console.log("params", BookKUnitId);

    const toggleTab = (index) => {
        setToggle(index);
    };

    const mydata = () => {
        axios.get(`${booksItemsUrl}/${BookKUnitId}`)
            .then((res) => {
                setBookItemDetails(res.data.data)
                setBook(res.data.book)
                setBookCategory(res.data.bookCategory)

                console.log("get DAta", res)
            });
    }
    console.log("edit books params", bookItemDetails);

    useEffect(() => {
        mydata()
    }, [])
    return <div className="author-container">
        <h3 className='author-heading'>Books</h3>
        <div className='author-top'>
            <img src={homeIcon} alt='' />
            <p style={{ fontSize: '12px', color: '#777777' }}>Library, Books, Books Unit</p>
        </div>
        <div className="author-cont">
            <div className="author-btnFlex">
                <h3>Book Unit Item Details</h3>
            </div>
            <hr />
            <div className="book-unit">
                <div className="book-unit-tab">
                <button
                    className={toggle === 1 ? "tabs active-tabs" : "tabs unit-tabs"}
                    onClick={() => toggleTab(1)}
                >
                    Basic Details
                </button>
                <button
                    className={toggle === 2 ? "tabs active-tabs" : "tabs unit-tabs"}
                    onClick={() => toggleTab(2)}
                >
                    Book Item insigts
                </button>
                </div>
            </div>
            <div className="book-details-tab-cont">
                <div className={toggle === 1 ? "content  active-content" : "content"}>
                    <BookUnitDetailsTab bookItemDetails={bookItemDetails} book={book} bookCategory={bookCategory} />
                </div>
                <div className={toggle === 2 ? "content  active-content" : "content"}>
                    <BookItemInsight />
                </div>
            </div>
        </div>
    </div>
}