import React from 'react'


const Music = () => {

    // Start Play Video
    const playVideo = (e) =>  {
        e.target.parentElement.parentElement.querySelector('.card-img-top').play()
        e.target.parentElement.parentElement.querySelector('.play-icon').style.backgroundColor = 'red'
    }

    // Add To Favorite 
    const addToFavorite = (e) =>  {
        e.target.style.color = 'red'
    }


    return (

        <div className="container-xxl px-4">

            <div className="row row-cols-2 py-4">
                <div className="col">
                    <h3 className=''>Music</h3>
                </div>
                <div className="col text-end">
                </div>
            </div>

            <div className="row row-col-5">

                <div className="col">
                    <div className="card">

                        <div className="card-image">
                        <iframe
                // width="560"
                // height="315"
                src="https://www.youtube-nocookie.com/embed/qnqTkoPm2yU?si=eTkmmVpDveijS5vt"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>

                                <div className="play-icon position-absolute top-50 start-50 translate-middle" onClick={(e) => playVideo(e)}> <a className=" icon-md bg-danger text-white rounded-circle" href="video-details.html"> <i class="bi bi-play-fill fs-5"> </i> </a>
                            </div>
                            <div className="position-absolute bottom-0 start-0 p-3 d-flex w-100">
                                <span className="bg-dark bg-opacity-50 px-2 rounded text-white small">03:45</span>
                                <span className="bg-dark bg-opacity-50 px-2 rounded text-white small ms-auto heart"><i className="fa-solid fa-heart" onClick={(e) => addToFavorite(e)}></i></span>
                            </div> 
                        </div>

                        <div className="card-body">
                            <h3 className="card-title fs-6">New movie trailers (2021 -2022) September</h3>
                            <span className="small"> 325.1K views</span>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">

                        <div className="card-image">

                            <video  src="images/music/12.mp4" alt="" className="card-img-top" />
                                <div className="play-icon position-absolute top-50 start-50 translate-middle" onClick={(e) => playVideo(e)}><i className="fa-solid fa-play"></i> </div>
                            <div className="position-absolute bottom-0 start-0 p-3 d-flex w-100">
                                <span className="bg-dark bg-opacity-50 px-2 rounded text-white small">03:45</span>
                                <span className="bg-dark bg-opacity-50 px-2 rounded text-white small ms-auto heart"><i className="fa-solid fa-heart" onClick={(e) => addToFavorite(e)}></i></span>
                            </div> 
                        </div>

                        <div className="card-body">
                            <h3 className="card-title fs-6">New movie trailers (2021 -2022) September</h3>
                            <span className="small"> 325.1K views</span>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">

                        <div className="card-image">

                            <video  src="images/music/11.mp4" alt="" className="card-img-top" />
                                <div className="play-icon position-absolute top-50 start-50 translate-middle" onClick={(e) => playVideo(e)}><i className="fa-solid fa-play"></i> </div>
                            <div className="position-absolute bottom-0 start-0 p-3 d-flex w-100">
                                <span className="bg-dark bg-opacity-50 px-2 rounded text-white small">03:45</span>
                                <span className="bg-dark bg-opacity-50 px-2 rounded text-white small ms-auto heart"><i className="fa-solid fa-heart" onClick={(e) => addToFavorite(e)}></i></span>
                            </div> 
                        </div>

                        <div className="card-body">
                            <h3 className="card-title fs-6">New movie trailers (2021 -2022) September</h3>
                            <span className="small"> 325.1K views</span>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">

                        <div className="card-image">

                            <video  src="images/music/12.mp4" alt="" className="card-img-top" />
                                <div className="play-icon position-absolute top-50 start-50 translate-middle" onClick={(e) => playVideo(e)}><i className="fa-solid fa-play"></i> </div>
                            <div className="position-absolute bottom-0 start-0 p-3 d-flex w-100">
                                <span className="bg-dark bg-opacity-50 px-2 rounded text-white small">03:45</span>
                                <span className="bg-dark bg-opacity-50 px-2 rounded text-white small ms-auto heart"><i className="fa-solid fa-heart" onClick={(e) => addToFavorite(e)}></i></span>
                            </div> 
                        </div>

                        <div className="card-body">
                            <h3 className="card-title fs-6">New movie trailers (2021 -2022) September</h3>
                            <span className="small"> 325.1K views</span>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">

                        <div className="card-image">

                            <video  src="images/music/11.mp4" alt="" className="card-img-top" />
                                <div className="play-icon position-absolute top-50 start-50 translate-middle" onClick={(e) => playVideo(e)}><i className="fa-solid fa-play"></i> </div>
                            <div className="position-absolute bottom-0 start-0 p-3 d-flex w-100">
                                <span className="bg-dark bg-opacity-50 px-2 rounded text-white small">03:45</span>
                                <span className="bg-dark bg-opacity-50 px-2 rounded text-white small ms-auto heart"><i className="fa-solid fa-heart" onClick={(e) => addToFavorite(e)}></i></span>
                            </div> 
                        </div>

                        <div className="card-body">
                            <h3 className="card-title fs-6">New movie trailers (2021 -2022) September</h3>
                            <span className="small"> 325.1K views</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Music