import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import burgerReducer from './burger/burgerReducer'
import userReducer from './user/userReducer'

const rootReducer = combineReducers({
  cake : cakeReducer,
  iceCream : iceCreamReducer,
  burger : burgerReducer,
  user : userReducer
})

export default rootReducer