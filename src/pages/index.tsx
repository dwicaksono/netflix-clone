/* eslint-disable @next/next/no-img-element */
import { Input } from '@/components';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { push } = useRouter();
  const [signForm, setSignForm] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [isSignup, setIsSignup] = useState(false);
  const signHandler = (val: string, type: string): void => {
    setSignForm(prev => ({ ...prev, [type]: val }));
  };
  const loginHandler = () => {
    push('/home-movies');
  };

  return (
    <main
      className={`${inter} relative w-full h-screen bg-cover bg-center bg-no-repeat bg-[url('https://mapandfire.com/wp-content/uploads/2021/09/netflix-brand-hero-image.jpg')]`}
    >
      <div className="bg-netflix-dark-tranparent-primary w-full h-full">
        <nav className="px-20 py-7">
          <img
            className="w-[92.5px] h-[25px]"
            src="https://www.freepnglogos.com/uploads/netflix-logo-drawing-png-19.png"
            alt="logo"
          />

          <div className="flex justify-center">
            <div className="bg-netflix-black-primary bg-opacity-70 px-16 py-16 self-center mt-3 lg:w-2/5 lg:max-w-md w-full rounded-md ">
              <h2 className="text-white text-4xl mb-8 font-semibold">
                {isSignup ? 'Register' : 'Sign in'}
              </h2>
              <div className="flex flex-col gap-4">
                {isSignup && (
                  <Input
                    id="username"
                    label="Username"
                    value={signForm.username}
                    onChange={(e: any) =>
                      signHandler(e.target.value, 'username')
                    }
                    type="text"
                  />
                )}
                <Input
                  id="email"
                  label="Email"
                  value={signForm.email}
                  onChange={(e: any) => signHandler(e.target.value, 'email')}
                  type="email"
                />
                <Input
                  id="password"
                  label="Password"
                  value={signForm.password}
                  onChange={(e: any) => signHandler(e.target.value, 'password')}
                  type="password"
                />
              </div>
              <button
                className="bg-red-600 transition py-3 rounded-md hover:bg-red-700 mt-3 w-full text-white"
                onClick={loginHandler}
              >
                Login
              </button>
              <p className="mt-12 text-neutral-500">
                {isSignup
                  ? 'Already have an account?'
                  : 'First time using Netflix?'}{' '}
                <span
                  className="text-white ml-1 hover:underline cursor-pointer"
                  onClick={() => setIsSignup(prev => !prev)}
                >
                  {isSignup ? 'Login' : 'Create an account'}
                </span>
              </p>
            </div>
          </div>
        </nav>
      </div>
    </main>
  );
}
