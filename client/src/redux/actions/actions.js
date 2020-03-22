import { loadObservations, saveObservation } from './observations';
export const SAVING = 'SAVING';
export const IDLE = 'IDLE';
export const LOADING = 'LOADING';
export const OBSERVATIONS_LOADED = 'OBSERVATIONS_LOADED';
export const SET_LOGIN_LOADING='SET_LOGIN_LOADING';

const actions = {
  loadObservations,
  saveObservation,
};

export function setLoginLoading(loginLoading) {
    return {
        type: SET_LOGIN_LOADING,
        loginLoading,
    }
}

export default actions;
