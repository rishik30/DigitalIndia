import React, { Component } from "react";

export class ProjectEklavya extends Component {
	render() {
		let projectEklavya
        if (this.props.data) {
            projectEklavya = this.props.data.projectEklavya
        } else {
            projectEklavya = "Our flagship effort is Project Eklavya which aims to build a modern day India in which Arjun and Eklavya, irrespective of their birth in different social strata, can learn and grow together in the same school. As part of this mission, our goal is to make RTE Section 12(1)(c) implementable across India by 2020, enrolling 1 million students and fostering inclusive practices across schools."
        }
		return (
			<section className="section project-eklavya">
				<div className="row">
					<div className="column">
						<div className="video">
							<iframe src="https://www.youtube.com/embed/nPVsBGpH3og" frameborder="0" width="350" height="350" />
						</div>
					</div>
					<div className="column">
						<h2>project <em>eklavya</em></h2>
						<p dangerouslySetInnerHTML={{__html: projectEklavya}}/>
						<button className="btn-opaque">read more</button>
					</div>
				</div>
			</section>
		);
	}
}
