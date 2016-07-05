import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/about';
const cx = classNames.bind(styles);

import LoginOrRegister from 'containers/LoginOrRegister'

import TiChartLineOutline from 'react-icons/lib/ti/chart-line-outline'
import FaAngellist from 'react-icons/lib/fa/angellist'
import GoOrganization from 'react-icons/lib/go/organization'

const Features = () => {
  return (
    <section className={cx("splash-image")}>
      <div className={cx("hero-img-items")}>                       
        
        <div className={cx("icon-column")}>
          <FaAngellist className={cx('cab')} />              
          <h4 className={cx("lead")}>Angel List with workflow tools</h4>              
        </div>
      
        <div className={cx("icon-column")}>
          <TiChartLineOutline className={cx('cab')} />              
          <h4 className={cx("lead")}>Track your application history</h4>              
        </div>
              
        <div className={cx("icon-column")}>
            <GoOrganization cx={("cab")}/>
            <h4 className={cx("lead")}>Maintain and grow your network</h4>              
        </div>       
                                 
      </div>
      
      <div className={cx("login-page")}>
      <LoginOrRegister />                    
      </div>
      
    
    </section>
  )
}

export default Features