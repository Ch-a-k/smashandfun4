import localFont from 'next/font/local';

export const impact = localFont({
  src: '../public/fonts/Impact.ttf',
  variable: '--font-impact',
});

export const akrobat = localFont({
  src: [
    {
      path: '../public/fonts/Akrobat-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Akrobat-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-akrobat',
});