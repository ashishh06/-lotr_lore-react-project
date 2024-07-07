import React from 'react'
import styles from './movie.module.css'

export default function Movie(props) {
  const {data}=props;
  return (
    <div className={styles.movieDashboard}>
      {data.docs.map((movie,index)=>{
        const Keys=Object.keys(movie).filter(element=>{
          if(element=='name'||element=='_id'){
            return false
          }
          return true
        })
        return(
          <div key={index}>
            <h1>{movie.name}</h1>
            {Keys.map(title=>{
              return (<div key={title} >
                <p>{title}: {movie[title]}</p>
              </div>)
            })}
          </div>
        )
      })}
    </div>
  )
}
