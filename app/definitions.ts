interface ProjectNavigationState {
    value: string;
  }

interface darkModeToggleState {
    value: boolean;
  }
  
export interface RootState {
    projectNavigation: ProjectNavigationState;
  }

export interface DarkState {
  darkModeToggle: darkModeToggleState
}