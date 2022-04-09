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
      <div className="p-5 flex flex-col my-10 m-auto drop-shadow-xl box-border w-full h-5/6 gap-4">
        <div className="pt-5 flex flex-col items-center bg-white rounded-xl">
          <img
            src={data.avatar_url}
            className="rounded-full w-2/3 drop-shadow-xl"
          />
          <h1 className="my-5 grid lg:text-4xl text-2xl">{data.login}</h1>
          <div>
            <h1>star</h1>
          </div>
        </div>
      </div>
      <div className="p-5 flex items-center bg-orange-500 my-10 col-span-2">
        <h1>INI TEST</h1>
      </div>
    </div>
  );
}
