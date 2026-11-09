import { defineThemeConfig } from '@utils/defineThemeConfig'
import previewImage from '@assets/img/social-preview-image.png'
import logoImage from '@assets/img/nf-logo.png'

export default defineThemeConfig({
  name: 'Northfield Festival',
  id: 'northfield-festival',
  logo: logoImage,
  seo: {
    title: 'Northfield Festival of Music & Speech',
    description:
      'Official website for the Northfield Festival of Music & Speech.',
    author: 'Northfield Festival',
    image: previewImage, // Can also be a string e.g. '/social-preview-image.png',
  },
  colors: {
    primary: '#1d57a1',
    secondary: '#f5f630',
    neutral: '#b9bec4',
    outline: '#fffd29',
  },
  navigation: {
    darkmode: true,
    items: [
      {
        type: 'link',
        label: 'Home',
        href: '/',
      },
      {
        type: 'link',
        label: 'About',
        href: '/about',
      },
      {
        label: 'Applications',
        type: 'dropdown',
        items: [
          {
            label: 'Apply by Post',
            href: '/syllabus',
          },
          {
            label: 'Apply Online',
            href: 'https://www.cognitoforms.com/NorthfieldFestivalOfMusicSpeech/OnlineApplicationNorthfieldFestival',
          },
          {
            label: 'Speech Test Pieces',
            href: '/speech-test-pieces',
          },
        ],
      },
      {
        label: 'Policies & Rules',
        type: 'dropdown',
        items: [
          {
            label: 'Privacy Policy',
            href: '/privacy-policy',
          },
          {
            label: 'Child Protection Policy',
            href: '/child-protection-policy',
          },
          {
            label: 'Festival Rules',
            href: '/festival-rules',
          },
          {
            label: 'Sitemap',
            href: '/sitemap',
          },
        ],
      },
      {
        type: 'link',
        label: 'Contact',
        href: '/contact',
      },
    ],
  },
  socials: [
    {
      label: 'X',
      href: 'https://x.com/NorthfieldFest',
      icon: 'lucide:x',
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/NorthfieldFest',
      icon: 'lucide:facebook',
    },
  ],
})
