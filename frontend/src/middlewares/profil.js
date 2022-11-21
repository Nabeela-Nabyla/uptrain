import axios from 'axios';
import url from 'src/url/';
import {
  getInfosProfil,
  DELETE_INFOS_PROFIL,
  EDIT_INFOS_PROFIL,
} from '../actions/profil';
import { GET_DATAS } from '../actions/trainings';

const profil = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_DATAS: {
      // console.log('on est dans les datas');
      const { user: { triathleteId, token } } = store.getState();

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      axios.get(`${url}triathletes/${triathleteId}`, config)

        .then((response) => {
          console.log(response.data);
          store.dispatch(getInfosProfil(
            response.data.id,
            response.data.palmares,
            response.data.weight,
            response.data.size,
            response.data.user.id,
            response.data.user.email,
            response.data.user.password,
            response.data.user.profile,
            response.data.user.lastname,
            response.data.user.firstname,
            response.data.user.description,
            response.data.user.picture,
            response.data.user.gender,
            response.data.user.city,
            response.data.user.date_birth,
          ));
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }

    case EDIT_INFOS_PROFIL: {
      // console.log('on va edit');
      const { user: { token } } = store.getState();
      const { profil: { infosProfil } } = store.getState();

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const bodyParameter = {
        id: parseInt(infosProfil.idUser, 10),
        email: infosProfil.email,
        profile: parseInt(infosProfil.profile, 10),
        lastname: infosProfil.lastname,
        firstname: infosProfil.firstname,
        description: infosProfil.description,
        gender: parseInt(infosProfil.gender, 10),
        city: infosProfil.city,
        date_birth: infosProfil.date_birth,
        triathlete: {
          id: parseInt(infosProfil.idTri, 10),
          palmares: infosProfil.palmares,
          weight: parseInt(infosProfil.weight, 10),
          size: parseInt(infosProfil.size, 10),
        },
        collaborations: [],
      };

      console.log(bodyParameter);

      axios.patch(`${url}triathletes/${infosProfil.idTri}`, bodyParameter, config)
        .then((response) => {
          console.log(response.data);
          // window.location.href = '/';
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }

    case DELETE_INFOS_PROFIL: {
      // console.log('on veut effacer');
      const { user: { token } } = store.getState();
      const { profil: { infosProfil } } = store.getState();

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      axios.delete(`${url}triathletes/${infosProfil.idTri}`, config)
        .then((response) => {
          console.log(response.data);
          alert('Le profil du triathlète a été supprimé.');
          window.location.href = '/';
        })
        .catch((error) => {
          console.log(error.response.data);
        });

      next(action);
      break;
    }
    default:
      next(action);
      break;
  }
};

export default profil;
