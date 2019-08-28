import React from "react"
import { Link } from 'gatsby';

import Layout from "../components/layout"
import Card from "../components/card"

export default class Jobs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      jobs: this.props.pageContext.jobs
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
              placeHolder="Rechercher un métier"
            />
            <div className="flex-container">
              {this.state.jobs.map((job) => <Card job={job} key={job.node.jobs.slug} />)}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
