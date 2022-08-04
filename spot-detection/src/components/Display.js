import React from 'react'
import DragAndZoom from 'react-drag-and-zoom'
import styles from '../styles/Display.module.css'
export default function Display(props) {
  const {output,setOutput} = props

  console.log(output)
  return (
    <div className={styles.container}>
        <div className={styles.output}>
    
        {output === "" && 
          <div>please select image</div>
        }
        {output != "" && 
        <DragAndZoom zoomStep={10}>
          <div>
            <img src={`data:image/png;base64,${output}`} />
          </div>
          
        </DragAndZoom>
        }
        
            
        </div>
    </div>
  )
}
