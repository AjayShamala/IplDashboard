import './index.css'
const MatchCard = props => {
  const {teamDetails} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = teamDetails
  const renderTeam = status => (status === 'Won' ? 'match-won' : 'match-lost')
  const teamRender = `match ${renderTeam(matchStatus)}`
  return (
    <li className="containersss">
      <img
        src={competingTeamLogo}
        alt={`competingTeam ${competingTeam}`}
        className="imgs"
      />
      <p className="par">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={teamRender}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
