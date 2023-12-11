import React from 'react'

function Trailer() {
    return (
        <div className ="container-xxl px-4 mt-5">

            <div className ="row row-cols-2 py-4">
                <div className ="col">

                    <h3 className =''>Oficial Trailer</h3>
                </div>
                <div className ="col text-end">

                    <a className ='btn inline-block btn-primary '>View more video</a>
                </div>
            </div>

            <div className ="row row-col-3">

                <div className ="col">
                    <div className ="card">

                        <div className ="card-body">
                            <h3 className="card-title fs-6">New movie trailers (2021 -2022) September</h3>
                            <div className="d-flex mt-2">
                                <div className="avatar avatar-xxs me-2">
                                    <img className="avatar-img rounded-circle" src="images/avatar/01.jpg" alt="" />
                                </div>
                                <div>
                                    <h6 className="mb-0 lh-1"> <a href="#!"> Lori Ferguson <i className="bi bi-patch-check-fill text-success small"></i> </a> </h6>
                                    <span className="ms-auto small"> 235.8K views</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className ="col">
                    <div className ="card">

                        <div className="card-image">
                            <div className="ratio ratio-16x9 card-img-top overflow-hidden">
                                <iframe src="https://www.youtube.com/embed/7E45f46yDFI" title="YouTube video" allowfullscreen=""></iframe>
                            </div>
                        </div>

                        <div className="card-body position-relative">
                            <h3 className ='fs-6'>15 useful apps for android smartphones users</h3>
                            <div className="d-flex mt-2">
                                <div className="avatar avatar-xxs me-2">
                                    <img className="avatar-img rounded-circle" src="images/avatar/02.jpg" alt="" />
                                </div>
                                <div>
                                    <h6 className="mb-0 lh-1"> <a href="#!"> Lori Ferguson <i className="bi bi-patch-check-fill text-success small"></i> </a> </h6>
                                    <span className="ms-auto small"> 235.8K views</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className ="col">
                    <div className ="card">

                        <div className="card-image">
                            <div className="ratio ratio-16x9 card-img-top overflow-hidden">
                                <iframe src="https://player.vimeo.com/video/225888984?h=65630c41c6" title="Vimeo video" allowfullscreen=""></iframe>
                            </div>
                        </div>
                        <div className="card-body position-relative">
                            <h3 className='fs-6'> The Red notice | Official teaser | Netflix </h3>
                            <div className="d-flex mt-3">
                                <div className="avatar avatar-xxs me-2">
                                    <img className="avatar-img rounded-circle" src="images/avatar/03.jpg" alt="" />
                                </div>
                                <div>
                                    <h6 className="mb-0 lh-1"> <a href="#!"> Louis Crawford </a> </h6>
                                    <span className="ms-auto small"> 785.2K views</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Trailer