export const BookStock = ({ totalAquired, availableBooks, issuedBooks, reservations, scrappedBooks}) => {
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
                    <p>{totalAquired}</p>
                    <p>{availableBooks}</p>
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
                    <p>{issuedBooks}</p>
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
                    <p>{scrappedBooks}</p>
                    <p>*****</p>
                </div>
            </div>
        </div>
    </div>
}