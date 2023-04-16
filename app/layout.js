import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import '../styles/globals.css'


export default function RootLayout({ children }) {
  return (
    <html >
      <head>
        <title>Salud y Armonía</title>
        <meta name="description" content="En Salud y Armonía te invitamos a vivir una experiencia de relajación total y lograr desconectar del estrés y las preocupaciones cotidianas." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:image" content="ogimg.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="logo.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kalam&display=swap"
          rel='stylesheet'
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway&display=swap');"
          rel='stylesheet'
        />
        <link
        href='https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap'
        rel='stylesheet'
        />
        <link
        href='https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap'
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
