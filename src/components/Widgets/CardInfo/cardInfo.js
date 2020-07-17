import React from 'react';
import Fontawesome from 'react-fontawesome'

// style 
import style from './cardInfo.css'

const cardInfo = (props) => {
  const { teams, teamId, date } = props

  const teamName = (teams, team) => {
    let data = teams.find((item => {
      return item.id === team
    }));
    return data ? data.name : 'Team'
  }

  return (
    <div className={style.cardInfo}>
      <span className={style.teamName}>
        {teamName(teams, teamId)}
      </span>
      <span className={style.date}>
        <Fontawesome name='clock-o' /> {date}
      </span>
    </div>
  )
}

export default cardInfo;
