import React from "react"
import { Karen, KarenProps } from "./Karen"
import "./karens.scss"

const sortRandom = () => {
  return 0.5 - Math.random()
}

export const Karens: React.FC<{ data: KarenProps[] }> = ({ data = [] }) => {
  const [randomKarens, setRandomKarens] = React.useState([])

  React.useEffect(() => {
    setRandomKarens(data.sort(sortRandom))
  }, [data]);

  if(!randomKarens.length) {
  	return <div className="karens-loading"><span>&hearts;</span></div>
	}

  return (
    <div className="karens-wrapper">
      {data.map((karen: KarenProps) => (
        <Karen key={karen.name} {...karen} />
      ))}
    </div>
  )
}
