"use client";

import { useSelector } from "react-redux";
import SideProjectList from "./SideProjectList";
import SmallProjectList from "./SmallProjectList";
import WorksProjectList from "./WorksProjectList";
import { RootState } from "../definitions";

export default function ProjectListCards() {
  const navigation = useSelector<RootState, string>((state) => state.projectNavigation.value);
  return (
    <>
      {navigation === "PROJECT" ? <WorksProjectList /> : null}
      {navigation === "PERSONAL" ? <SmallProjectList /> : null}
      {/* {navigation === "SMALL_PROJECT" ? <SmallProjectList /> : null}  */}
      {/* <WorksProjectList />  */}
      {/* <SideProjectList /> */}
      {/* <SmallProjectList /> */}
    </>
  );
}
