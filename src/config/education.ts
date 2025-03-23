
// education 
export type EducationItemType = {
    school: string
    major: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
    {
      school: 'The University of New South Wales',
      major: 'Master of IT in AI',
      logo: 'college',
      start: '2023',
      end: '2025'
    },
    {
      school: 'Shanghai University of International Business and Economics',
      major: 'Bachelor of International Business',
      logo: 'college',
      start: '2018',
      end: '2022'
    },
    {
      school: 'RMIT University',
      major: 'Bachelor of Management',
      logo: 'college',
      start: '2018',
      end: '2022'
    },
  ]