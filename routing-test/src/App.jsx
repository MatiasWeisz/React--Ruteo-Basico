
import { useState } from 'react'
import './App.css'

function HomePage () {
  return (
    <>
      <h1>HOME</h1>
      <p> Esta es una landing page de ejemplo </p>
      <a href='/about'>Conoce sobre mi</a>
    </>
  )
}

function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <div>
        <img src="https://media.licdn.com/dms/image/C4E03AQFbYS4QPwDhQA/profile-displayphoto-shrink_200_200/0/1629010658965?e=1714608000&v=beta&t=Rs7X3ANa9AKCBmrju8Sb-hITE5ipz2_jobleGnb_JtY" alt="Imagen de Matias" />
        <p> Hola! Mi nombre es Matias! Creando una pagina de ejemplo de About Us </p>
      </div>

      <a href='/'>Home</a>
    </>
  )
}


function App() {
 
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  return(
    <main>
      {currentPath === '/' && <HomePage/>}
      {currentPath === '/about' && <AboutPage/>}

    </main>
  )

}

export default App