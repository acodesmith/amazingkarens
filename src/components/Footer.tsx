import React from 'react';
import './footer.scss';

export const Footer: React.FC = () => (
	<footer className="main">
		<span>© {new Date().getFullYear()}, ACODESMITH</span>
		<span>By Karen Hodge &amp; <a href="https://acodesmith.com">Adam Smith</a>
		<a className="rounded bg-blue-900 text-blue-100 px-2 py-1 mx-2 text-xs" href="https://www.buymeacoffee.com/acodesmith">Buy Us a Beer 🍺!</a>
		</span>
	</footer>
)