import React from 'react'


function Trending() {
    return (

        <div className="container-xxl px-4">

            <div className="row row-cols-2 mb-3">
                <div className="col">
                    <h3 className=''>Trending</h3>
                </div>
                <div className="col text-end">
                    <a href='/' className='btn inline-block btn-primary '>View more video</a>
                </div>
            </div>

            <div className="row row-cols-4 g-4">

                <div className="col">
                    <div className="card">
                        <div className="card-image">

                        <img src="images/trending/01.jpg" alt="" className="card-img-top" />
                       
                        <div class="card-element-hover position-absolute top-50 start-50 translate-middle">
                                <a class="icon-md bg-mode  text-dark rounded-circle" href="video-details.html"> <i class="bi bi-play-fill fs-5"> </i> </a>
                            </div>

                            <div class="position-absolute bottom-0 start-0 p-3 d-flex w-100">
                                <span class="bg-dark bg-opacity-50 px-2 rounded text-white small">03:45</span>
                                <span class="bg-dark bg-opacity-50 px-2 rounded text-white small ms-auto"><i class="fa-solid fa-heart"></i></span>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 class="card-title fs-6">New movie trailers (2021 -2022) September</h3>

                            <div class="d-flex mt-3">

                                <div class="avatar avatar-xxs me-2">
                                    <img class="avatar-img rounded-circle" src="images/avatar/01.jpg" alt="" />
                                </div>
                                <div>
                                    <h6 class="mb-0 lh-1"> <a href="#!" className='text-dark ' > Carolyn Ortiz </a> </h6>
                                    <span class="ms-auto small"> 876.2K views</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">

                        <div className="ratio ratio-16x9">

                            <iframe src="https://www.youtube.com/embed/CgEZNJSeofs" title="YouTube video" allowfullscreen=""></iframe>
                        </div>

                        <div className="card-body">
                            <h3 class="card-title fs-6">15 useful apps for android smartphones users</h3>

                            <div class="d-flex mt-3">

                                <div class="avatar avatar-xxs me-2">
                                    <img class="avatar-img rounded-circle" src="images/avatar/02.jpg" alt="" />
                                </div>
                                <div>
                                    <h6 class="mb-0 lh-1"> <a href="#!" className='text-dark ' > Carolyn Ortiz </a> </h6>
                                    <span class="ms-auto small"> 876.2K views</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">


                        <div className="card-image">


                        <img src="images/trending/02.jpg" alt="" className="card-img-top" />
                        <div class="card-element-hover position-absolute top-50 start-50 translate-middle">
                                <a class="icon-md bg-mode text-dark rounded-circle" href="video-details.html"> <i class="bi bi-play-fill fs-5"> </i> </a>
                            </div>

                            <div class="position-absolute bottom-0 start-0 p-3 d-flex w-100">
                                <span class="bg-dark bg-opacity-50 px-2 rounded text-white small">03:45</span>
                                <span class="bg-dark bg-opacity-50 px-2 rounded text-white small ms-auto"><i class="fa-solid fa-heart"></i></span>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 class="card-title fs-6">The Red notice | Official teaser | Netflix </h3>

                            <div class="d-flex mt-3">

                                <div class="avatar avatar-xxs me-2">
                                    <img class="avatar-img rounded-circle" src="images/avatar/03.jpg" alt="" />
                                </div>
                                <div>
                                    <h6 class="mb-0 lh-1"> <a href="#!" className='text-dark ' > Carolyn Ortiz </a> </h6>
                                    <span class="ms-auto small"> 876.2K views</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-image">

                        <img src="images/trending/03.jpg" alt="" className="card-img-top" />
                        <div class="card-element-hover position-absolute top-50 start-50 translate-middle">
                                <a class="icon-md bg-mode  text-dark rounded-circle" href="video-details.html"> <i class="bi bi-play-fill fs-5"> </i> </a>
                            </div>

                            <div class="position-absolute bottom-0 start-0 p-3 d-flex w-100">
                                <span class="bg-dark bg-opacity-50 px-2 rounded text-white small">03:45</span>
                                <span class="bg-dark bg-opacity-50 px-2 rounded text-white small ms-auto"><i class="fa-solid fa-heart"></i></span>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 class="card-title fs-6">The Red notice | Official teaser | Netflix </h3>


                            <div class="d-flex mt-3">

                                <div class="avatar avatar-xxs me-2">
                                    <img class="avatar-img rounded-circle" src="images/avatar/04.jpg" alt="" />
                                </div>
                                <div>
                                    <h6 class="mb-0 lh-1"> <a href="#!" className='text-dark ' > Carolyn Ortiz </a> </h6>
                                    <span class="ms-auto small"> 876.2K views</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-image">


                            <img src="images/trending/04.jpg" alt="" className="card-img-top" />
                            <div class="card-element-hover position-absolute top-50 start-50 translate-middle">
                                <a class="icon-md bg-mode  text-dark rounded-circle" href="video-details.html"> <i class="bi bi-play-fill fs-5"> </i> </a>
                            </div>

                            <div class="position-absolute bottom-0 start-0 p-3 d-flex w-100">
                                <span class="bg-dark bg-opacity-50 px-2 rounded text-white small">03:45</span>
                                <span class="bg-dark bg-opacity-50 px-2 rounded text-white small ms-auto"><i class="fa-solid fa-heart"></i></span>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 class="card-title fs-6">The Red notice | Official teaser | Netflix </h3>

                            <div class="d-flex mt-3">

                                <div class="avatar avatar-xxs me-2">
                                    <img class="avatar-img rounded-circle" src="images/avatar/05.jpg" alt="" />
                                </div>
                                <div>
                                    <h6 class="mb-0 lh-1"> <a href="#!" className='text-dark ' > Carolyn Ortiz </a> </h6>
                                    <span class="ms-auto small"> 876.2K views</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-image">
                            <img src="images/trending/05.jpg" alt="" className="card-img-top" />

                            <div class="card-element-hover position-absolute top-50 start-50 translate-middle">
                                <a class="icon-md bg-mode text-dark rounded-circle" href="video-details.html"> <i class="bi bi-play-fill fs-5"> </i> </a>
                            </div>

                            <div class="position-absolute bottom-0 start-0 p-3 d-flex w-100">
                                <span class="bg-dark bg-opacity-50 px-2 rounded text-white small">03:45</span>
                                <span class="bg-dark bg-opacity-50 px-2 rounded text-white small ms-auto"><i class="fa-solid fa-heart"></i></span>
                            </div>

                        </div>
                        <div className="card-body">
                            <h3 class="card-title fs-6">The Red notice | Official teaser | Netflix </h3>

                            <div class="d-flex mt-3">

                                <div class="avatar avatar-xxs me-2">
                                    <img class="avatar-img rounded-circle" src="images/avatar/07.jpg" alt="" />
                                </div>
                                <div>
                                    <h6 class="mb-0 lh-1"> <a href="#!" className='text-dark ' > Carolyn Ortiz </a> </h6>
                                    <span class="ms-auto small"> 876.2K views</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Trending