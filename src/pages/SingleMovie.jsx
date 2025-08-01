import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'

export default function SingleMovie() {
    const { id } = useParams()
    const movie_api_url = `${import.meta.env.VITE_API_URL}/${id}`
    const [singleMovie, setSingleMovie] = useState(null)

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
                        </div>
                    </div>
                </div>
                <section className="container-fluid my-5">
                    <h2>Reviews</h2>
                    <div className="row g-3" >
                        {console.log(singleMovie?.reviews)}
                        {singleMovie?.reviews.map((element, index) => {
                            return (
                                <div key={index} className="card ">

                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">
                                            <div className="card-title d-flex">User: <h5 className="px-2">{element.name}</h5></div>
                                            <p>Voto: <span>{element.vote}</span></p>

                                        </div>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    </div>
                                    <div className="card-footer text-body-secondary">
                                        Updated at: {element.updated_at.toLocaleString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </section>
            </div>
        </>
    )
}