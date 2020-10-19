import React from "react"
import Image from "../components/image"

import style from "../styles/imageCard.module.scss"

const ImageCard = ({imageName, title, children, ...rest}) => {
  return (
    <div className={style.imageCard} {...rest}>
      <Image className={style.image} imageName={imageName} imgStyle={{ objectPosition:"bottom"}} />
      <div className={style.imageText} >
        <h4>{title}</h4>
        {children}
        <button>Learn More</button>
      </div>
    </div>
  )
}


export default ImageCard
