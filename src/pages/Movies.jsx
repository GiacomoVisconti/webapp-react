import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useMovie } from "../contexts/MainContext"
import { BouncyArc } from 'ldrs/react'
import 'ldrs/react/BouncyArc.css'


export default function Movies() {
    const { movieData, loading } = useMovie()


    return (
        <>
            {console.log(movieData)}
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Welcome to IGdb</h1>
                    <p className="col-md-8 fs-4">
                        Discover the latest blockbusters, timeless classics, and hidden gems. Browse reviews, watch trailers, and keep track of your favorite movies all in one place.
                    </p>
                    <button className="btn btn-primary btn-lg" type="button">
                        Browse Movies
                    </button>
                </div>
            </div>
            <div className="container">
                <div className="row g-3">
                    {loading ? <BouncyArc
                        size="70"
                        speed="1.65"
                        color="black"
                    /> : movieData?.map((element) => {

                        return (

                            <div className="col-4" key={element.id}>
                                <div className="card h-100">
                                    <img className="card-img-top" src={element.image} alt="Title" />
                                    <div className="card-body">
                                        <h4 className="card-title">{element.title}</h4>
                                        <p className="card-text">Directed by: <span>{element.director}</span></p>
                                        <div className="d-flex">
                                            <Link to={`/movies/${element.id}`} className="link">View Movie</Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}



                </div>

            </div >
        </>
    )
}