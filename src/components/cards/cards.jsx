import { React } from 'react'
import './card.css'

function Cards(props) {
	return (
		<div className="col-md-3 animated">
			<div className="card card-margin">
				<img src={props.picture} className="card-img-top card-image" alt="..."></img>
			</div>
			<div className="card-content">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">{props.location}</p>
			</div>
		</div>
	)
}

export default Cards