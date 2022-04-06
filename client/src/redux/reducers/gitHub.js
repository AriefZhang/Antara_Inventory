const gitState = {
  data: [],
};

const reducer = (state = gitState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'git/fetchGit':
      return {
        ... state,
        data: payload
      }  
    
  
    default:
      return state
  }
};

export default reducer;
