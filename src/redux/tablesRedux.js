import axios from 'axios'

//selectors

// actions
const createActionName = actionName => `app/tables/${actionName}`;

export const FETCH_TABLES_SUCCESS = createActionName('FETCH_TABLES_SUCCESS');

// action creators
export const fetchTablesSuccess = tables => ({
  type: FETCH_TABLES_SUCCESS,
  payload: tables,
});

export const fetchTables = () => dispatch => {
  axios.get('/api/tables')
    .then(response => {
      dispatch(fetchTablesSuccess(response.data.tables));
    })
    .catch(error => {
      console.error(error);
    });
};

const initialState = {
  tables: [],
};

const tablesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TABLES_SUCCESS:
      return {
        ...state,
        tables: action.payload,
      };
    default:
      return state;
  };
};

export default tablesReducer;