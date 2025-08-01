export default function Footer() {
    return (
        <footer className=" py-4">
            {/* Links */}
            <div className="row">
                <div className="col">
                    <ul className="nav justify-content-center py-3">
                        <li className="nav-item">
                            <a
                                className="nav-link text-black px-2 "
                                href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link text-black px-2 "
                                href="#">
                                Features
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link text-black px-2 "
                                href="#">
                                Pricing
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link text-black px-2 "
                                href="#">
                                FAQs
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link text-black px-2 "
                                href="#">
                                Contact Us
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link text-black px-2 "
                                href="#">
                                About
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Copyright */}
            <div className="text-center py-3">
                <span className="">© 2025 Company, Inc</span>
            </div>
        </footer>
    )

}