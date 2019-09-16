import React from "react"
import { Link } from 'gatsby';

import Layout from "../components/layout"
import Card from "../components/card"

export default class Jobs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      jobs: this.props.pageContext.jobs.sort((a, b) => a.node.jobs.slug > b.node.jobs.slug ? 1 : -1)
    };
  }

  handleChange = event => {
    const target = event.target
    const value = target.value
    this.setState({
      query: value,
      jobs: this.filterJobs(value),
    })
  }

  filterJobs = (query) => {
    return this.props.pageContext.jobs.filter(job => {
      return job.node.jobs.slug.includes(query.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase())
    })

  }

  setContent = (jobs) => {
    if (jobs.length > 0) {
      return this.state.jobs.map((job) => <Card job={job} key={job.node.jobs.slug} />)
    } else {
      return (
        <p className='text-center' style={{width: '90%', marginTop:'20px'}}>
          Vous n'avez pas trouvé le métier qui vous intéresse ? <Link to='/contact'>Contactez-nous</Link>
        </p>
      )
    }
  }

  render() {
    return (
      <Layout>
        <div>
          <div className="follow-up-links">
            <div>
              <Link to='/'>Accueil</Link> > <span>Nos Métiers</span>
            </div>
          </div>
          <div className="jobs-container">
            <h2>Trouvez le métier qui vous intéresse</h2>
            <input
              className='form-control search-bar effect-12'
              onChange={this.handleChange}
              placeholder="Rechercher un métier"
            />
            <div className="flex-container">
              {this.setContent(this.state.jobs)}
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-12 card-col">
                <Link to='/form'>
                  <div className="additionnal-card">
                    <h6>Le métier de vos rêves ne figure pas dans la liste ? Cliquez ici !</h6>
                  </div>
                </Link>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-12 card-col">
                <Link to='/form'>
                  <div className="additionnal-card">
                    <h6>Vous souhaitez changer de métier mais vous ne savez pas vers quoi ? Cliquez ici et discutons-en !</h6>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
