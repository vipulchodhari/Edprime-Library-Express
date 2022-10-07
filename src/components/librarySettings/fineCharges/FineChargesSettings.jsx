import homeIcon from '../../../assets/home.png';

export const FineChargesSettings = () => {
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
            <div className="library-setting-heading">Delayed Deposite Fine Charges</div>
            <table className="library-setting-table-cont">
                <tbody>
                    <tr>
                        <th style={{ textAlign: 'left' }} className='library-setting-th-td'>Busness Rules with respect to the roles in system</th>
                        <th style={{ padding: '0px 30px' }}>Teacher</th>
                        <th style={{ padding: '0px 30px' }}>Student</th>
                    </tr>
                    <tr>
                        <td>Per day Fix Charges</td>
                        <td className="table-toggle-btn checkout-align">
                            <input defaultValue={10+'/='} type='text' />
                        </td>
                        <td className="table-toggle-btn checkout-align">
                            <input defaultValue={10+'/='} type='text' />
                        </td>
                    </tr>
                    <tr>
                        <td>Maximum Fine Charges</td>
                        <td className="table-toggle-btn checkout-align">
                            <input defaultValue={300+'/='} type='text' />
                        </td>
                        <td className="table-toggle-btn checkout-align">
                            <input defaultValue={300+'/='} type='text' />
                        </td>
                    </tr>
                    <tr>
                        <td>Fine charges waiver Allowed</td>
                        <td className="table-toggle-btn">
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                        </td>
                        <td className="table-toggle-btn">
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>Maximum Waiver Allowed</td>
                        <td className="table-toggle-btn checkout-align">
                            <input defaultValue={200+'/='} type='text' />
                        </td>
                        <td className="table-toggle-btn checkout-align">
                            <input defaultValue={200+'/='} type='text' />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
}