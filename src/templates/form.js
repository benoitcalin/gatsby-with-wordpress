import React from "react"
import Layout from "../components/layout";

import 'flatpickr/dist/flatpickr.min.css';
import flatpickr from "flatpickr";

export default class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    content: "",
    job: "",
  }
  displayInput = () => {
    if (this.props.location.state) {
      if (this.props.location.state.prof) {
        return "col-12 col-md-6 form-group"
      } else { return "col-12 col-md-6 form-group d-none" }
    } else { return "col-12 col-md-6 form-group d-none" }
  }
  displayContent = () => {
    if (this.props.location.state) {
      if (this.props.location.state.prof) {
        return(
          <h5>
            VOUS SOUHAITEZ FAIRE DÉCOUVRIR VOTRE MÉTIER ET DONNER LA CHANCE AUX PERSONNES INTÉRESSÉES DE DÉCOUVRIR VOTRE SAVOIR-FAIRE, OU DE SE RECONVERTIR DANS VOTRE MÉTIER, ALORS C'EST ICI !
          </h5>
        )
      } else if (this.props.location.state.pack) {
        return (
          <h5>
            VOUS SOUHAITEZ TESTER LE MÉTIER SUIVANT : <strong style={{ color: '#3EAAF4' }}>{this.props.location.state.job}</strong>
            <br />
            AVEC LE <strong style={{ color: '#3EAAF4' }}>{this.props.location.state.pack}</strong> POUR UNE DURÉE DE <strong style={{ color: '#3EAAF4' }}>{this.props.location.state.duration}</strong>
          </h5>
        )
      }
    }
  }
  // setValue = (type) => {
  //   if (this.props.location.state) {
  //     return this.props.location.state[type]
  //   } else {
  //     return ""
  //   }
  // }
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
    flatpickr("#myID", {
      mode: "range",
      minDate: "today"
    })
  }
  render() {
    return (
      <Layout>
        <div className="form-header">
          <div className="form-title">
            <h2 style={{margin: '50px 0'}}>Nous contacter</h2>
          </div>
          <div className="form-subtitle">
            {this.displayContent()}
            {/*  */}
          </div>
          <div className="form-subtitle">
            {/*  */}
          </div>
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
            <div className={this.displayInput()}>
              <label>
                Profession
              </label>
              <input
                className="form-control"
                type="text"
                name="job"
                value={this.state.job}
                onChange={this.handleInputChange}
              />
            </div>
            {/* <div className={this.displayInput()}>
              <label>
                Métier choisi
              </label>
              <input
                className="form-control"
                type="text"
                name="choosenJob"
                value={this.setValue('job')}
                readOnly
              />
            </div>
            <div className={this.displayInput()}>
              <label>
                Durée souhaitée
              </label>
              <input
                className="form-control"
                type="text"
                name="duration"
                value={this.setValue('duration')}
                readOnly
              />
            </div> */}
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
              <div className='d-flex align-items-center' style={{marginBottom: '16px'}}>
                <input type="checkbox" name="CGU" required/>
                <p style={{ margin: '0 0 0 15px' }}>J'ai pris connaissance et accepte les CGU <span style={{ color: 'red' }}>*</span></p>
              </div>
              <p><span style={{ color: 'red' }}>*</span> Ces champs sont obligatoires</p>
              <button type="submit" className='btn button-primary'>ENVOYER</button>
            </div>
          </form>
        </div>
      </Layout>
    )
  }
}
