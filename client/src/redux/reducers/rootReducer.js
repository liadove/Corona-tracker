import { OBSERVATIONS_LOADED } from '../actions/actions';
import Observation from '../../models/observation';
import { SET_LOGIN_LOADING } from '../actions/actions';

// initial state of the Redux store
const initialState = {
  userId: null,
  errors: [],
  dataSample: [
    new Observation({ physical: { temperature: 80 } }),
    new Observation({ physical: { temperature: 70 } }),
    new Observation({ physical: { temperature: 56 } }),
    new Observation({ physical: { temperature: 90 } }),
    new Observation({ physical: { temperature: 55 } }),
  ],
};
loginLoading: false,
  dataSample: {
  labels: [
    "2020-02-28",
    "2020-03-2",
    "2020-03-4",
    "2020-03-5",
    "2020-03-9"
  ],
    values: [
      80,
      70,
      56,
      90,
      55],
  }
}

// Updating store based on type of the action
const rootReducer = (oldState = initialState, action) => {
  switch (action.type) {
    case OBSERVATIONS_LOADED:
      return {
        ...oldState,
        dataSample: action.observations,
      };
    case 'LOAD_DATA':
      return {
        ...oldState,
        dataSample: action.dataSample
      }
    case SET_LOGIN_LOADING:
      return {
        ...oldState,
        loginLoading: action.loginLoading
      }
    default:
      return oldState;
  }
}

export default rootReducer;
