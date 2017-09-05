import React, { Component } from "react";
import Svg from "../../components/svg.jsx";

export class Actions extends Component {
	_actions = [
		{
			icon: "/img/about/listen2.svg",
			title: "listen",
			text: "To all with an open and curious mind. It can be about small act of pausing long enough to 'listen' deeply to the other person"
		},
		{
			icon: "/img/about/act2.svg",
			title: "act",
			text: "With purpose, courage and commitment. It can be about small 'act' of taking risks to act in the face of uncertainity"
		},
		{
			icon: "/img/about/change2.svg",
			title: "change",
			text: "Innovate to grow. It can be about the small act of 'changing' one's own frame of looking at a difficult situation."
		}
	];

	render() {
		let title = (this.props.data) ? (this.props.data.coreActions.title) : "Our core actions define how we conduct ourselves in any scenario"
		if (this.props.data) {
			this._actions[0].text = this.props.data.coreActions.listen
			this._actions[1].text = this.props.data.coreActions.act
			this._actions[2].text = this.props.data.coreActions.change
		}
		return (
			<section className="actions">
				<h3>{title}</h3>
				<div className="row">
					{this._actions.map(action => {
						return (
							<div key={action.title} className="action">
								<Svg src={action.icon} />
								<h3>{action.title}</h3>
								<p dangerouslySetInnerHTML={{__html: action.text}} />
							</div>
						);
					})}
				</div>
			</section>
		);
	}
}
