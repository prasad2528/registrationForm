// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isShowResult: false,
    firstNameErrorMsg: false,
    lastNameErrorMsg: false,
  }

  onShowResult = () => {
    this.setState({
      isShowResult: true,
      firstNameErrorMsg: false,
      lastNameErrorMsg: false,
    })
    this.renderResultContainer()
  }

  onSubmitForm = event => {
    const {firstName, lastName} = this.state
    event.preventDefault()
    console.log('submited')
    if (firstName === '' && lastName === '') {
      this.handleFirstNameBlur()
      this.handleLastNameBlur()
    } else if (firstName === '' && lastName !== '') {
      this.handleFirstNameBlur()
    } else if (firstName !== '' && lastName === '') {
      this.handleLastNameBlur()
    } else {
      this.onShowResult()
    }
  }

  onChangeFirstName = event => {
    const {firstName} = this.state
    this.setState({firstName: event.target.value})
    console.log(firstName)
  }

  onChangeLastName = event => {
    const {lastName} = this.state
    this.setState({lastName: event.target.value})
    console.log(lastName)
  }

  handleFirstNameBlur = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({firstNameErrorMsg: true})
    } else {
      this.setState({firstNameErrorMsg: false})
    }
  }

  handleLastNameBlur = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({lastNameErrorMsg: true})
    } else {
      this.setState({lastNameErrorMsg: false})
    }
  }

  renderFormCard = () => {
    const {firstNameErrorMsg, lastNameErrorMsg} = this.state
    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        <label htmlFor="firstName" className="labels">
          FIRST NAME
        </label>
        <br />
        <input
          type="text"
          id="firstName"
          className={`inputs ${firstNameErrorMsg ? 'error-msg' : 'normal'}`}
          onChange={this.onChangeFirstName}
          onBlur={this.handleFirstNameBlur}
        />
        {firstNameErrorMsg && <p className="error">Required</p>}
        <br />
        <label htmlFor="lastName" className="labels">
          LAST NAME
        </label>
        <br />
        <input
          type="text"
          id="lastName"
          className={`inputs ${lastNameErrorMsg ? 'error-msg' : 'normal'}`}
          onChange={this.onChangeLastName}
          onBlur={this.handleLastNameBlur}
        />
        {lastNameErrorMsg && <p className="error">Required</p>}
        <br />
        <div className="button-container">
          <button className="button" type="submit">
            Submit
          </button>
        </div>
      </form>
    )
  }

  onClickSubmitAnotherResponse = () => {
    this.setState(prevState => ({
      isShowResult: !prevState.isShowResult,
      firstName: '',
      lastName: '',
    }))
  }

  renderResultContainer = () => (
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="logo"
      />
      <p className="result">Submitted Successfully</p>
      <button
        type="button"
        className="response-button"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isShowResult} = this.state
    console.log(isShowResult)
    return (
      <div className="bg-container">
        <h1 className="heading">Registration</h1>
        <div className="card-container">
          {isShowResult ? this.renderResultContainer() : this.renderFormCard()}
        </div>
      </div>
    )
  }
}
export default RegistrationForm
