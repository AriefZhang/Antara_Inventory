import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkUser } from "../redux/actions/gitHub";
import { useParams } from "react-router-dom";

export default function User() {
  const dispatch = useDispatch();
  const { user } = useParams();

  const { data, isLoading } = useSelector((state) => state.gitReducer);

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
    <div className="md:container flex flex-row md:flex-col justify-center h-screen grid grid-cols-3 m-auto gap-4">
      <div className="p-5 flex flex-col my-10 m-auto drop-shadow-xl box-border w-full h-5/6 items-center">
        <div className="pt-5 flex flex-col items-center bg-white rounded-xl">
          <img
            src={data.avatar_url}
            className="rounded-xl p-2 drop-shadow-xl"
            alt=""
          />
        </div>
        <div className="w-5/6 h-96 bg-black flex flex-col" style={{}}>
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
      <div className="p-5 flex bg-orange-500 my-10 col-span-2">
        <div className="grid grid-cols-2 m-auto w-full gap-4">
          <div className="h-36 w-full bg-white">
            <h1>INI TEST</h1>
          </div>
          <div className="h-36 w-full bg-white">
            <h1>INI TEST</h1>
          </div>

        </div>
      </div>
    </div>
  );
}
