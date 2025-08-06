import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
const MovieContext = createContext()

function MovieProvider({ children }) {
    const api_url = import.meta.env.VITE_API_URL
    const [movieData, setMovieData] = useState(null)
    const [singleMovie, setSingleMovie] = useState(null)
    const [loading, setLoading] = useState(null)





    useEffect(() => {
        setLoading(true)
        fetch(api_url)
            .then(res => res.json())
            .then(data => {
                setMovieData(data)


            })
            .finally(() => setLoading(false))



    }, [])


    return (
        <MovieContext.Provider
            value={{
                movieData, setMovieData, singleMovie, setSingleMovie, loading, setLoading
            }}
        >
            {children}
        </MovieContext.Provider>
    )
}

function useMovie() {
    return useContext(MovieContext)
}

export { MovieProvider, useMovie }