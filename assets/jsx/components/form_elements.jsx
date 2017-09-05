import React, {Component} from 'react';

export class LineInput extends Component {

    render() {
        return(
            <div className="line-input">
                <label>{this.props.label}</label>
                <input placeholder={this.props.placeholder} value={this.props.value} onChange={e=>this.props.onChange(e.target.value)}/>
            </div>
        )
    }
}

export class MultiLineInput extends Component {

    render() {
        return(
            <div className="multi-line-input">
                <label>{this.props.label}</label>
                <textarea placeholder={this.props.placeholder} value={this.props.value} onChange={e=>this.props.onChange(e.target.value)}></textarea>
            </div>
        )
    }
}
