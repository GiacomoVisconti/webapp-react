import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import FilmRate from "../components/FilmRate"

export default function SingleMovie() {
    const { id } = useParams()
    const movie_api_url = `${import.meta.env.VITE_API_URL}/${id}`
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
                <section className="container-fluid my-5">
                    <h2>Reviews</h2>
                    {/* NEW REVIEW FORM */}
                    <div className={isClicked ? "d-block" : "d-none"}>
                        <div className="my-4 card p-3">
                            <h3>Add your Review</h3>
                            <form>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="mb-3">
                                            <label htmlFor="" className="form-label">UserName</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name=""
                                                id=""
                                                aria-describedby="helpId"
                                                placeholder=""
                                            />

                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="mb-3">
                                            <label htmlFor="" className="form-label">Vote</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                name=""
                                                id=""
                                                aria-describedby="helpId"
                                                placeholder=""
                                            />

                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Review Text</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                    </div>
                                    <div className="text-center">

                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Publish
                                        </button>
                                    </div>

                                </div>

                            </form>

                        </div>
                    </div>



                    <div className="row g-3" >
                        {console.log(singleMovie?.reviews, isClicked)}
                        {singleMovie?.reviews.map((element, index) => {
                            let updated = Date(element.updated_at)
                            return (
                                <div key={index} className="card ">

                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex">Voto:
                                                <span>
                                                    <FilmRate element={element} />
                                                </span>
                                            </div>
                                            <div className="card-title d-flex">User: <h5 className="px-2">{element.name}</h5></div>

                                        </div>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    </div>
                                    <div className="card-footer text-body-secondary">
                                        Updated at: {updated}
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