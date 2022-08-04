import React ,{useState}from 'react'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Display from '../components/Display'
import OptionsPanel from '../components/OptionsPanel'
export default function Home() {
  const[output , setOutput] = useState("") 

  return (
    <div className={styles.container}>
        <NavBar output={output} setOutput={setOutput}/>
        <Display output={output} setOutput={setOutput}/>
        <OptionsPanel/>
    </div>
  )
}
