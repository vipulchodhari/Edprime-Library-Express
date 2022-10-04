import homeIcon from '../../assets/home.png';
import { GeneralSetting } from './GeneralSetting';
import '../../styles/librarySettings.css';
import { CheckoutSettings } from './CheckoutSettings';
import { Reservations } from './Reservations';

export const LibrarySettings = () => {
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
            <GeneralSetting/>
            
        </div>
    </div>
</div>
}