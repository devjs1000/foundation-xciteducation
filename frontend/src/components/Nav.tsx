import { useState } from "react";
import { demo } from "../actions/action1";
import { useDispatch, useSelector } from "react-redux";
const Nav = () => {
  // const dt=useSelector((state:any)=>state.demo)
  // const dispatch=useDispatch()
  // dispatch(demo(5))

  return (
    <>
      <div className="text-center flex justify-between items-center text-xl font-bold bg-white ">
        <div className="flex">
          <h1 className="bg-yellow-600 p-2 text-white">XciteEdu</h1>
          <button className="px-4 text-sm font-semibold text-slate-700 hover:bg-yellow-200">ABOUT</button>
          <button className="px-4 text-sm font-semibold text-slate-700 hover:bg-yellow-200">CAUSES</button>
          <button className="px-4 text-sm font-semibold text-slate-700 hover:bg-yellow-200">SERVICES</button>
          <button className="px-4 text-sm font-semibold text-slate-700 hover:bg-yellow-200">BLOGS</button>
          <button className="px-4 text-sm font-semibold text-slate-700 hover:bg-yellow-200">HELP</button>

        </div>
        <div>
            <button className="px-4 bg-yellow-600 text-white rounded-l-full">CONTACT</button>
        </div>
      </div>
    </>
  );
};

export default Nav;
