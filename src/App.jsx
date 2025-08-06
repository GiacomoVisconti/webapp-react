import HomePage from "./pages/HomePage";
import DefaultLayout from "./layouts/DefaultLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import SingleMovie from "./pages/SingleMovie";
import { MovieProvider } from "./contexts/MainContext";


function App() {
  return (
    <>
      <MovieProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>

              <Route path="/" element={<HomePage />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/movies/:id" element={<SingleMovie />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MovieProvider>
    </>
  )
}

export default App
