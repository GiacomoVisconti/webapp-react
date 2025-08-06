import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import ReviewForm from "../components/ReviewForm"
import { useMovie } from "../contexts/MainContext"
import { BouncyArc } from 'ldrs/react'
import 'ldrs/react/BouncyArc.css'

export default function SingleMovie() {
    const { id } = useParams()
    const { singleMovie, setSingleMovie, loading, setLoading } = useMovie()
    const [isClicked, setIsClicked] = useState(false)
    const movie_api_url = `${import.meta.env.VITE_API_URL}/${id}`

    useEffect(() => {
        setLoading(true)
        fetch(movie_api_url)
            .then(res => res.json())
            .then(data => {
                setSingleMovie(data)


            })
            .finally(() => setLoading(false))
    }, [])

    return (
        <>
            {loading ? <BouncyArc
                size="70"
                speed="1.65"
                color="black"
            /> :
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
                    <ReviewForm movie_api_url={movie_api_url} isClicked={isClicked} />
                </div>}
        </>
    )
}