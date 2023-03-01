import { Nav } from './sections/nav/Nav'
import { Outlet } from 'react-router-dom'
import { Footer } from './sections/footer/Footer'

function App() {
  return (
    <>
      <header>
        <Nav></Nav>
      </header>
      <main className="App">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
export default App
