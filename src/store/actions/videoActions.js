export const fetchVideos = query => dispatch => {
  // here you would use Axios to fetch some data
  const response = [
    { id: `${query}-1` }, 
    { id: `${query}-2` }, 
    { id: `${query}-3` },
  ];

  dispatch({
    type: 'FETCH_VIDEOS',
    payload: response,
  });
}

// 16. create named actions and export them
// GOTO: /src/App.js