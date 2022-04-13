import React from "react";
import { clearUserCommit } from "../redux/actions/gitHub";
import { useDispatch, useSelector } from "react-redux";

export default function Modal({ showModal, setShowModal }) {
  const dispatch = useDispatch();

  const { commit } = useSelector((state) => state.gitReducer);

  const clearCommit = () => {
    setShowModal(false);
  };
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none" style={{minWidth: "1000px"}}>
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Commit History</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={clearCommit}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto overflow-auto" style={{maxHeight: "500px"}}>
                  {commit.map((com) => {
                    console.log(com);
                    return (
                      <div style={{minWidth: "0.5vw"}}>
                        <p className="text-slate-500 text-lg leading-relaxed text-left font-extrabold">
                          <bold className="font-extrabold">Commiter: </bold>
                          {com?.commit?.author?.name}{" "}
                        </p>
                        <div className="grid grid-cols-5">
                        <p className="text-left col-span-4">
                          <bold className="ml-4">Message: </bold>
                          {com?.commit?.message}
                        </p>
                        <p className="text-right">
                        {com?.commit?.committer?.date.split("T")[0]}
                        </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={clearCommit}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
