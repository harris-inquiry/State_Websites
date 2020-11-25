import React from "react"
import Image from "../components/image"

import style from "../styles/imageCard.module.scss"

const ImageCard = ({imageName, children, ...rest}) => {
  return (
    <div className={style.imageCard} {...rest}>
      <Image className={style.image} imageName={imageName} imgStyle={{ objectPosition:"bottom"}} />
      <div className={`${style.imageText} imageText`} >
        {children}
      </div>
    </div>
  )
}


export default ImageCard
