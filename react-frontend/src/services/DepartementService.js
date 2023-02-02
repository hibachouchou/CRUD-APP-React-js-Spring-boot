import axios from 'axios';

const DEPARTEMENT_API_BASE_URL = "http://localhost:8089/api/v1/departements";

class DepartementService {

    getDepartements(){
        return axios.get(DEPARTEMENT_API_BASE_URL);
    }

    createDepartement(departement){
        return axios.post(DEPARTEMENT_API_BASE_URL, departement);
    }

    getDepartementById(departementId){
        return axios.get(DEPARTEMENT_API_BASE_URL + '/' + departementId);
    }

    updateDepartement(departement, departementId){
        return axios.put(DEPARTEMENT_API_BASE_URL + '/' + departementId, departement);
    }

    deleteDepartement(departementId){
        return axios.delete(DEPARTEMENT_API_BASE_URL + '/' + departementId);
    }
}

export default new DepartementService()