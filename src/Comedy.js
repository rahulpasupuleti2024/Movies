import React from 'react'
import Axios from "axios"
import { API_KEy } from './Api'
import { imageUrl } from './Api'
import "./App.css"

function Comedy() {

    const[originalsData, setOriginalsData] = React.useState([])

     React.useEffect(function(){
       Axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEy}&with_genres=35`)
         .then(function(output){
            setOriginalsData(output.data.results);
        })
        .catch(function(error){
            console.log(error)
       })
     }, [])
  return (
    <div>
        <h2 style={{color:"white"}}>COMEDY MOVIES</h2>
    <div className='allImages'>
        {
            originalsData.map(function(info){
                console.log(info)
                return <img width="250px" height="250px" src={imageUrl+info.poster_path}/>
            })

            
        }
        </div>
    </div>
  )
}

export default Comedy