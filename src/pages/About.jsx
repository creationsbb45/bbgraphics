import React from 'react'
import hero from "../assets/assets/about-pic.png";
export default function About() {
    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="hero-img">
                            <img src={hero} className='img-fluid rounded-3 my-auto' alt="" />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row gap-5">
                            <div className="col-md-4">
                                <div className="text-center py-2 card">
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bookmark-star" viewBox="0 0 16 16">
                                            <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.18.18 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.18.18 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.18.18 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.18.18 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.18.18 0 0 0 .134-.098z" />
                                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                                        </svg>
                                    </p>
                                    <h4>Experience</h4>
                                    <p>2+ Years</p>
                                    <p>Graphic Designer</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="text-center py-2 card">
                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bank" viewBox="0 0 16 16">
                                        <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z" />
                                    </svg></p>
                                    <h4>Education</h4>
                                    <p>B.com Bachelors Degree</p>
                                    <p>M.com Masters Degree</p>
                                </div>
                            </div>
                            <p className="my-3">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis error amet sed aut tenetur odit soluta cum obcaecati magni dolorum minus cupiditate, enim odio hic, vero velit! Mollitia et, ullam perspiciatis quae quas rerum sint optio numquam natus earum, neque at blanditiis quibusdam ipsam eum. Dolorem ullam consequatur in. Porro.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
