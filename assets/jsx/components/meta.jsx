import React 	from 'react';
import Helmet 	from 'react-helmet';

export default class Meta extends React.Component {
	render() {
		return (
			<Helmet title={this.props.title} meta={[
				{"name": "description", "content": this.props.description},

				{"property": "og:title", "content": this.props.title},
				{"property": "og:description", "content": this.props.description},
				{"property": "og:image", "content": this.props.image},

				{"property": "twitter:card", "content": "summary"},
				{"property": "twitter:title", "content": this.props.title},
				{"property": "twitter:description", "content": this.props.description},
				{"property": "twitter:image", "content": this.props.image},
			]} />
		)
	}
}
