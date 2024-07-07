import React,{useState} from 'react'
import styles from './movie.module.css'


export default function Character(props) {
  const[char,setchar]=useState('')
  const {data}=props;

  const mappedList=data.docs.filter(element=>{
    if(char=='')
      return true
    if(element['name'].includes(char))
      return true
    return false
  })
  return (
    <div className={styles.movieDashboard}>
      <input value={char}
      placeholder='Character name' onChange={(e)=>{setchar(e.target.value)}}></input>
      {mappedList.slice(0,20).map((char,index)=>{
        const Keys=Object.keys(char).filter(element=>{
          if(element=='name'||element=='_id'){
            return false
          }
          if(!char[element]){
            return false
          }
          return true
        })
        return(
          <div key={index} className={styles.info}>
            <h1>{char.name}</h1>
            {Keys.map(title=>{
              return (<div key={title}>
                <p>{title}: {char[title]}</p>
              </div>)
            })}
          </div>
        )
      })}
    </div>
  )
}
