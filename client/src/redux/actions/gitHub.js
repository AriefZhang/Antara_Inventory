import git from "../../API/gitHub"

export function setGit(payload) {
  return {
    type: 'git/fetchGit',
    payload
  }
}

export function setGitRepo(payload) {
  return {
    type: 'repo/fetchGit',
    payload
  }
}

export function setLoading(payload) {
  return {
    type: 'loading/fetchGit',
    payload
  }
}

export function checkUser(payload) {
  return dispatch => {
    git.get(payload)
    .then(({data}) => dispatch(setGit(data)))
    .catch(err => console.log(err))
    .finally(() => dispatch(setLoading(false)))
  }
}