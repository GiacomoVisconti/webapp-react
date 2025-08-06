import { useState } from "react";
import FilmRate from "./FilmRate";
import { useMovie } from "../contexts/MainContext";
import { BouncyArc } from 'ldrs/react'
import 'ldrs/react/BouncyArc.css'


export default function ReviewForm({ movie_api_url, isClicked }) {

    const [newReview, setNewReview] = useState({
        name: '',
        vote: 1,
        text: ''
    })
    const { singleMovie, loading, setLoading } = useMovie()
    const movie_reviews_url = `${movie_api_url}/reviews`



    function handleSubmit(e) {
        e.preventDefault()
        console.log(newReview);
        setLoading(true)

        fetch(movie_reviews_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.error) return

                setSingleMovie(prevState => ({
                    ...prevState,
                    reviews: [...prevState.reviews, data.review]
                }))

                setNewReview({
                    name: '',
                    vote: 1,
                    text: ''
                })
            })
            .finally(() => setLoading(false))


    }

    return (
        <section className="container-fluid my-5">
            <h2>Reviews</h2>
            {/* NEW REVIEW FORM */}
            <div className={isClicked ? "d-block" : "d-none"}>
                <div className="my-4 card p-3">
                    <h3>Add your Review</h3>
                    <form onSubmit={handleSubmit}>
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
                                        value={newReview.username}
                                        onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                                    />

                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Vote</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        min='1'
                                        max='5'
                                        step='1'
                                        name=""
                                        id=""
                                        aria-describedby="helpId"
                                        placeholder=""
                                        value={newReview.vote}
                                        onChange={(e) => setNewReview({ ...newReview, vote: e.target.value })}
                                    />

                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Review Text</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={newReview.text} onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}></textarea>
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
                {loading && <BouncyArc
                    size="70"
                    speed="1.65"
                    color="black"
                />}
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
                                <p className="card-text">{element.text}</p>

                            </div>
                            <div className="card-footer text-body-secondary">
                                Updated at: {updated}
                            </div>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}