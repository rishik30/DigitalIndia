import React, {Component} from 'react'
import {LineInput, MultiLineInput} from '../../components/form_elements.jsx'

export class Form extends Component {

    state = {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        comments: ""
    }

    render() {
        return(
            <div className="form">
                <p>Fill out the form below, and an Indus Action representative will get back to you</p>
                <form>
                    <LineInput
                        label="First Name"
                        placeholder="First Name"
                        value={this.state.firstName}
                        onChange={val=>this.setState({firstName: val})}
                    />
                    <LineInput
                        label="Last Name"
                        placeholder="Last Name"
                        value={this.state.lastName}
                        onChange={val=>this.setState({lastName: val})}
                    />
                    <br/>
                    <LineInput
                        label="Email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={val=>this.setState({email: val})}
                    />
                    <LineInput
                        label="Phone No"
                        placeholder="Phone"
                        value={this.state.phone}
                        onChange={val=>this.setState({phone: val})}
                    />
                    <br/>
                    <MultiLineInput
                        label="How would you like to get involved ?"
                        placeholder="I would like to be involved in ..."
                        value={this.state.comments}
                        onChange={val=>this.setState({comments: val})}
                    />
                    <button className="submit-btn" type="button" onClick={this._onSubmit}>Submit</button>
                </form>
            </div>
        )
    }

    _onSubmit = (e) => {
        e.preventDefault();
        let errors = this._errors()
        if(errors) {
            document.dispatchEvent(new CustomEvent("activateModal", {detail: <ErrorModal data={errors}/>}))
            return
        }
        else this._submit()
    }

    _submit = () => {
        console.log('SUBMITTING');
        var request 	= new XMLHttpRequest();
		var formData 	= new FormData();

		formData.append('fname', 				this.state.firstName);
		formData.append('lname', 				this.state.lastName);
		formData.append('phone',				this.state.phone);
		formData.append('email',				this.state.email);
		formData.append('comments', 			this.state.comments);

        for (var key of formData.entries()) {
            console.log(key[0] + ', ' + key[1]);
        }
        request.open("POST", "/contact")
        request.onload = function(data) {
            document.dispatchEvent(new CustomEvent("activateModal", {detail: <SuccessModal/>}))
            this.setState({
                firstName: "",
                lastName: "",
                phone: "",
                email: "",
                comments: ""
            })
        }.bind(this)
        request.send(formData)
    }

    _errors = () => {
        let errors = []
        if(this.state.firstName === "") errors.push("First Name missing")
        if(this.state.lastName === "") errors.push("Last Name missing")
        if(this.state.phone === "") errors.push("Phone missing")
        if(this.state.comments === "") errors.push("Comments missing")
        if(this.state.email === "") errors.push("Email missing")
        else if(!this._emailValidate(this.state.email)) errors.push("Invalid Email")
        if(errors.length > 0) return errors
    		else return null
    	}

	_emailValidate = (email) => {
        var re =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
}

class ErrorModal extends Component {

    render() {
        return(
            <article>
        		<div className="modal-header">
        			<h2>Looks like there's some errors</h2>
        		</div>
        		<ul className="error-list">
        			{this.props.data.map((error, i) => {
        				return <li key={i} className="error">{error}</li>
        			})}
        		</ul>
        	</article>
        )
    }
}

class SuccessModal extends React.Component {
    render() {
        return(
            <article className="success-modal">
                <h2> Thank You !</h2>
                <p>Your response has been recorded. We will get back to you soon !</p>
            </article>
        )
    }
}
