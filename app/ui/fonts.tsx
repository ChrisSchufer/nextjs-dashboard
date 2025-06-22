import { Inter, Lusitana, Sevillana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
  weight: ['400', '700'], // Regular and Bold
  subsets: ['latin'], // Ensure the font is loaded with the Latin subset
});

export const sevillana = Sevillana({
  weight: ['400'], // Regular
  subsets: ['latin'], // Ensure the font is loaded with the Latin subset
});
