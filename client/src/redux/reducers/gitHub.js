const gitState = {
  data: [],
  repo: [],
  isLoading: true,
};

const reducer = (state = gitState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'git/fetchGit':
      return {
        ...state,
        data: payload
      }  
    case 'repo/fetchGit':
      return {
        ...state,
        data: payload
      }  
    case 'loading/fetchGit':
      return {
        ...state,
        isLoading: payload
      }  
  
    default:
      return state
  }
};

export default reducer;
