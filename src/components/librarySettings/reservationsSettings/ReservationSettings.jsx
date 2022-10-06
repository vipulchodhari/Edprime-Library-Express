import homeIcon from '../../../assets/home.png';

export const  ReservationsSettings= () => {
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
                <div className="library-setting-heading">Reservations</div>
                <table className="library-setting-table-cont">
                    <tbody>
                        <tr>
                            <th style={{ textAlign: 'left' }} className='library-setting-th-td'>Busness Rules with respect to the roles in system</th>
                            <th style={{ padding: '0px 30px' }}>Teacher</th>
                            <th style={{ padding: '0px 30px' }}>Student</th>
                        </tr>
                        <tr>
                            <td>Maximum reservations by a member at a time</td>
                            <td className="table-toggle-btn checkout-align">
                                <input defaultValue={2} type='text' />
                            </td>
                            <td className="table-toggle-btn checkout-align">
                                <input defaultValue={1} type='text' />
                            </td>
                        </tr>
                        <tr>
                            <td>Maximum threshold time for reservations booking (in Hrs)</td>
                            <td className="table-toggle-btn checkout-align">
                                <input defaultValue={15} type='text' />
                            </td>
                            <td className="table-toggle-btn checkout-align">
                                <input defaultValue={10} type='text' />
                            </td>
                        </tr>
                        <tr>
                            <td>Send reminder before quashing reservations (in Hrs)</td>
                            <td className="table-toggle-btn checkout-align">
                                <input defaultValue={2} type='text' />
                            </td>
                            <td className="table-toggle-btn checkout-align">
                                <input defaultValue={2} type='text' />
                            </td>
                        </tr>
                        <tr>
                          
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>    
}