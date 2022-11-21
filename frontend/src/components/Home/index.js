// == Import
// npm
import { useDispatch, useSelector } from 'react-redux';

// locaux
import logo from 'src/assets/logo.svg';
import training from 'src/assets/Home/training.png';
import detail from 'src/assets/Home/detail.png';
import { togglePopup } from '../../actions/popup';
import Btn from '../Btn';
import Header from '../Header';
import Popup from '../Popup';
import './home.scss';
import WarningMessage from '../WarningMessage/WarningMessage';

// == Composant
function Home() {
  const dispatch = useDispatch();
  const isFormLogin = useSelector((state) => state.popup.isFormLogin);
  const isFormSignin = useSelector((state) => state.popup.isFormSignin);
  const warningMessage = useSelector((state) => state.user.warningMessage);

  const handleClickSignin = () => {
    dispatch(togglePopup('isFormSignin', isFormSignin));
  };
  const handleClickLogin = () => {
    dispatch(togglePopup('isFormLogin', isFormLogin));
  };
  return (
    <div className="home">
      {
        warningMessage.warning
        && <WarningMessage type={warningMessage.status} content={warningMessage.message} />
      }
      <Header />
      <div className="home__presentation">
        <div className="home__pictures">
          <img src={training} alt="screenshot de l'application : calendrier" className="pictures__training pictures" />
          <img src={detail} alt="screenshot de l'application : ajouter un entraînement" className="pictures__detail pictures" />
        </div>
        <div className="presentation">
          <p className="presentation__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
          <a href="#" className="presentation__link link">Voir plus</a>
        </div>
      </div>
      <div className="home__buttons">
        <Btn type="button" content="S'inscrire" onClick={handleClickSignin} />
        <Btn type="button" content="Se connecter" onClick={handleClickLogin} />
      </div>
      <footer className="home__footer">
        <a href="#"><img src={logo} alt="logo Facebook" className="footer__logo" /></a>
        <a href="#"><img src={logo} alt="logo Instagram" className="footer__logo" /></a>
        <a href="#"><img src={logo} alt="logo Twitter" className="footer__logo" /></a>
        <a href="#" className="footer__link link">Contact</a>
        <a href="#" className="footer__link link">Mentions légales</a>
      </footer>

      { isFormLogin && <Popup formLogin /> }
      { isFormSignin && <Popup formSignin /> }
    </div>
  );
}

// == Export
export default Home;
