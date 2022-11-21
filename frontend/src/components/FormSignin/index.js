// == Import
// npm
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// locaux
import { togglePopup } from 'src/actions/popup';
import { signin } from '../../actions/user';
import Btn from '../Btn';
import FieldInput from '../FieldInput';
import PopupHeader from '../PopupHeader';
import './formSignin.scss';
import WarningMessage from '../WarningMessage/WarningMessage';

// == Composant
function FormSignin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isFormSignin = useSelector((state) => state.popup.isFormSignin);
  const password = useSelector((state) => state.user.password);
  const checkedPassword = useSelector((state) => state.user.checkedPassword);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signin());
    navigate('/');
    dispatch(togglePopup('isFormSignin', isFormSignin));
  };

  const handleClickClose = () => {
    dispatch(togglePopup('isFormSignin', isFormSignin));
  };
  return (
    <form action="" method="post" className="home__popup" onSubmit={handleSubmit}>
      <PopupHeader title="Inscription" onClick={handleClickClose} />
      <div className="popup__form">
        <FieldInput
          type="text"
          name="firstname"
          content="Prénom"
          isRequired
        />
        <FieldInput
          type="text"
          name="lastname"
          content="Nom"
          isRequired
        />
        <FieldInput
          type="email"
          name="email"
          content="E-mail"
          isRequired
        />
        <FieldInput
          type="password"
          name="password"
          content="Mot de passe"
          isRequired
        />
        <FieldInput
          type="password"
          name="checkedPassword"
          content="Confirmez votre mot de passe"
          isRequired
        />
      </div>
      {checkedPassword !== undefined && checkedPassword === password && <WarningMessage type="OK" content="Vos deux mots de passe sont identiques." />}
      {checkedPassword !== undefined && checkedPassword !== password && <WarningMessage type="error" content="Vos deux mots de passe sont différents." />}
      <div className="popup__button">
        <Btn type="submit" content="S'inscrire" />
      </div>
    </form>
  );
}

// == Export
export default FormSignin;
