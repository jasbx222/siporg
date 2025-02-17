
import './App.css'
import Container from './componente/Container'
import Navbar from './componente/navbar/Navbar'

function App() {

  return (
    <div>
      {
        window.onload ? (
          <>
            <h5>is  loadin</h5>
          </>
        ) : (
          <>
            <Navbar />
            <Container />
          </>

        )
      }
    </div>
  )
}

export default App
