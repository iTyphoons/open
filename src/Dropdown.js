import React from 'react'
import Repository from './Repository'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import {
  Route,
  Link
} from 'react-router-dom'

const Repositories = ({ match, data }) => {
  const {allRepositories} = data
  return (
    <nav className="nav">
      <div className="dropdown">
        <a className="dropdown-label" href="#">Select a Repo <span className="icon-expand"></span></a>
        <ul>
          {allRepositories ? allRepositories.map((repo) => (
            <li key={repo.name}>
              <Link to={`/repos/${repo.name}/${repo.id}`}>
                {repo.name}
              </Link>
            </li>
          )): <li></li>}
        </ul>
      </div>
    </nav>
  );
}

const AllRepoQuery = gql`
 query {
    allRepositories {
      id
      name
    }
  }
`
const RepositoriesWithData = graphql(AllRepoQuery)(Repositories)

export default RepositoriesWithData
