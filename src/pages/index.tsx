
import { Inter } from 'next/font/google';
import Nice from './home';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Nice/>
    </>
  );
}
