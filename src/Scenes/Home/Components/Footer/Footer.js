import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
	render() {
		return (
			<footer className="Footer">
				<div className="author">
				</div>
				<div className="author">
					<a href="https://www.linkedin.com/in/guillaume-querr%C3%A9-07965883/" target="_blank" rel="noopener noreferrer">
						<i className="far fa-copyright fa-flip-horizontal"></i> 2018 gquerre
					</a>
				</div>
				<div className="github">
					<a href="https://github.com/42gq" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-github">GitHub</i>
					</a>
				</div>
			</footer>	
		)
	}
}

export default Footer