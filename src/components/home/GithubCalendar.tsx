'use client'

import GitHubCalendar from 'react-github-calendar'
import { githubUsername } from '@/config/infoConfig'


export default function GithubContributions() {
  return (
    <div className="w-full overflow-hidden">
      <div className='dark:hidden'>
        <GitHubCalendar
          username={githubUsername}
          colorScheme='light'
          fontSize={9}
          blockSize={9}
          blockMargin={2}
          blockRadius={1}
        />
      </div>
      <div className='hidden dark:block'>
        <GitHubCalendar
          username={githubUsername}
          colorScheme='dark'
          fontSize={9}
          blockSize={9}
          blockMargin={2}
          blockRadius={1}
        />
      </div>
    </div>
  )
}