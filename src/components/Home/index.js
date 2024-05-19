import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'
const teamsApiUrl = 'https://apis.ccbp.in/ipl'
class Home extends Component {
  state = {isLoader: true, iplDashBoard: []}
  componentDidMount() {
    this.dashBoard()
  }
  dashBoard = async () => {
    const response = await fetch(teamsApiUrl)
    const data = await response.json()
    const fetchedData = data.teams.map(team => ({
      name: team.name,
      id: team.id,
      teamImageUrl: team.team_image_url,
    }))
    this.setState({iplDashBoard: fetchedData, isLoader: false})
  }
  renderDashboard = () => {
    const {iplDashBoard} = this.state
    return (
      <ul className="unorder-list">
        {iplDashBoard.map(team => (
          <TeamCard teamDash={team} key={team.id} />
        ))}
      </ul>
    )
  }
  renderLogo = () => (
    <div data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )
  render() {
    const {isLoader} = this.state
    return (
      <div className="bg-container">
        <div className="cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="image"
          />
          <h1 className="main-heading">IPL Dashboard</h1>
          {isLoader ? this.renderLogo() : this.renderDashboard()}
        </div>
      </div>
    )
  }
}
export default Home
