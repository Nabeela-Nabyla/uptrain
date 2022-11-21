// == Import
// npm
import PropTypesLib from 'prop-types';
// locaux
import dateYYYYMMDD from 'src/functions/dateYYYYMMDD';
import dateFormat from '../../functions/dateFormat';
import './profilInfos.scss';

// == Composant
function ProfilInfos({
  weight,
  size,
  picture,
  firstname,
  lastname,
  email,
  city,
  gender,
  // eslint-disable-next-line camelcase
  date_birth,
}) {
  function AgeCalcul() {
    const date = dateFormat(date_birth);
    const today = new Date();
    let age = today.getFullYear() - date.getFullYear();
    const m = today.getMonth() - date.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
      age -= 1;
    }
    return age;
  }

  return (
    <div className="profil__infos">
      <div className="description">
        <div className="description__picture">
          <img src={picture} alt="Profil" className="picture--avatar-tri" />
        </div>
        <h2 className="description__title">{firstname} {lastname}</h2>
      </div>
      <p className="description__info">{email}</p>
      <p className="description__info">{city}</p>
      <p className="description__info">{(gender === 1 && 'Homme') || (gender === 2 && 'Femme') || (gender === 9 && 'Autre')}</p>
      <p className="description__info">{AgeCalcul()} ans</p>
      <p className="description__info">{size} cm</p>
      <p className="description__info">{weight} kg</p>
    </div>
  );
}

ProfilInfos.propTypes = {
  weight: PropTypesLib.number.isRequired,
  size: PropTypesLib.number.isRequired,
  picture: PropTypesLib.string.isRequired,
  firstname: PropTypesLib.string.isRequired,
  lastname: PropTypesLib.string.isRequired,
  email: PropTypesLib.string.isRequired,
  city: PropTypesLib.string.isRequired,
  gender: PropTypesLib.number.isRequired,
  date_birth: PropTypesLib.string.isRequired,
};

// == Export
export default ProfilInfos;
