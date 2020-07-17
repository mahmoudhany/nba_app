import React from 'react';
import { Link } from 'react-router-dom'
import { CURRENT_YEAR } from '../../config'
// style
import style from '../Footer/footer.css'


const header = () => {
  return (
    <div className={style.footer}>
      <Link to='/' className={style.logo}>
        <img src="/images/nba_logo.png" alt="Logo" />
      </Link>
      <div className={style.copyright}>
        &copy;NBA {CURRENT_YEAR} All right reserved
      </div>
    </div>
  );
};

export default header;
