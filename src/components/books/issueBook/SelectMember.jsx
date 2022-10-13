import Multiselect from "multiselect-react-dropdown";
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import PersonIcon from '@mui/icons-material/Person';
import { useEffect, useState } from "react";
import axios from "axios";
import { userUrl } from "../../../utils/common";

export const SelectMember = ({setMember, member}) => {
    const [memberData, setMemberData] = useState([]);
    const getData = async () => {
        await axios.get(userUrl)
            .then((res) => {
                setMemberData(res.data)
                // setItemCount(res?.data?.authorCount)
                // console.log(res)
            })
    }
    console.log("memberData", memberData);

    const removeMember = async(arr, element) => {
        setMember(arr.filter(chekout))
        function chekout(target) {
            let el = element;
            return target !== el;
        }
    }

    useEffect(() => {
        getData()
    }, [])
    return <div>
        <label>Select Member</label>
        <div className='issue-member-cont'>
            <Multiselect
                options={memberData}
                displayValue="name"
                // closeIcon="close"
                onKeyPressFn={function noRefCheck() { }}
                onRemove={(selectedList, selectedItem) => {
                    removeMember(selectedList, selectedItem);
                }}
                onSearch={function noRefCheck() { }}
                onSelect={(selectedList, selectedItem) => {
                    let memberId = [...member, selectedItem._id]
                    setMember(memberId);

                    // console.log("author data", selectedItem);
                }}
                placeholder={"Select Member"}
            />
            <div className="issue-member-scaner">
                <p style={{ fontSize: '10px' }}>SCAN MEMBER</p>
                <QrCodeScannerIcon className="scaner-icon" />
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