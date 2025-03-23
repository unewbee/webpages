// career
export type CareerItemType = {
    company: string
    title: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
export const careerList: Array<CareerItemType> = [
    {
      company: 'OpenOnion',
      title: 'Software Engineer Intern',
      logo: 'bank',
      start: '2024',
      end: 'Present'
    },
    {
      company: 'SHAREit',
      title: 'Product Operations Intern',
      logo: 'bank',
      start: '2024',
      end: '2024'
    }
  ]