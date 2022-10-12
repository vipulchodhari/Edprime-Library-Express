import { useState } from "react";

export const BookUnitDetailsTab = ({ bookItemDetails, book, bookCategory }) => {
   console.log("receive details", bookItemDetails);
   console.log("receive basic book", book);
   console.log("receive book category", bookCategory);
    return <div>
    <div className="book-stock-tab">
        <div className="book-details-grid">
            <div>
                <p>Title</p>
                <p>LLI</p>
                <p>Pages</p>
            </div>
            <div className="book-tab-colon">
                <p>:</p>
                <p>:</p>
                <p>:</p>
            </div>
            <div>
                <p>{book.book_title}</p>
                <p>Author Name</p>
                <p>20</p>
            </div>
        </div>
        <div className="book-details-grid">
            <div>
                <p>Category</p>
                <p>Health Codition</p>
                <p>Current borrower</p>
            </div>
            <div className="book-tab-colon">
                <p>:</p>
                <p>:</p>
                <p>:</p>
            </div>
            <div>
                <p>{bookCategory.title}</p>
                <p>{bookItemDetails?.book_health}</p>
                <p>Current borrower</p>
            </div>
        </div>
        <div className="book-details-grid">
            <div>
                <p>Book Unique</p>
                <p>Publishing Year</p>
                <p>No. of Days since issued on</p>
            </div>
            <div className="book-tab-colon">
                <p>:</p>
                <p>:</p>
                <p>:</p>
            </div>
            <div>
                <p>{bookItemDetails?.bookId.slice(-4)}</p>
                <p>{bookItemDetails?.publishing_year}</p>
                <p>STD123</p>
            </div>
        </div>
    </div>
</div>
}