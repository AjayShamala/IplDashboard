 import './index.css'
const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manoftheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails
  return (
    <div className="container">
      <div className="contain">
        <p className="para">{competingTeam}</p>
        <p className="para">{date}</p>
        <p className="venue">{venue}</p>
        <p className="pars">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`competingTeam ${competingTeam}`}
        className="img"
      />
      <div className="first-container">
        <p className="par">First Innings</p>
        <p className="inning">{firstInnings}</p>
        <p className="par">second Innings</p>
        <p className="inning">{secondInnings}</p>
        <p className="par">Man Of The Match</p>
        <p className="inning">{manoftheMatch}</p>
        <p className="par">Umpires</p>
        <p className="inning">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
here
