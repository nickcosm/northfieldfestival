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
    primary: '#1c569f',
    secondary: '#f5f630',
    neutral: '#e9e6e9',
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
        label: 'Blog',
        href: '/blog',
      },
      {
        type: 'link',
        label: 'Applications',
        href: '/applications',
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
            label: "Who's Who",
            href: '/whos-who',
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
