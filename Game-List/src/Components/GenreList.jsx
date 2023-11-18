import React, { useEffect } from 'react'
import GlobalApi from '../Services/GlobalApi'

function GenreList() {
    useEffect(()=>{
        getGenreList();
    },[])
    const getGenreList=()=>{
        GlobalApi.getGenreList((resp)=>{
            console.log(resp);
        })
    }
  return (
    <div>GenreList</div>
  )
}

export default GenreList