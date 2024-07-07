import React, {useState} from 'react'
import styles from './dashboard.module.css'
import Options from './Options';
import useFetchData from '../hooks/useFetchData';
import Movie from './Movie';
import Character from './Character';
import Books from './Books';
import Loader from './Loader';


export default function Dashboard() {
  const [selection,setSelection]=useState(null);
 const {data,loading,error}=useFetchData(selection)

  function handleclick(buttonClicked){
    return ()=>{
    setSelection(buttonClicked)
    }
  }
  const dataRender={
    'character': <Character data={data}/>,
    'movie':<Movie data={data}/>,
    'book':<Books data={data}/>,
  }

  return (
    <div  className={styles.dashboard}>
      <div className={styles.layout}>
        <h1 >LOTR LORE</h1>
      <Options selection={selection} setSelection={handleclick}  />
      {loading && (
       <Loader/>
      )}
      {(data && !loading) && (
        dataRender[selection]
      )}
      </div>
     </div>
  )
}

