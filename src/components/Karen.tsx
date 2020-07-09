import React from "react"
import "./karen.scss"

export interface KarenProps {
  name: string
  description: string
  link: string
  imgSrc: string
}

export const Karen = ({ name, description, link, imgSrc }) => {
  return (
    <article className="karen text-gray-800 overflow-hidden">
      <div className="content-wrapper">
        <figure className="pic">
          <img src={imgSrc} />
        </figure>
        <div className="content flex flex-col">
          <h3>{name}</h3>
          <p className="mb-2 flex-1">{description}</p>
          <a
            target={'_blank'}
            href={link}
            className={'font-bold block text-right'}
          >
            View on Wikipedia
          </a>
        </div>
      </div>
    </article>
  )
}
