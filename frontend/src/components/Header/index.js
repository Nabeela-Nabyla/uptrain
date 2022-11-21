// == Import
import { Link } from 'react-router-dom';

import logo from 'src/assets/logo.svg';
import './header.scss';

// == Composant
function Header() {
  return (
    <div className="header_div">
      <header className="header">
        <Link className="header__logo" to="/triathlete">
          <img src={logo} alt="logo UpTrain" className="header__logo--picture" />
        </Link>
        <Link to="/triathlete">
          <h1 className="header__title">UpTrain</h1>
        </Link>
      </header>
    </div>
  );
}

// == Export
export default Header;
