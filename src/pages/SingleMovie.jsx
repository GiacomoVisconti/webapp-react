import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import FilmRate from "../components/FilmRate"
import ReviewForm from "../components/ReviewForm"

export default function SingleMovie() {
    const { id } = useParams()
    const movie_api_url = `${import.meta.env.VITE_API_URL}/${id}`
    const movie_reviews_url = `${movie_api_url}/reviews`

    const [singleMovie, setSingleMovie] = useState(null)
    const [isClicked, setIsClicked] = useState(false)


    useEffect(() => {
        fetch(movie_api_url)
            .then(res => res.json())
            .then(data => {
                setSingleMovie(data)


            })
    }, [])



    return (
        <>

            <div className="container my-5">
                <div className="card mb-3 border-white">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={`/${singleMovie?.image}`} className="img-fluid rounded-start" alt={singleMovie?.title} />
                        </div>
                        <div className="col-md-8 px-5">
                            <div className="card-body">
                                <h1 className="card-title">{singleMovie?.title}</h1>
                                <div className="py-5">

                                    <p className="card-text">{singleMovie?.abstract}</p>
                                    <p className="card-text"><small className="text-body-secondary">Directed by: </small>{singleMovie?.director}</p>
                                </div>
                            </div>
                            <div className="text-center">

                                <button
                                    type="button"
                                    className="btn btn-warning"
                                    onClick={() => setIsClicked(true)}
                                >
                                    Review
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                <ReviewForm movie_reviews_url={movie_reviews_url} singleMovie={singleMovie} setSingleMovie={setSingleMovie} isClicked={isClicked} />
            </div>
        </>
    )
}