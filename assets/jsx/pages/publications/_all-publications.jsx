import React, { Component } from "react";

export class AllPublications extends Component {

	render() {
		console.log(this.props.active);
		return (
			<section className="all-publications">
				<ul className={"articles " + (this.props.active ? " active" : "")}>
					{this.props.data.map((article, i) => {
						return (
							<Publication
								key={i}
								picture={article.picture}
								title={article.title}
								description={article.description}
								link={article.link}
							/>);
					})}
				</ul>
			</section>
		);
	}
}

class Publication extends Component {
	render() {
		return (
			<article className="report">
				<div className="image">
					<img src={this.props.picture} />
				</div>
				<div className="content">
					<h4>{this.props.title}</h4>
					<p dangerouslySetInnerHTML={{__html: this.props.description}} />
					<a href={this.props.link} target="_blank">View Report</a>
				</div>
			</article>
		);
	}
}
