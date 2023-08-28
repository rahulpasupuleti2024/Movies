import React from 'react'
import Axios from "axios"
import { API_KEy } from './Api'
import { imageUrl } from './Api'
import "./App.css"
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"

function NetflixOriginal() {

    const[originalsData, setOriginalsData] = React.useState([])
    const[myId, setMyId] = React.useState("")

     React.useEffect(function(){
       Axios.get(`https://api.themoviedb.org/3/discover/tv/?api_key=${API_KEy}&with_network=123`)
         .then(function(output){
            setOriginalsData(output.data.results);
        })
        .catch(function(error){
            console.log(error)
       })
     }, [])

     function handleClick(movieData){
      
        const movieName= movieData.name
        movieTrailer(movieName)
        .then(function(output){
          setMyId(new URLSearchParams(new URL(output).search).get("v"))
        })
        .catch(function(error){
         console.log(error)
        })
     }
  return (
    <div>
        <h2 style={{color:"white"}}>NETFLIX ORIGINALS</h2>
    <div className='allImages'>
        {
            originalsData.map(function(info){
                console.log(info)
                return <img width="250px" height="250px" src={imageUrl+info.poster_path} onClick={()=>handleClick(info)}/>
            })

            
        }
        </div>
       {myId ? <Youtube videoId={myId}/> : null}
    </div>
  )
}

export default NetflixOriginal