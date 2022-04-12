import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkUser } from "../redux/actions/gitHub";
import { useParams } from "react-router-dom";

export default function User() {
  const dispatch = useDispatch();
  const { user } = useParams();

  const { data, repo, isLoading } = useSelector((state) => state.gitReducer);

  useEffect(() => {
    dispatch(checkUser(user));
  }, [dispatch, user]);

  if (isLoading) {
    return (
      <div
        className="container"
        style={{
          margin: "auto",
          width: "100vh",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>LOADING ...</h1>
      </div>
    );
  }

  return (
    <div className="md:container flex flex-row md:flex-col  h-screen grid grid-cols-3 m-auto gap-4">
      <div className="p-5 flex flex-col my-10 m-auto drop-shadow-2xl box-border w-full h-5/6 items-center ">
        <div className="pt-5 flex flex-col items-center bg-white rounded-xl">
          <img
            src={data.avatar_url}
            className="rounded-xl p-2 drop-shadow-xl"
            alt=""
          />
        </div>
        <div className="w-5/6 h-96 bg-gray-700 flex flex-col rounded-bl-lg rounded-br-lg">
          <h1 className="mx-5 mt-5 grid lg:text-2xl text-xl text-white">
            {data.name}
          </h1>
          <h1 className="mx-5 grid lg:text-xl text-md text-white">
            {data.login}
          </h1>
          <div className="flex flex-row justify-center grid grid-cols-2">
            <div className="flex- flex-col mt-10">
              <h1 className="text-gray-400">followers</h1>
              <h1 className="text-white lg:text-4xl">{data.followers}</h1>
            </div>
            <div className="flex- flex-col mt-10">
              <h1 className="text-gray-400">following</h1>
              <h1 className="text-white lg:text-4xl">{data.following}</h1>
            </div>
          </div>
          <div className="flex flex-row justify-center grid grid-cols-3 items-center mb-5">
            <div className="flex flex-col mt-10 w-3/5 items-self m-auto">
              <a href={data.html_url} target="_blank" rel="noreferrer">
                <img
                  src="https://joshuapenalba.files.wordpress.com/2014/12/github-icon.png?w=640"
                  alt=""
                />
              </a>
            </div>
            <div className="flex flex-col mt-10 w-2/5 items-self m-auto">
              <a href={data.blog} target="_blank" rel="noreferrer">
                <img
                  src="https://icon-library.com/images/web-icon-white/web-icon-white-3.jpg"
                  alt=""
                  className="mt-3"
                />
              </a>
            </div>
            <div className="flex flex-col mt-10 w-2/5 items-self m-auto">
              <a href={data.twitter_username} target="_blank" rel="noreferrer">
                <img
                  src="https://freepngimg.com/download/uber/75997-uber-city-lyft-twitter-ridesharing-black-york.png"
                  alt=""
                  className="mt-3"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 flex flex-col h-5/6 my-10 col-span-2 overflow-auto hover:overflow-y-scroll">
        <div className="flex flex-row justify-start grid grid-cols-2 w-full h-5/6 gap-4 drop-shadow-2xl ">
          {repo
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .map((rep, i) => {
              return (
                <a href="#" >
                  <div
                    key={i}
                    className="flex flex-cols justify-start h-36 min-h-full w-full bg-slate-100 hover:bg-gray-200 rounded-md relative overflow-hidden"
                  >
                    <div className="flex-col mx-4 text-left">
                      <h3 className="text-lg mt-2 font-extrabold">
                        {rep.name}
                      </h3>
                      <h3>{rep.description}</h3>
                    </div>
                    <hr />
                    <div className="flex items-center h-8 bg-orange-500 absolute px-3 right-0 top-0 rounded-bl-lg">
                      <h1 className="text-white">{rep.language}</h1>
                    </div>
                    <div className="bg-white w-full h-2/6 absolute bottom-0 left-0" />
                    <div
                      className="absolute flex gap-2"
                      style={{ left: 10, bottom: 5 }}
                    >
                      <div className="flex">
                        <img
                          src="https://www.kindpng.com/picc/m/208-2082297_code-icon-free-download-github-fork-icon-png.png"
                          alt=""
                          style={{ height: "24px" }}
                        />
                        <h3 className="ml-3 text-xl">{rep.forks}</h3>
                      </div>
                      <div className="flex ml-3">
                        <img
                          src="https://www.pngkit.com/png/full/178-1787404_github-watch-icon-svg.png"
                          alt=""
                          style={{ height: "20px" }}
                        />
                        <h3 className="ml-3 text-xl">{rep.forks}</h3>
                      </div>
                      <div className="flex ml-3">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtmK0pjWfQNVa-XaK31S8D7N7Ps2GpBq3ziX9amYy1XlyH-UkIWlyz0Md1aNLogC4Sleo&usqp=CAU"
                          alt=""
                          style={{ height: "24px" }}
                        />
                        <h3 className="ml-3 text-xl">{rep.forks}</h3>
                      </div>
                    </div>
                    <div
                      className="absolute flex gap-2"
                      style={{ right: 10, bottom: 10 }}
                    >
                      <h3 className="bg-lime-700 px-4 rounded-lg text-white">
                        {rep.default_branch}
                      </h3>
                      <h3 className="bg-yellow-700 px-4 rounded-lg text-white">
                        {rep.visibility}
                      </h3>
                    </div>
                  </div>
                </a>
              );
            })}
        </div>
      </div>
    </div>
  );
}
