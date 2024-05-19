import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
const teamMatchesApiUrl = 'https://apis.ccbp.in/ipl/:id'
class TeamMatches extends Component {
  state = {iplData: {}, isLoader: true}
  componentDidMount() {
    this.publishedDataIpl()
  }
  getFormattedData = each => ({
    umpires: each.umpires,
    result: each.umpires,
    manoftheMatch: each.man_of_the_match,
    id: each.id,
    date: each.date,
    venue: each.venue,
    competingTeam: each.competing_team,
    competingTeamLogo: each.competing_team_logo,
    matchStatus: each.match_status,
  })
  publishedDataIpl = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`${teamMatchesApiUrl}${id}`)
    const data = await response.json()
    const formatttedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetais: this.getFormattedData(data.latest_match_details),
      recentMatches: data.recent_matches.map(each =>
        this.getFormattedData(each),
      ),
    }
    this.setState({iplData: formatttedData, isLoader: false})
  }
  renderLogos = () => {
    const {iplData} = this.state
    const {recentMatches} = iplData
    return (
      <ul className="unorder-list">
        {recentMatches.map(each => (
          <MatchCard teamDetails={each} key={each.id} />
        ))}
      </ul>
    )
  }
  recentLatestIpl = () => {
    const {iplData} = this.state
    const {teamBannerUrl, latestMatchDetais} = iplData
    return (
      <div className="contai">
        <img src={teamBannerUrl} alt="team banner" className="team-image" />
        <h1 className="main-heading">Latest Matches</h1>
        <LatestMatch latestMatchDetails={latestMatchDetais} />
        {this.renderLogos()}
      </div>
    )
  }
  getRouteIpl = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SRH':
        return 'srh'
      case 'DC':
        return 'dc'
    }
  }
  render() {
    const {isLoader} = this.state
    const backgroundDashboard = this.getRouteIpl()
    return (
      <div className={backgroundDashboard}>
        {isLoader ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.recentLatestIpl()
        )}
      </div>
    )
  }
}
export default TeamMatches
