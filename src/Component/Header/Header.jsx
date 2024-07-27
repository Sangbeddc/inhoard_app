import React, {useState} from 'react';
import './Header.css';
import companyLogo from '../../img/assassinsLogo.png';
import AccountInfo from './AccountInfo';
import UserInfo from './UserInfo';

const Header = () => {
  const [logoClick, setLogoClick] = useState(false);

  const handleLogoClick = () => {
    setLogoClick(!logoClick);
  };

  return (
    <nav className='header-nav'>
      <div className='header-logo'>
        <img src={companyLogo}  onClick={handleLogoClick} style={{maxHeight: '7vh'}}/>
      </div>
      <div className='header-account-info'>
        <AccountInfo />
      </div>
      <div className='header-user-info'>
        <UserInfo />
      </div>
    </nav>
  );
}

export default Header;