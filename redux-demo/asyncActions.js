// create store
const redux = require('redux')
const createStore = redux.createStore
// create axios
const axios = require('axios')
//create middleware
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default

// initial state
const initialState = {
  loading : false,
  users : [],
  error : ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

// create action creators
const fetchUsersRequest = () => {
  return {
    type : FETCH_USERS_REQUEST,

  }
}
const fetchUsersSuccess = (users) => {
  return {
    type : FETCH_USERS_SUCCESS,
    payload : users
  }
}
const fetchUsersFailure = (errors) => {
  return {
    type : FETCH_USERS_FAILURE,
    payload : errors
  }
}

// create reducers
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USERS_REQUEST :
      return {
        ...state,
        loading : true
      }
    case FETCH_USERS_SUCCESS : 
      return {
        ...state,
        loading : false,
        users : action.payload,
        error : ''
      }
    case FETCH_USERS_FAILURE : 
      return {
        ...state,
        loading : false,
        users : [],
        error : action.payload
      }
  }
}

const fetchUsers = () => {
  return function(dispatch) {
    dispatch(fetchUsersRequest())
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((result) => {
      const users = result.data.map(user => user.id)
      dispatch(fetchUsersSuccess(users))
    }).catch((err) => {
      dispatch(fetchUsersFailure(err.message))
    });
  }
}

// initial store
const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => {console.log(store.getState())})

store.dispatch(fetchUsers()) // fetchUsers menerima fungsi dispatch untuk digunakan pada fungsi fetchUsers
