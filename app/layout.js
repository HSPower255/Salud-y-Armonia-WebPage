import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import '../styles/globals.css'


export default function RootLayout({ children }) {
  return (
    <html >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap"
          rel="stylesheet"
        />
        <link 
        href="https://fonts.googleapis.com/css2?family=Kalam&display=swap"
        rel='stylesheet'
        />
      </head>
      <body>
        <NavBar />
        <Footer />
        {children}
      </body>
    </html>
  )
}
