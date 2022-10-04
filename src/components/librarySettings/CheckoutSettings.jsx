// import '../../styles/librarySettings.css';

export const CheckoutSettings = () => {
    return <div>
        <div className="library-setting-heading">Checkout and Borrowings</div>
        <table className="library-setting-table-cont">
            <tbody>
                <tr>
                    <th style={{textAlign:'left'}} className='library-setting-th-td'>Busness Rules with respect to the roles in system</th>
                    <th style={{padding:'15px 30px'}}>Librarian</th>
                </tr>
                <tr>
                    <td>Do you want to enable Fine Charges for delay deposite</td>
                    <td>
                        <div>

                        </div>
                    {/* <td className="table-toggle-btn"> 
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label> */}
                    </td>
                    <td>
                     <div>

                     </div>
                    {/* <td className="table-toggle-btn"> 
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label> */}
                    
                    </td>
                </tr>
                <tr>
                    <td>Do you want to enable Book Reservations</td>
                    <td>
                    {/* <td className="table-toggle-btn">
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label> */}
                
                     
                    </td>
               
                <tr>
                    <td>Do you want to enable Book Scrapping feature</td>
                    <td className="table-toggle-btn">
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </td>
                    </tr>
                </tr>
                <tr>
                    <td>Do you want to enable Renew funtionality</td>
                    <td className="table-toggle-btn">
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>Do you want to enable Book Units Health Assessment</td>
                    <td className="table-toggle-btn">
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>Enable Bar Code/ QR Code</td>
                    <td className="table-toggle-btn">
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
}