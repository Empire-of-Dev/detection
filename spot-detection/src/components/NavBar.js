import React,{useState,useEffect}from 'react'
import styles from '../styles/NavBar.module.css'
export default function NavBar(props) {

  const {output,setOutput} = props


  const[imgBase64 , setImgBase64] = useState({
    imgEncode:""
  })
  
  const[encode , setEncode] = useState("") 
 
  function sendImg(e){  
    const file = e.files[0]
    convertBase64(file)    

    /*
    fetch("http://127.0.0.1:5000/", {
        method:'POST',
       
        headers: {
            'Content-Type':'application/json',
            
        }, 
        body:JSON.stringify({"imgEncode":encode})
        
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
       
        
    }) */
  }
  
  const convertBase64 = (file) => {
   
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        setEncode(fileReader.result)
      }
     
   
  }

  

  useEffect(()=>{
    if (encode != ""){
      fetch("http://localhost:5000/sendimg", {
          method:'POST',
        
          headers: {
              'Content-Type':'application/json',
              
          }, 
          body:JSON.stringify({"imgEncode":encode})
          
      })
      .then(response => response.json())
      .then(data => {
          setOutput(data)
            
      }) 
    }
  },[encode])

  

 
  return (
    <div className={styles.container}>
      
        <li>
            <input type="file" id="file-open" onChange={(e) => sendImg(e.target)} accept="image/*" />
            <label for="file-open">New Image</label>  
        </li>
            
        <li class="save">
            <a href="/test_download.txt" download="test">Save</a>             
        </li>
        <li>
          
          
        </li>
        
    </div>
  )
}
