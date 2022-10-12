import Multiselect from "multiselect-react-dropdown";
import { useEffect, useState } from "react";

export const SelectMember = () => {
    const [bookData, setBookData] = useState([]);
    const [selectBook, setSelectBook] = useState([]);

    const removeBook = () => {

    }

    useEffect(() => {

    })
    return <div>
        <label>Issue a Book</label>
        <div>
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
                placeholder={"Select category"}
            />
        </div>
    </div>
}