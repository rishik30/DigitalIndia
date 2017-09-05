import React, { Component } from "react";

export class ProjectEklavya extends Component {
	render() {
		const { data } = this.props
		return (
			<section className="project-eklavya">
				<h2>Project Eklavya (2013 - Present)</h2>
				{ this._renderText(data) }
			</section>
		);
	}

	_renderText = (data) => {
		if (data) {
			return <p dangerouslySetInnerHTML={{__html: data.projectEklavya}} />
		} else {
			return (
				<div>
					<p>
						Our flagship effort is Project Eklavya which aims to build a modern day India in which Arjun and Eklavya, irrespective of their birth in different social strata, can learn and grow together in the same school. As part of this mission, our goal is to make RTE Section 12(1)(c) implementable across India by 2020, enrolling 1 million students and fostering inclusive practices across schools.
					</p>
					<br />
					<p>
						Project Eklavya has directly enrolled 6960 children over the last 3 years in Delhi. Through Project Eklavya Network(PEN), we are supporting social entrepreneurs in expanding the mission to all districts across India. This academic year, PEN has presence in Bangalore, Lucknow, Raipur and Pune and is aiming to directly enroll 20,000 children.
					</p>
				</div>
			)
		}
	}
}
