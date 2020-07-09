import React from 'react';
import { Karen, KarenProps } from "./Karen";
import './karens.scss'

const sortRandom = () => {
	return 0.5 - Math.random()
}

export const Karens: React.FC<{ data: KarenProps[] }> = ({ data = [] }) => (
	<div className="karens-wrapper">
		{data.sort(sortRandom).map((karen: KarenProps) => (
			<Karen key={karen.name} {...karen} />
		))}
	</div>
)