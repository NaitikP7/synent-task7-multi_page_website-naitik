import React, { useRef } from 'react'
import '../styles/services.css'

const Card = (props) => {
  const videoRef = useRef(null)

  const handleClick = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      video.play()
    } else {
      video.pause()
    }
  }

  return (
    <div className="premium-card" onClick={handleClick}>
      <video
        ref={videoRef}
        src={props.video.src}
        muted
        autoPlay
        loop
        playsInline
        className="premium-card__video"
      />
      <span className="premium-card__title">{props.video.title}</span>
    </div>
  )
}

export default Card