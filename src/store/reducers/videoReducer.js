const initialState = {
  all: [],
  selected: {}
}

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case 'FETCH_VIDEOS':
      return { ...state, all: payload };
    case 'SELECT_VIDEO':
      return { ...state, selected: state.all[payload] };
    default:
      return state;
  }
};

// 10. create initialState for reducer and set up action switch case.
// GOTO: /src/App.js
