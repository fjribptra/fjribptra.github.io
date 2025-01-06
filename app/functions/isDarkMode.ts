import { useSelector } from "react-redux";
import { DarkState } from "../definitions";


export function IsDarkMode() {
    const isDarkMode = useSelector<DarkState, boolean>((state) => state.darkModeToggle.value);
    return isDarkMode;
}