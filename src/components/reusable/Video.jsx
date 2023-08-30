import React from 'react'
import introVideo from "../../assets/video/ads_Dummy.mp4"
import "react-html5video/dist/styles.css"
import"../../pages/exploration/exploration.css"



const video = () => {
  return (
    

    <video  className='video' autoPlay loop> 
      <source src={introVideo} type='video/webm'></source>
    </video>
  )
}

export default video