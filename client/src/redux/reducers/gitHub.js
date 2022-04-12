const gitState = {
  data: [],
  repo: [],
  commit: [],
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
        repo: payload
      }  
    case 'loading/fetchGit':
      return {
        ...state,
        isLoading: payload
      }  
    case 'commit/fetchGit':
      return {
        ...state,
        commit: payload
      }
  
    default:
      return state
  }
};

export default reducer;
