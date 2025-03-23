export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Channing Hu'
export const headline = 'Master of IT in AI at UNSW.'
export const introduction = "Hello World! I'm a master student at University of New South Wales, majoring in IT in AI."
export const email = 'Zengqianyi.hu@gmail.com'
export const githubUsername = 'unewbee'

// about page
export const aboutMeHeadline = 'Who Are You and Why Should I Care?'
export const aboutParagraphs = [
  "I'm a master student at University of New South Wales, majoring in IT in AI.",
  'Before that, I was a undergraduate student at Shanghai University of International Business and Economics, majoring in International Business.',
  "I started this blog to share the insights I learn every day. Most blogs focus on education in Artificial Intelligence and general computer science, while others share the life lessons I've learned.",
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "I've written something about everything."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'GitHub',
    icon: 'github',
    href: 'https://github.com/unewbee',
  },
  {
    name: 'Linkedin',
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/zengqianyi-hu/',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'react',
  'nodedotjs',
  'nextdotjs',
  'postgresql',
  'vercel',
  'docker',
  'cplusplus',
  'dotenv',
  'vite',
  'html5',
  'python',
  'tailwindcss',
  'ubuntu',
  'c',
  'yarn',
  'git',
  'github',
  'gitlab',
  'npm',
  'debian',
  'canva',
  'cmake',
  'claude',
  'flask'
]
