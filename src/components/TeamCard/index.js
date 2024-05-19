import {Link} from 'react-router-dom'
import './index.css'
const TeamCard = props => {
  const {teamDash} = props
  const {name, id, teamImageUrl} = teamDash
  return (
    <li className="ipl-container">
      <Link to={`/team-matches/${id}`} className="link-container">
        <div className="container">
          <img src={teamImageUrl} alt={name} className="image-1" />
          <h1 className="heading">{name}</h1>
        </div>
      </Link>
    </li>
  )
}
export default TeamCard
