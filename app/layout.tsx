import './globals.css';
import { Inter } from 'next/font/google';
import Header from '../components/header';
import ActiveSectionContextProvider from '@/context/active-section-context';
import { Toaster } from 'react-hot-toast';
import ThemeSwitch from '@/components/themeSwitch';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jerry S. | Personal Portfolio',
  description: 'Jerry is an undergraduate IT student with relevant experience in the IT industry.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-white dark:text-opacity-90`}>
        <div className="bg-[#a6dded] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#046263]"></div>
        <div className="bg-[#ebd59b] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Toaster position="bottom-center" />
        </ActiveSectionContextProvider>

        <ThemeSwitch />
      </body>
    </html>
  )
}
