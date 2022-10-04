import homeIcon from '../../../assets/home.png';

export const CheckoutBorrowing = () => {
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
                <div className="library-setting-heading">General Setting for Library Module</div>
                <table className="library-setting-table-cont">
                    <tbody>
                        <tr>
                            <th style={{ textAlign: 'left' }} className='library-setting-th-td'>Busness Rules with respect to the roles in system</th>
                            <th style={{ padding: '0px 30px' }}>Teacher</th>
                            <th style={{ padding: '0px 30px' }}>Student</th>
                        </tr>
                        <tr>
                            <td>Maximum no. of Books checkout by member</td>
                            <td className="table-toggle-btn checkout-align">
                                <input value={2} type='text' />
                            </td>
                            <td className="table-toggle-btn checkout-align">
                                <input value={1} type='text' />
                            </td>
                        </tr>
                        <tr>
                            <td>Maximum allowed days to borrow by Member (in days)</td>
                            <td className="table-toggle-btn checkout-align">
                                <input value={15} type='text' />
                            </td>
                            <td className="table-toggle-btn checkout-align">
                                <input value={10} type='text' />
                            </td>
                        </tr>
                        <tr>
                            <td>send reminder to borrower before due date(in days)</td>
                            <td className="table-toggle-btn checkout-align">
                                <input value={2} type='text' />
                            </td>
                            <td className="table-toggle-btn checkout-align">
                                <input value={2} type='text' />
                            </td>
                        </tr>
                        <tr>
                            <td>send reminder to borrower for overdue</td>
                            <td className="table-toggle-btn checkout-align">
                                <input value={'Everyday'} type='text' />
                            </td>
                            <td className="table-toggle-btn checkout-align">
                                <input value={'Every Hour'} type='text' />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>    
}