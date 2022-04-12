import git from "../../API/gitHub";

export function setGit(payload) {
  return {
    type: "git/fetchGit",
    payload,
  };
}

export function setGitRepo(payload) {
  return {
    type: "repo/fetchGit",
    payload,
  };
}

export function setGitRepoCommit(payload) {
  return {
    type: "commit/fetchGit",
    payload,
  };
}

export function setLoading(payload) {
  return {
    type: "loading/fetchGit",
    payload,
  };
}

export function checkUser(payload) {
  return (dispatch) => {
    git
      .get(payload)
      .then(({ data }) => {
        dispatch(setGit(data));
        return git.get(payload + "/repos");
      })
      .then(({ data }) => dispatch(setGitRepo(data)))
      .catch((err) => console.log(err))
      .finally(() => dispatch(setLoading(false)));
  };
}

export function checkUserCommit(payload) {
  return (dispatch) => {
    git
      .get(payload + '/commits')
      .then(({ data }) => {
        dispatch(setGit(data));
      })
      .catch((err) => console.log(err))
      .finally(() => dispatch(setLoading(false)));
  };
}
