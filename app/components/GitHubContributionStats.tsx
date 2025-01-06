"use client"

import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import { IsDarkMode } from '../functions/isDarkMode'

const GitHubContributionStats = () => {
  return (
    <GitHubCalendar username="fjribptra" colorScheme={IsDarkMode() ? 'dark' : 'light'}/>
  )
}

export default GitHubContributionStats
