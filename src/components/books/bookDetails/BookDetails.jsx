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
    // const [totalAquired, setTotalAquired] = useState();
    // const [availableBooks, setAvailableBooks] = useState();
    // const [issuedBooks, setIssuedBooks] = useState();
    const [reservations, setReservations] = useState();
    // const [scrappedBooks, setScrappedBooks] = useState();
    const params = useParams();
    // const navigate = useNavigate();
    const BookId = params.id;
    console.log("params", BookId);

    const toggleTab = (index) => {
        setToggle(index);
    };

    const mydata = () => {
        axios.get(`http://192.100.100.54:3000/books/${BookId}`)
            .then((res) => {
                setBookDetails(res.data.fetchData)
                // setTotalAquired(res.data.totalAquired)
                // setAvailableBooks(res.data.availableBooks)
                // setIssuedBooks(res.data.issuesBooks)
                setReservations(res.data.totalReservation)
                // setScrappedBooks(res.data.totalScrappedBooks)

                console.log("get DAta", res.data)
            });
    }
    console.log("bookDetails", bookDetails);

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
                    <BookDetailsTab bookDetails={bookDetails} />
                </div>
                <div className={toggle === 2 ? "content  active-content" : "content"}>
                    <BookStock reservations={reservations} bookDetails={bookDetails}/>
                </div>
                <div className={toggle === 3 ? "content  active-content" : "content"}>
                    <BookTransaction BookId={BookId}/>
                </div>
                <div className={toggle === 4 ? "content  active-content" : "content"}>
                    <BookUnitItem BookId={BookId}/>
                </div>
            </div>
        </div>
    </div>
}