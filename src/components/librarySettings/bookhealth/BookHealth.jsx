import homeIcon from '../../../assets/home.png';

export const BookHealth = () => {
    return <div className="author-container">
        <h3 className='author-heading'>Set Up</h3>
        <div className='author-top'>
            <img src={homeIcon} alt='' />
            <p style={{ fontSize: '12px', color: '#777777' }}>Library, Set Up, Library Setting</p>
        </div>
        <div className="author-cont">
            <div className="author-btnFlex">
                <h3>Library Setting</h3>
            </div>
            <hr />
            <div >
                <div className="library-setting-heading">Book Health Charges</div>
                <table className="library-setting-table-cont">
                    <tbody>
                        <tr>
                            <th style={{ textAlign: 'left' }} className='library-setting-th-td'>Busness Rules with respect to the roles in system</th>
                            <th style={{ padding: '0px 30px' }}>Teacher</th>
                            <th style={{ padding: '0px 30px' }}>Student</th>
                            
                        </tr>
                        <tr>
                            <td>Enable bad health Charges imposition at the time of return</td>
                            <td className="table-toggle-btn checkout-align">
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider round"></span>
                                </label>
                            </td>
                            <td className="table-toggle-btn checkout-align">
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider round"></span>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>Enable Book shift to scrap at the time of deposition</td>
                            <td className="table-toggle-btn checkout-align">
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider round"></span>
                                </label>
                            </td>
                            <td className="table-toggle-btn checkout-align">
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider round"></span>
                                </label>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}