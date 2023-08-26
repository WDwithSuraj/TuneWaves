import React, { useEffect, useState } from 'react'
import { Musicplayer } from '../../Components/Musicplayer'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Player() {

  const [song,setSong]=useState({})

  

  const {id} =useParams()
  console.log(id,"yyyyyyyyy")


  const getSong=()=>{
      axios.get(`http://localhost:8080/tuneWaves/songs/${id}` )
      .then((data)=>{
        //console.log(data.data.data.source)
        setSong(data.data.data)
      })
  }


useEffect(()=>{
getSong()
},[])
console.log(song,"this is song")


  return (
    <div>
      <Musicplayer source={song.source}/>
    </div>
  )
}

export default Player