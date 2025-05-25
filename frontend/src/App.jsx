import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import NavBar from "./components/Navbar"
import "./css/App.css";
import { MovieProvider } from "./contexts/MovieContext";


const App = () => {
  return (
    <MovieProvider>
      <NavBar/>
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
    </main>
    </MovieProvider>
  )
}

export default App
