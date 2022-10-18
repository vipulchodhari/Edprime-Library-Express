export const BookStock = ({ bookDetails, reservations }) => {
    console.log('bookDetails in stock', bookDetails);
    return <div>
        <div className="book-stock-tab">
            <div className="book-details-grid">
                <div>
                    <p>Total Acquired</p>
                    <p>No of available uints</p>
                </div>
                <div className="book-tab-colon">
                    <p>:</p>
                    <p>:</p>
                </div>
                <div>
                    <p>{bookDetails?.totalBookItem}</p>
                    <p>{bookDetails?.totalAvailableBookItem}</p>
                </div>
            </div>
            <div className="book-details-grid">
                <div>
                    <p>Number of Current Borrowings</p>
                    <p>No of Reservations</p>
                </div>
                <div className="book-tab-colon">
                    <p>:</p>
                    <p>:</p>
                </div>
                <div>
                    <p>{bookDetails?.totalIssueBookItem}</p>
                    <p>{reservations}</p>
                </div>
            </div>
            <div className="book-details-grid">
                <div>
                    <p>No of Scraaped Books items</p>
                    <p>Book rating </p>
                </div>
                <div className="book-tab-colon">
                    <p>:</p>
                    <p>:</p>
                </div>
                <div>
                    <p>{bookDetails?.totalScrappedBookItem}</p>
                    <p>*****</p>
                </div>
            </div>
        </div>
    </div>
}