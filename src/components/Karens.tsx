import React from 'react';
import { Karen, KarenProps } from "./Karen";
import './karens.scss'

export const Karens: React.FC<{ data: KarenProps[] }> = ({ data = [] }) => (
	<div className="karens-wrapper">
		{data.map((karen: KarenProps) => (
			<Karen key={karen.name} {...karen} />
		))}
	</div>
)