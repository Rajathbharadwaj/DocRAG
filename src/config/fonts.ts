import localFont from 'next/font/local';

export const neutrifStudio = localFont({
  src: [
    {
      path: '../fonts/NeutrifStudio-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/NeutrifStudio-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/NeutrifStudio-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/NeutrifStudio-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../fonts/NeutrifStudio-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/NeutrifStudio-SemiBoldItalic.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../fonts/NeutrifStudio-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/NeutrifStudio-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../fonts/NeutrifStudio-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../fonts/NeutrifStudio-ExtraBoldItalic.woff2',
      weight: '800',
      style: 'italic',
    },
  ],
  variable: '--font-neutrif',
  display: 'swap',
});