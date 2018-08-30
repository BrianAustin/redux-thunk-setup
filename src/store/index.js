import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import reduxThunk from 'redux-thunk';

const middleware =[reduxThunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middleware)
    // other store enhancers if any
  )
);

export default store;

// 4. go to https://github.com/zalmoxisus/redux-devtools-extension step 1.3
  // and copy the first example and paste here
// 5. import 'rootReducer' and replace reducer with rootReducer in createStore
// 6. import redux thunk and apply to middleware
// 7. lastly export default store
