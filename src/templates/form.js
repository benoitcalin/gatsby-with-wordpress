import React from "react"
import Layout from "../components/layout";

import 'flatpickr/dist/flatpickr.min.css';
import flatpickr from "flatpickr";

flatpickr("#myID", {
  mode: "range",
  minDate: "today"
})
export default class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    content: "",
  }
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.firstName} ${this.state.lastName}!`)
  }
  render() {
    return (
      <Layout>
        <div className="form-title">
          <h2 style={{margin: '50px 0'}}>Nous contacter</h2>
        </div>
        <div className='form-container'>
          <form
            className='row form-row'
            action="https://formspree.io/benoit.calin@gmail.com"
            method="POST"
          >
            <div className="col-12 col-md-6 form-group">
              <label>
                Prénom<span style={{ color: 'red' }}>*</span>
              </label>
              <input
                className="form-control"
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="col-12 col-md-6 form-group">
              <label>
                Nom<span style={{ color: 'red' }}>*</span>
              </label>
              <input
                className="form-control"
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="col-12 col-md-6 form-group">
              <label>
                Email<span style={{color: 'red'}}>*</span>
              </label>
              <input
                className="form-control"
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="col-12 col-md-6 form-group">
              <label>
                Téléphone
              </label>
              <input
                className="form-control"
                type="text"
                name="phone"
                value={this.state.phone}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="col-12 form-group">
              <label>
                Disponibilité
              </label>
              <input
                className="form-control"
                type="text"
                id='myID'
                name="disponibility"
                placeholder='Choisissez la période de votre choix'
                value={this.state.date}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="col-12 form-group">
              <label>
                Parlez-nous de votre projet
              </label>
              <textarea
                className="textarea"
                type="text"
                name="content"
                value={this.state.content}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="submit-zone">
              <p><span style={{ color: 'red' }}>*</span> Ces champs sont obligatoires</p>
              <div className='d-flex align-items-center' style={{marginBottom: '16px'}}>
                <input type="checkbox" name="CGU" required/>
                <p style={{ margin: '0 0 0 15px' }}>J'ai prix connaissance et accepte CGU.<span>*</span></p>
              </div>
              <button type="submit" className='btn button-primary'>ENVOYER</button>
            </div>
          </form>
        </div>
      </Layout>
    )
  }
}
