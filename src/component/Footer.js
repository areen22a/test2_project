import React from 'react'

function Footer() {
    return (
        <div className="container-xxl px-4 mt-5 mb-4">

            <div className="bg-body rounded p-4">
                <div className="row text-dark">
                    <div className="col-8">

                        <ul class="nav lh-1">
                            <li class="nav-item">
                                <a class="nav-link ps-0" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Support</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Docs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " >Privacy & Terms</a>
                            </li>
                        </ul>
                        <p className='mb-0 mt-4'>
                            © 2023 Webistica All rights reserved Supposing so be resolving breakfast am or perfectly. Is drew am hill from
                            me. Valley by oh twenty direct me so. Departure defective arranging rapturous did believe him all had supported.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex justify-content-md-end">
                            <a href="#"><img className="h-50px" src="images/Appstore.webp" alt="app-store" /></a>
                            <a href="#"><img className="h-50px ms-2" src="images/Playstore.webp" alt="google-play" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer