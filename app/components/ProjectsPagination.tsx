"use client";

import { useDispatch, useSelector } from "react-redux";
import { projectTrigger, personalTrigger } from "../redux/projectNavigation/projectNavigation";
import { RootState } from "../definitions";

export default function ProjectPagination() {
  const navigation = useSelector<RootState, string>((state) => state.projectNavigation.value);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center items-center p-5 gap-5">
       <div className="flex justify-center items-center p-5 gap-5">
       <button className={`${navigation === "PROJECT" ? " font-semibold underline" : null} uppercase`} onClick={() => dispatch(projectTrigger())}>
         Project
       </button>
       <button className={`${navigation === "PERSONAL" ? " font-semibold underline" : null} uppercase`} onClick={() => dispatch(personalTrigger())}>
         Personal
       </button>
     </div>
    </div>
    // <div className="bg-black text-slate-400 flex justify-center items-center p-5 gap-5 border border-y-white border-x-black">
    //   <button className={`${navigation === "WORKS_PROJECT" ? "text-white font-semibold underline" : null}`} onClick={() => dispatch(workProjectsTrigger())}>
    //     Works
    //   </button>
    //   <button className={`${navigation === "SIDE_PROJECT" ? "text-white font-semibold underline" : null}`} onClick={() => dispatch(sideProjectsTrigger())}>
    //     Side-projects
    //   </button>
    //   <button className={`${navigation === "SMALL_PROJECT" ? "text-white font-semibold underline" : null}`} onClick={() => dispatch(smallProjectsTrigger())}>
    //     Small-projects
    //   </button>
    // </div>
  );
}
