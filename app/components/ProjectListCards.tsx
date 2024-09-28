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
      {/* {navigation === "WORKS_PROJECT" ? <WorksProjectList /> : null}
      {navigation === "SIDE_PROJECT" ? <SideProjectList /> : null}
      {navigation === "SMALL_PROJECT" ? <SmallProjectList /> : null} */}
      <WorksProjectList /> 
      <SideProjectList />
      <SmallProjectList />
    </>
  );
}
