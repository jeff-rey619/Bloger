import './globals.css'
import { Inter } from 'next/font/google'
import Footer from "./components/Footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { ThemeContextProvider } from '@/context/ThemeContext';
// import ThemeProviders from '../providers/ThemeProviders';
import ThemeProviders from "@/providers/ThemeProviders"
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',    
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider >
          <ThemeProviders>
<div className='container'>
          <div className="wrapper">
            <Navbar />
            
            {children}
        <Footer/>
     
          </div>
          
            
      </div>
          </ThemeProviders>
  
        </ThemeContextProvider>
      
      
      </body>
    </html>
  )
}
