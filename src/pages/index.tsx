import Button from '@/components/atoms/Button';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex  items-center justify-center p-24 ${inter.className}`}
    >
      <div className="">
        <h1 className="text-red-800 text-4xl font-bold">TEST</h1>
        <Button title="Submit" />
      </div>
    </main>
  );
}
