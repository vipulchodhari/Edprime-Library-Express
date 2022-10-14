import Multiselect from "multiselect-react-dropdown";
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import PersonIcon from '@mui/icons-material/Person';
import { useEffect, useState } from "react";

export const SelectBook = () => {
    const [bookData, setBookData] = useState([]);
    const [selectBook, setSelectBook] = useState([]);

    const removeBook = () => {

    }

    useEffect(() => {

    })
    return <div>
        <label>Select a Book</label>
        <div className='issue-member-cont'>
            <Multiselect
                options={bookData}
                displayValue="title"
                // closeIcon="close"
                onKeyPressFn={function noRefCheck() { }}
                onRemove={(selectedList, selectedItem) => {
                    removeBook(selectedList, selectedItem);
                }}
                onSearch={function noRefCheck() { }}
                onSelect={(selectedList, selectedItem) => {
                    let bookId = [...selectBook, selectedItem.id]
                    setSelectBook(bookId);

                    // console.log("author data", selectedItem);
                }}
                placeholder={"Select a Book"}
            />
            <div className="issue-member-scaner issue-book-scaner">
                <p style={{fontSize:'10px'}}>SCAN BOOK</p>
                <QrCodeScannerIcon className="scaner-icon"/>
            </div>
        </div>
        <div className="issue-member-details">
            <div className="issue-member-heading">
                <PersonIcon className="issue-member-icon"/>
                <p>Member Details</p>
            </div>
            <div className="issue-member-containt">
                <div>
                    <p>Name :</p>
                    <p>No. of Books</p>
                    <p>No. of Books</p>
                    <p>Member Since</p>
                </div>
                <div>
                    <p>Vishal singh</p>
                    <p>14</p>
                    <p>14</p>
                    <p>2012</p>
                </div>
            </div>
        </div>
    </div>
}