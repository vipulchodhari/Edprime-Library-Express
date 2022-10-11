import homeIcon from '../../../assets/home.png';

export const MembershipPlan= () => {
    return <div className="author-container">
        <h3 className='author-heading'>Set Up</h3>
        <div className='author-top'>
            <img src={homeIcon} alt='' />
            <p style={{ fontSize: '12px', color: '#777777' }}>Library, Set Up, Library Setting</p>
        </div>
        <div className="author-cont">
            <div className="author-btnFlex">
                <h3>Library Setting</h3>
                <button className="author-addbtn">SAVE</button>
            </div>
            <hr />
            <div >
                <div className="library-setting-heading">Membership Plan</div>
                <table className="library-setting-table-cont">
                    <tbody>
                        <tr>
                            <th style={{ textAlign: 'left' }} className='library-setting-th-td'>Busness Rules with respect to the roles in system</th>
                            <th style={{ padding: '0px 30px' }}>Teacher</th>
                            <th style={{ padding: '0px 30px' }}>Student</th>
                        </tr>
                        <tr>
                            <td>Default Membership Plan</td>
                            <td className="table-toggle-btn checkout-align">
                                
                            </td>
                            <td className="table-toggle-btn checkout-align">
                               
                            </td>
                        </tr>
                        <tr>
                            <td>Enable Access for members</td>
                            <td className="table-toggle-btn checkout-align">
                               
                            </td>
                            <td className="table-toggle-btn checkout-align">
                               
                            </td>
                        </tr>
                        <tr>
                            <td>Generate Bar Code/QR Code for Books</td>
                            <td className="table-toggle-btn checkout-align">
                               
                            </td>
                            <td className="table-toggle-btn checkout-align">
                                
                            </td>
                        </tr>
                        <tr>
                            <td>Generate Bar Code/QR Code for Members</td>
                            <td className="table-toggle-btn checkout-align">
                               
                            </td>
                            <td className="table-toggle-btn checkout-align">
                                
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>    
}