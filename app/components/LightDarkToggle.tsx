"use client"

import { darkToggle } from "../redux/darkModeToggle/darkModeToggle";
import { FiMoon } from "react-icons/fi";
import { MdOutlineLightMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { DarkState } from "../definitions";

export default function LightDarkToggle({className} : {className?: string}) {
    const isDarkMode = useSelector<DarkState, boolean>((state) => state.darkModeToggle.value);
    const dispatch = useDispatch();
    function handleDarkToggle() {
        dispatch(darkToggle())
    }
    return (
        <button className={className} onClick={handleDarkToggle}>
            {isDarkMode ? <MdOutlineLightMode /> :  <FiMoon />}
        </button>
    )
}