import React from 'react'

function Hero() {
    return (




        <div className="container-xxl px-4 mt-5">

            <div className="row py-5">
                <div className="col-12" >

                    <div className="rounded py-4 py-sm-5 overflow-hidden position-relative " style={{
                        backgroundImage: "url(images/hero.jpg)", backgroundPosition: "center center",
                        backgroundSize: "cover", backgroundRepeat: "no-repeat"
                    }}>


                        <div className="bg-overlay bg-dark opacity-5"></div>
                        <div className="p-4 p-sm-5 position-relative">
                            <div className="d-flex align-items-center mb-3">
                                <div className="avatar avatar-xxs me-2">
                                    <img className="avatar-img rounded-circle" src="images/avatar/01.jpg" alt="" />
                                </div>
                                <h6 className="mb-0"> <a className="text-white" href="#!"> Frances Guerrero </a> </h6>
                                <span className="ms-1 ms-sm-3 small text-white"> 156.9K views</span>
                            </div>
                            <h1 className="text-white">How does the stock market work?</h1>
                            <p className="text-white">Suspicion neglected he resolving agreement perceived at an. </p>
                            <a className="btn btn-primary stretched-link" href="video-details.html"> <i className="bi bi-file-earmark-play pe-1"></i>Watch now</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>






    )
}

export default Hero