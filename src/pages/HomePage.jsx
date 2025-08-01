import { Link } from "react-router-dom"

export default function HomePage() {
    return (
        <>
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

                    <div className="col-4">
                        <div className="card">
                            <img className="card-img-top" src="https://picsum.photos/100/100" alt="Title" />
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>

                            </div>
                        </div>

                    </div>
                    <div className="col-4">
                        <div className="card">
                            <img className="card-img-top" src="https://picsum.photos/100/100" alt="Title" />
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-4">
                        <div className="card">
                            <img className="card-img-top" src="https://picsum.photos/100/100" alt="Title" />
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-4">
                        <div className="card">
                            <img className="card-img-top" src="https://picsum.photos/100/100" alt="Title" />
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
