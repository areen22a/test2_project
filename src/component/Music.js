import React from 'react'
import { getMusic } from '../api/music'
import {
    useQuery
  } from '@tanstack/react-query'

const Music = () => {
    const {data, isLoading, error} = useQuery({ queryKey: ['music'], queryFn: getMusic })
    if(isLoading) console.log("loading")
    if(data) console.log(data)
    if(error) console.log("error", error)

    const getVideoIdFromLink = (link) => {
        let videoId = '';
        const url = new URL(link);
      
        if (url.hostname === 'www.youtube.com' || url.hostname === 'youtube.com') {
          if (url.search) {
            const params = new URLSearchParams(url.search);
            videoId = params.get('v');
          } else {
            videoId = url.pathname.split('/').pop();
          }
        } else if (url.hostname === 'youtu.be') {
          videoId = url.pathname.substr(1);
        }
        const embedUrl = `https://www.youtube.com/embed/${videoId}`;
        return embedUrl;
      };

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
            {data && data.map((music) => (
            <div className="col" key={music.link}>
            <div className="card">

                <div className="card-image">
                <iframe
                // width="560"
                // height="315"
                src={getVideoIdFromLink(music.link)}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                ></iframe>

                            <div className="play-icon position-absolute top-50 start-50 translate-middle" onClick={(e) => playVideo(e)}> <a className=" icon-md bg-danger text-white rounded-circle" href="video-details.html"> <i class="bi bi-play-fill fs-5"> </i> </a>
                        </div>
                        <div className="position-absolute bottom-0 start-0 p-3 d-flex w-100">
                            <span className="bg-dark bg-opacity-50 px-2 rounded text-white small">{music.Duration}</span>
                            <span className="bg-dark bg-opacity-50 px-2 rounded text-white small ms-auto heart"><i className="fa-solid fa-heart" onClick={(e) => addToFavorite(e)}></i></span>
                        </div> 
                    </div>

                    <div className="card-body">
                        <h3 className="card-title fs-6">{music.title}</h3>
                        <span className="small"> {music.views}</span>
                    </div>
                </div>
                </div>
                ))}
              
            
            </div>

        </div>

    )
}

export default Music